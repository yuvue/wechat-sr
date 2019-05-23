const User = require('../models/user')
const Contact = require('./contact')
const ContactInfo = require('./contactinfo')
const Message = require('../models/message')
const Group = require('../models/group')
const { editObject, reject, resolve } = require('../utils/tools')
const errCode = require('../config/errCode')
const pinyin = require('js-pinyin')
const async = require('async')

const convertGroupData = async (groups, user_id) => {
  let res = []
  for (let g of groups) {
    let idList = []

    for (let id of g.idList) {
      let { avatar } = await User.findById(user_id, { avatar: 1, _id: 0 })
      idList.push({ id, avatar })
    }
    let messageList = await Message.find({
      $or: [{ from_id: g._id }, { to_id: g._id }],
    })
    res.push({
      ...g._doc,
      idList,
      user_id,
      contact_id: g._id,
      messageList,
      type: 'group',
    })
  }
  return res
}

const getGroups = async function(user_id) {
  let groups = await Group.find({ idList: { $in: [user_id] } })
  groups = await convertGroupData(groups, user_id)
  return resolve(groups)
}

// 获取用户对应的联系人列表，其中包含对应的消息数组
const getContacts = async function(user_id) {
  // 找到所有联系人
  let c1 = await Contact.aggregate([{ $match: { user_id } }])
  let c2 = await Contact.aggregate([
    {
      $match: { contact_id: user_id },
    },
    {
      $project: {
        user_id: '$contact_id',
        contact_id: '$user_id',
        _id: 1,
        config: 1,
        contactType: 1,
        add_time: 1,
        last_edit_time: 1,
      },
    },
  ])
  let contacts = [...c1, ...c2]
  // 加入消息列表、备注等到每个联系人
  contacts = await Promise.all(
    contacts.map(async item => {
      const contact_id = item.contact_id
      let messageList = []
      let info = await ContactInfo.findOne({ user_id, contact_id }, '-_id')
      messageList = await Message.get(user_id, contact_id)
      let { avatar, email } = (await User.findById(contact_id))._doc
      return {
        ...item,
        ...info._doc,
        messageList,
        avatar,
        email,
        type: 'friend',
      }
    })
  )

  let groups = await getGroups(user_id)

  return contacts.concat(groups)
}

/**
 * 判断是否已存在该联系人
 *
 * @param {String} user_id 用户id
 * @param {String} contact_id 联系人id
 */
const hasContact = async (user_id, contact_id) => {
  let c = await Contact.find({
    $or: [
      { user_id, contact_id },
      { user_id: contact_id, contact_id: user_id },
    ],
  })
  return c.length > 0
}

/**
 * 判断是否已存在该联系人
 *
 * @param {String} user_id 用户id
 * @param {String} contact_id 联系人id
 */
const editContactInfo = async (user_id, contact_id) => {
  let remark = (await User.findById(contact_id)).nickname
  let alpha = pinyin.getCamelChars(remark).toUpperCase()
  let last_edit_time = new Date().getTime()
  let info = await ContactInfo.create({
    remark,
    alpha,
    user_id,
    contact_id,
    last_edit_time,
  })
  if (!info) {
    let code = 3020001
    return reject({ code, msg: errCode[code] })
  }
  return resolve({ code: 0, info })
}

/**
 * 用于创建联系人， 同时会在info表生成备注等信息
 *
 * @param {String} user_id 用户id
 * @param {String} contact_id 联系人id
 * @param {String} verifyText 验证消息
 */
const saveContact = async function(user_id, contact_id, verifyText) {
  let isContact = await hasContact(user_id, contact_id)
  // 联系人已存在
  // if (isContact) {
  //   let code = 301001
  //   return reject({ code, msg: errCode[code] })
  // }
  // 否则创建
  try {
    let contact = await Contact.create({
      user_id,
      contact_id,
      verifyText,
      addFrom: user_id,
    })
    // 创建联系人和用户的相互的remark等消息
    let { info: u_c_info } = await editContactInfo(user_id, contact_id)
    let { info: c_u_info } = await editContactInfo(contact_id, user_id)
    // 创建成功
    // 获取联系人avatar信息
    let c = await User.findById(contact_id)
    let u = await User.findById(user_id)
    let messageList = []
    let user_contact = {
      ...contact._doc,
      ...u_c_info._doc,
      avatar: c.avatar,
      email: c.email,
      messageList,
    }
    let contact_user = {
      ...contact._doc,
      ...c_u_info._doc,
      avatar: u.avatar,
      email: u.email,
      messageList,
    }
    return resolve({ user_contact, contact_user })
  } catch (e) {
    // 创建失败
    let code = 3000001
    return reject({ code, msg: errCode[code] })
  }
}

const setRemark = async function(user_id, contact_id, remark) {
  let alpha = pinyin.getCamelChars(remark).toUpperCase()
  let res = await ContactInfo.updateOne(
    { user_id, contact_id },
    { remark, alpha }
  )
  if (!res) return reject({ msg: '修改备注出错' })
  return resolve({
    msg: '修改备注成功',
    data: { id: contact_id, remark, alpha },
  })
}

const saveMessage = async function(data) {
  let res = await Message.create(data)
  let remark = (await ContactInfo.findOne({ contact_id: data.from_id })).remark
  if (res) return resolve({ msg: `${remark}给您发来消息`, data: res })
  else reject({ msg: '存储消息出错' })
}

const getOneContact = async function(user_id, contact_id) {
  try {
    let contact = await Contact.findOne({ user_id, contact_id })
    let info = await ContactInfo.findOne({ user_id, contact_id })
    let userinfo = await User.findById(contact_id)
    let messageList = await Message.find({
      $or: [
        { from_id: user_id, to_id: contact_id },
        { from_id: contact_id, to_id: user_id },
      ],
    })
    return resolve({
      ...contact._doc,
      ...info._doc,
      avatar: userinfo.avatar,
      email: userinfo.email,
      messageList,
    })
  } catch (e) {
    return reject(e)
  }
}

module.exports = {
  getContacts,
  saveContact,
  hasContact,
  editContactInfo,
  setRemark,
  saveMessage,
  getOneContact,
  getGroups,
  convertGroupData,
}

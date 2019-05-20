const User = require('../models/user')
const Contact = require('./contact')
const ContactInfo = require('./contactinfo')
const Message = require('../models/message')
const { editObject, reject, resolve } = require('../utils/tools')
const errCode = require('../config/errCode')
const pinyin = require('js-pinyin')

// 获取用户对应的联系人列表，其中包含对应的消息数组
const getContacts = async function(user_id) {
  // 找到所有联系人
  let contacts = await Contact.find({
    user_id,
    config: 1,
  })
  // 加入消息列表、备注等到每个联系人
  contacts = await Promise.all(
    contacts.map(async item => {
      const contact_id = item.contact_id
      let messageList = []
      let info = await ContactInfo.findOne({ user_id, contact_id }, '-_id')
      messageList = await Message.get(user_id, contact_id)
      return {
        ...item._doc,
        ...info._doc,
        messageList,
      }
    })
  )
  return contacts
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
  let alpha = pinyin.getCamelChars(remark)[0]
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
  if (isContact) {
    let code = 301001
    return reject({ code, msg: errCode[code] })
  }
  // 否则创建
  let a = await Contact.create({ user_id, contact_id, verifyText })
  let { info } = await editContactInfo(user_id, contact_id)

  // 创建失败
  if (!(a && info)) {
    let code = 3000001
    return reject({ code, msg: errCode[code] })
  }
  // 创建成功
  return resolve({ ...a._doc, ...info._doc })
}

module.exports = { getContacts, saveContact, hasContact, editContactInfo }

const Router = require('koa-router')
const Contact = require('../models/contact')
const {
  getContacts,
  saveContact,
  setRemark,
  getOneContact,
} = require('../models/index')

let router = new Router({ prefix: '/api/contact' })

router.get('/', async ctx => {
  let user_id = ctx.request.body.user_id
  let res = await getContacts(user_id)
  ctx.body = res
})

router.put('/', async ctx => {
  let user_id = ctx.session.passport.user
  let { id, verifyText = '' } = ctx.request.body
  ctx.send(id, { msg: 'fdf' })
  try {
    let { user_contact, contact_user } = await saveContact(
      user_id,
      id,
      verifyText
    )
    let msg = '发送验证消息成功，等待对方添加'
    ctx.send(id, {
      msg: `${contact_user.remark}请求添加你为好友`,
      data: contact_user,
      type: 'ADD_CONTACT',
    })
    ctx.body = { code: 0, user: user_contact, msg }
  } catch (e) {
    ctx.status = 403
    ctx.body = e
  }
})

router.put('/remark', async ctx => {
  let user_id = ctx.session.passport.user
  let { id: contact_id, remark } = ctx.request.body
  try {
    let res = await setRemark(user_id, contact_id, remark)
    ctx.body = { code: 0, ...res }
  } catch (e) {
    ctx.status = 403
    ctx.body = e
  }
})

router.patch('/config', async ctx => {
  let user_id = ctx.session.passport.user
  let { config, id } = ctx.request.body
  try {
    let res = await Contact.updateOne(
      {
        $or: [
          { user_id, contact_id: id },
          { user_id: id, contact_id: user_id },
        ],
      },
      { config }
    )
    if (res) {
      let contact = await getOneContact(id, user_id)
      ctx.body = { code: 0, msg: '添加成功' }
      ctx.send(id, { type: 'CONFIG_CONTACT', data: { id: user_id, config } })
    }
  } catch (e) {
    ctx.status = 403
    ctx.body = e
  }
})

module.exports = router

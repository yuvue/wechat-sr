const Router = require('koa-router')
const { getContacts, saveContact, setRemark } = require('../models/index')

let router = new Router({ prefix: '/api/contact' })

router.get('/', async ctx => {
  let user_id = ctx.request.body.user_id
  let res = await getContacts(user_id)
  ctx.body = res
})

router.put('/', async ctx => {
  let user_id = ctx.session.passport.user
  let contact_id = ctx.request.body.id
  try {
    let res = await saveContact(user_id, contact_id)
    let user = { ...res, messageList: [] }
    let msg = '发送验证消息成功，等待对方添加'
    ctx.body = { code: 0, user, msg }
  } catch (e) {
    console.log('e', e)
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
    console.log('e', e)
    ctx.status = 403
    ctx.body = e
  }
})

module.exports = router

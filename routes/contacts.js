const Router = require('koa-router')
const { getContacts, saveContact } = require('../models/index')

let router = new Router({ prefix: '/api/contact' })

router.get('/', async ctx => {
  let user_id = ctx.request.body.user_id
  let res = await getContacts(user_id)
  ctx.body = res
})

router.put('/', async ctx => {
  let id1 = ctx.session.passport.user
  let id2 = ctx.request.body.id
  try {
    let res = await saveContact(id1, id2)
    let user = { ...res, messageList: [] }
    let msg = '发送验证消息成功，等待对方添加'
    ctx.body = { user, msg }
  } catch (e) {
    console.log('e', e)
    ctx.status = 403
    ctx.body = e
  }
})

module.exports = router

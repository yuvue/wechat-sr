const Router = require('koa-router')
const Message = require('../models/message')
const {
  getContacts,
  saveContact,
  setRemark,
  saveMessage,
} = require('../models/index')

let router = new Router({ prefix: '/api/message' })

router.get('/', async ctx => {
  let user_id = ctx.request.body.user_id
  let res = await getContacts(user_id)
  ctx.body = res
})

router.put('/', async ctx => {
  let user_id = ctx.session.passport.user
  let to_id = ctx.request.body.to_id
  console.log(ctx.request.body)
  try {
    let res = await saveMessage(ctx.request.body)
    if (res) {
      let msg = '发送消息成功'
      ctx.body = { code: 0, ...res, msg }
      ctx.send(to_id, { ...res, type: 'GET_MESSAGE' })
    }
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
    console.log('e', e)
    ctx.status = 403
    ctx.body = e
  }
})

module.exports = router

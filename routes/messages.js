const Router = require('koa-router')
const Message = require('../models/message')
const Group = require('../models/group')
const { getPath } = require('../utils/tools')
const {
  getContacts,
  saveContact,
  setRemark,
  saveMessage,
} = require('../models/index')

let router = new Router({ prefix: '/api/message' })

async function sendMessage(ctx, data) {
  let user_id = ctx.session.passport.user
  let to_id = ctx.request.body.to_id
  let msg = '发送消息成功'
  ctx.body = { code: 0 }
  let isGroup = await Group.findById(to_id)
  if (isGroup) {
    ctx.broadcast(user_id, { ...data, type: 'SEND_MESSAGE' }, true)
  } else {
    ctx.send(user_id, { ...data, type: 'SEND_MESSAGE', msg: '发送成功' })
    ctx.send(to_id, { ...data, type: 'GET_MESSAGE' })
  }
}

router.get('/', async ctx => {
  let user_id = ctx.request.body.user_id
  let res = await getContacts(user_id)
  ctx.body = res
})

router.put('/text', async ctx => {
  try {
    let res = await saveMessage(ctx.request.body)
    if (res) return sendMessage(ctx, res)
  } catch (e) {
    ctx.status = 403
    ctx.body = e
  }
})

router.put('/audio', async ctx => {
  let src = getPath('/upload', ctx.request.files.audio.path)
  let { sec, from_id, to_id } = ctx.request.body
  try {
    let res = await saveMessage({
      from_id,
      to_id,
      audio: { sec, src },
      type: 'audio',
    })
    if (res) return sendMessage(ctx, res)
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

router.patch('/read', async ctx => {
  let to_id = ctx.session.passport.user
  let from_id = ctx.request.body.from_id
  let res = await Message.updateMany(
    { from_id, to_id },
    { $set: { hasRead: true } }
  )
  if (res) {
    ctx.body = {
      res,
      code: 0,
    }
  }
})

module.exports = router

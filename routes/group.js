const Router = require('koa-router')
const Group = require('../models/group')
const { getGroups, convertGroupData } = require('../models/index')

let router = new Router({ prefix: '/api/group' })

router.get('/', async ctx => {
  let user_id = ctx.request.body.user_id
  let res = await getContacts(user_id)
  ctx.body = res
})

router.put('/', async ctx => {
  let idList = ctx.request.body.idList
  let user_id = ctx.session.passport.user
  idList.push(user_id)
  let res = await Group.create({ idList })
  let group = await convertGroupData([res], user_id)
  ctx.broadcast(user_id, {
    msg: '新加入一个群聊',
    data: group[0],
    type: 'ADD_CONTACT',
  })
  if (res) {
    ctx.body = {
      group,
    }
  }
})

router.post('/test', async ctx => {
  // ctx.body = { res }
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

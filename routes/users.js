const Router = require('koa-router')
const User = require('../models/user')
const passport = require('../utils/passport')
const { getContacts } = require('../models/index')
const { getQuery } = require('../utils/tools')
const errCode = require('../config/errCode')

let router = new Router()
router.prefix('/api')

router.post('/login', async (ctx, next) => {
  return passport.authenticate('local', async (err, user, info) => {
    // 验证出错
    if (err) {
      ctx.status = 403
      ctx.body = {
        code: 999999,
        msg: 3000,
      }
      return
    }

    // 验证失败
    if (!user) {
      ctx.status = 403
      let code = 300091
      ctx.body = {
        code,
        msg: errCode[code],
      }
      return
    }

    // 认证成功
    let contacts = await getContacts(String(user._id))
    ctx.body = {
      code: 0,
      msg: '登录成功',
      user,
      contacts,
    }
    return ctx.login(user)
  })(ctx, next)
})

router.get('/user', async ctx => {
  ctx.send(ctx.session.passport.user, { msg: 'hahahh' })
  let query = getQuery(ctx.request.url)
  let user = await User.findOne(query)
  if (!user) {
    let code = 300092
    ctx.body = {
      code,
      msg: errCode[code],
    }
    return
  }
  ctx.body = {
    code: 0,
    user,
  }
})

router.post('/search', async ctx => {
  let email = ctx.request.body.email
  let user = await User.aggregate([
    { $match: { email } },
    {
      $project: {
        contact_id: '$_id',
        _id: 0,
        email: 1,
        nickname: 1,
        avatar: 1,
        signature: 1,
        username: 1,
      },
    },
  ])
  if (!user[0] || user[0]['contact_id'] === ctx.session.passport.user) {
    ctx.body = {
      code: 300092,
      msg: '该用户不存在',
    }
    return
  }
  let remark = user[0].nickname
  let alphaFull = pinyin.getCamelChars(remark)
  let messageList = []
  ctx.body = {
    code: 0,
    user: { ...user[0], remark, messageList, alphaFull, alpha: alphaFull[0] },
  }
})

// 修改用户信息
router.patch('/user/edit', async ctx => {
  let _id = ctx.request.body._id
  let user = await User.updateOne({ _id }, { $set: ctx.request.body })
  if (user !== null) {
    ctx.body = {
      code: 0,
      msg: '修改用户信息成功',
      user: await User.findById(_id, '-password'),
    }
  }
})

module.exports = router

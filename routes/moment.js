const Router = require('koa-router')
const Moment = require('../models/moment')
const User = require('../models/user')
const { getGroups, convertGroupData } = require('../models/index')
const { getPath } = require('../utils/tools')
const multiparty = require('koa2-multiparty')

let router = new Router({ prefix: '/api/moment' })

// router.get('/', async ctx => {
//   let user_id = ctx.request.body.user_id
//   let res = await getContacts(user_id)
//   ctx.body = res
// })

router.put('/', async ctx => {
  let { text, tags, seconds, config } = ctx.request.body
  let user_id = ctx.session.passport.user
  let files = ctx.request.files
  let imgSrcList = []
  let audioPath = ''
  let data = { text, tags, config, user_id }

  if (seconds && files.audio) {
    let audioPath = getPath('/upload', files.audio.path)
    data.audio = {
      src: audioPath,
      sec: seconds,
    }
  }

  for (let i = 0; i < Object.keys(files).length; i++) {
    if (files[`i${i}`]) {
      let src = getPath('/upload', files[`i${i}`]['path'])
      imgSrcList.push(src)
    }
  }

  imgSrcList.length && (data.img = imgSrcList)

  let res = await Moment.create(data)
  if (res) {
    let { avatar, nickname } = (await User.findById(user_id, {
      avatar: 1,
    }))._doc
    ctx.body = {
      data: { ...res._doc, avatar },
      msg: '发表瞬间成功',
    }
  }
})

module.exports = router

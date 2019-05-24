const Router = require('koa-router')
const Moment = require('../models/moment')
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
  let files = ctx.request.files
  let imgSrcList = []
  let audioPath = ''
  let data = { text, tags, config }

  if (seconds) {
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
    ctx.body = { data: res, msg: '发表瞬间成功' }
  }
})

module.exports = router

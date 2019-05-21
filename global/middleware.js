const path = require('path')
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const passport = require('../utils/passport')
const session = require('koa-generic-session')
const Redis = require('koa-redis')
var http = require('http')

const koaBodyConfig = {
  multipart: true, // 支持文件上传
  encoding: 'utf-8',
  formidable: {
    uploadDir: path.join(__dirname, 'static/img/avatar'), // 设置文件上传目录
    keepExtensions: true, // 保持文件的后缀
    maxFieldsSize: 1 * 1024 * 1024, // 文件上传大小
  },
}
const sessionConfig = {
  key: 'wechat',
  prefix: 'wechat:uid',
  store: new Redis(),
  cookie: {
    maxAge: 10 ** 15,
  },
}

module.exports = function(app) {
  // error handler
  onerror(app)
  const server = http.createServer(app.callback())

  let io = require('../socket/socket')(server)

  app.use(json())
  app.use(logger())

  app.use(koaBody(koaBodyConfig))

  app.keys = ['wechat', 'keyskeys']
  app.proxy = true
  app.use(session(sessionConfig))

  app.use(passport.initialize())
  app.use(passport.session())

  app.use(async (ctx, next) => {
    ctx.io = io
    ctx.send = (to_id, data) => {
      // let id = io.clientMap.get(to_id)
      // console.log(id)
      io.of(to_id).emit(to_id, data)
    }
    await next()
  })

  app.use(require('koa-static')(__dirname + '/public'))
  app.use(require('koa-static')(__dirname + '/views'))

  return server
}

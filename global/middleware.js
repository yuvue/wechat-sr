const path = require('path')
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const passport = require('../utils/passport')
const session = require('koa-generic-session')
const Redis = require('koa-redis')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const { wss } = require('../utils/socket')
const http = require('http')

const koaBodyConfig = {
  multipart: true, // 支持文件上传
  encoding: 'utf-8',
  formidable: {
    uploadDir: path.join(__dirname, '../public/upload'), // 设置文件上传目录
    keepExtensions: true, // 保持文件的后缀
    maxFieldsSize: 1 * 1024 * 1024, // 文件上传大小
    onFileBegin(name, file) {
      name === 'audio' && (file.path = file.path + '.amr')
    },
  },
}
const sessionConfig = {
  key: 'wechat',
  prefix: 'wechat:uid',
  store: new Redis(),
  cookie: {
    maxAge: 60 * 1000 * 60 * 24,
    httpOnly: false,
  },
}

module.exports = function(app) {
  // error handler
  onerror(app)
  const server = http.createServer(app.callback())

  app.use(json())
  app.use(logger())

  app.use(
    historyApiFallback({
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
      whiteList: ['/api'],
    })
  )

  app.use(koaBody(koaBodyConfig))

  app.keys = ['wechat', 'keyskeys']
  app.proxy = true
  app.use(session(sessionConfig))

  app.use(passport.initialize())
  app.use(passport.session())

  app.use(async (ctx, next) => {
    ctx.send = wss.send
    ctx.broadcast = wss.broadcast
    await next()
  })

  app.use(require('koa-static')(path.join(__dirname, '../public')))
  app.use(require('koa-static')(path.join(__dirname, '../dist')))

  return server
}

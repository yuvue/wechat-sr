const path = require('path')
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const koaBody = require('koa-body')
const passport = require('../utils/passport')
const session = require('koa-generic-session')
const Redis = require('koa-redis')
const { wss } = require('../socket/socket')

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

  app.use(async (ctx, next) => {
    let start = new Date()
    await next()
    let ms = new Date() - start
    console.log('%s %s - %s', this.method, this.url, ms)
  })

  app.use(json())
  app.use(logger())

  app.use(koaBody(koaBodyConfig))

  app.keys = ['wechat', 'keyskeys']
  app.proxy = true
  app.use(session(sessionConfig))

  app.use(passport.initialize())
  app.use(passport.session())

  // app.use(async (ctx, next) => {
  //   let id = ctx.session.passport.user
  //   ctx.send = (id, msg) => {
  //     let data
  //     try {
  //       data = JSON.stringify(msg)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //     ;[...wss.clients].forEach(ws => {
  //       if (ws.id === id) ws.send(data)
  //     })
  //   }
  //   ctx.broadcast = msg => {
  //     let data
  //     try {
  //       data = JSON.stringify(msg)
  //     } catch (e) {
  //       console.log(e)
  //     }
  //     ;[...wss.clients].forEach(ws => {
  //       ws.send(data)
  //     })
  //   }
  //   await next()
  // })

  app.use(require('koa-static')(__dirname + '/public'))
  app.use(require('koa-static')(__dirname + '/views'))
}

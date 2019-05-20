const router = require('koa-router')()

router.prefix('/api')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
  })
})

router.post('/upload', async ctx => {
  let srcPath = ctx.request.files.file.path
  let src = srcPath.slice(srcPath.indexOf('/img'))
  ctx.body = {
    code: 0,
    src,
  }
})

module.exports = router

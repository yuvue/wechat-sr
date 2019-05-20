let app = new (require('koa'))()

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

require('./global/connectMongoDB')
let server = require('./global/middleware')(app)
require('./global/routes')(app)

module.exports = server

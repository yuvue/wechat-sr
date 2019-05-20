const index = require('../routes')
const users = require('../routes/users')
const contacts = require('../routes/contacts')

module.exports = function(app) {
  app.use(index.routes(), index.allowedMethods())
  app.use(users.routes(), users.allowedMethods())
  app.use(contacts.routes(), contacts.allowedMethods())
}

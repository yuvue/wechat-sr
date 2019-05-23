const index = require('../routes')
const users = require('../routes/users')
const messages = require('../routes/messages')
const contacts = require('../routes/contacts')
const group = require('../routes/group')

module.exports = function(app) {
  app.use(index.routes(), index.allowedMethods())
  app.use(users.routes(), users.allowedMethods())
  app.use(messages.routes(), messages.allowedMethods())
  app.use(contacts.routes(), contacts.allowedMethods())
  app.use(group.routes(), group.allowedMethods())
}

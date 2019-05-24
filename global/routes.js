const index = require('../routes')
const users = require('../routes/users')
const messages = require('../routes/messages')
const contacts = require('../routes/contacts')
const group = require('../routes/group')
const moment = require('../routes/moment')

module.exports = function(app) {
  app.use(index.routes(), index.allowedMethods())
  app.use(users.routes(), users.allowedMethods())
  app.use(messages.routes(), messages.allowedMethods())
  app.use(contacts.routes(), contacts.allowedMethods())
  app.use(group.routes(), group.allowedMethods())
  app.use(moment.routes(), moment.allowedMethods())
}

let mongoose = require('mongoose')
let { dbs } = require('../config/mongodb')

mongoose.connect(dbs, {
  useNewUrlParser: true,
})

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('connected', function() {})
db.once('disconnected', function() {})

module.exports = db

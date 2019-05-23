const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')
const pinyin = require('js-pinyin')

const contactInfoSchema = new Schema(
  {
    user_id: {
      type: String,
      require: true,
    },
    contact_id: {
      type: String,
      require: true,
    },
    remark: {
      type: String,
    },
    alpha: {
      type: String,
    },
    last_edit_time: {
      type: Number,
      default: new Date().getTime(),
      require: true,
    },
  },
  {
    versionKey: false,
  }
)

const contactInfo = mongoose.model('contactInfo', contactInfoSchema)

module.exports = contactInfo

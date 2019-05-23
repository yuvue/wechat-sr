const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema(
  {
    user_id: {
      type: String,
      require: true,
    },
    contact_id: {
      type: String,
      require: true,
    },
    config: {
      type: Number,
      default: 0,
    },
    verifyText: {
      type: String,
    },
    addFrom: {
      type: String,
      default: '',
    },
    add_time: {
      type: Number,
      default: new Date().getTime(),
      require: true,
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

const contact = mongoose.model('contact', contactSchema)

module.exports = contact

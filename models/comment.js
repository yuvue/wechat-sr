const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    text: {
      type: String,
      require: true,
    },
    user_id: {
      type: String,
      require: true,
    },
    to_id: {
      type: String,
      require: true,
    },
    add_time: {
      type: Number,
      default: new Date().getTime(),
      require: true,
    },
  },
  {
    versionKey: false,
  }
)

const comment = mongoose.model('comment', commentSchema)

module.exports = comment

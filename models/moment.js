const mongoose = require('mongoose')
const Schema = mongoose.Schema

const momentSchema = new Schema(
  {
    tags: {
      type: Array,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    user_id: {
      type: String,
      require: true,
    },
    img: {
      type: Array,
    },
    audio: {
      type: Object,
    },
    collects: {
      type: Array,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    forwards: {
      type: Number,
      default: 0,
    },
    // -1自己可见 1好友可见 2广场可见
    config: {
      type: Number,
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

const moment = mongoose.model('moment', momentSchema)

module.exports = moment

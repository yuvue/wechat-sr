const mongoose = require('mongoose')
const Schema = mongoose.Schema

let i = 1

const GroupSchema = new Schema(
  {
    idList: {
      type: Array,
      require: true,
    },
    remark: {
      type: String,
      require: true,
      default: '群聊' + ++i,
    },
    avatar: {
      type: String,
      default: '/img/avatar/default.jpeg',
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

const group = mongoose.model('group', GroupSchema)

module.exports = group

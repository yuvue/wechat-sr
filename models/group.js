const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GroupSchema = new Schema(
  {
    memberList: {
      type: Array,
      require: true,
    },
    remark: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default: 'img/avatar/default.jpeg',
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

const group = mongoose.model('group', GroupSchema)

module.exports = group

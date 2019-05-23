var mongoose = require('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    nickname: {
      type: String,
      default: '默认昵称',
    },
    avatar: {
      type: String,
      default: 'img/avatar/default.jpeg',
    },
    address: {
      type: Object,
      require: true,
    },
    signature: {
      type: String,
      default: '这是一条默认个性签名',
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

const user = mongoose.model('User', userSchema)

module.exports = user

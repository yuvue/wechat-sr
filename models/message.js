const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema(
  {
    from_id: {
      type: String,
      require: true,
    },
    to_id: {
      type: String,
      require: true,
    },
    msg: {
      type: Object,
      require: true,
    },
    time: {
      type: Number,
      default: new Date().getTime(),
    },
    hasRead: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  {
    versionKey: false,
  }
)

const message = mongoose.model('message', messageSchema)

message.get = async (id1, id2) => {
  return await message.find({
    $or: [
      {
        from_id: id1,
        to_id: id2,
      },
      {
        from_id: id2,
        to_id: id1,
      },
    ],
  })
}

module.exports = message

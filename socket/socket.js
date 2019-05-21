const { getIdFromCookie } = require('../utils/tools')

/**
 * 用于连接socket
 *
 * @param {Object} app 后端app
 */
function addSocketServer(app) {
  let io = require('socket.io')(app)
  let clientMap = new Map()
  io.on('connection', async socket => {
    let id = await getIdFromCookie(socket.request.headers.cookie)
    if (!id) {
      socket.use((packet, next) => {
        next(new Error('缺乏身份认证'))
      })
    }
    socket.on('disconnect', () => {
      console.log(`${id}, exit`)
    })

    console.log(`${id}, add`)

    clientMap.set(id, socket.id)
    io.clientMap = clientMap
  })
  return io
}

module.exports = addSocketServer

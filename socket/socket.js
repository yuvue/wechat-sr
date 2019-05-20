const { getIdFromCookie } = require('../utils/tools')

/**
 * 用于连接socket
 *
 * @param {Object} app 后端app
 */
function addSocketServer(app) {
  let io = require('socket.io')(app)
  io.on('connection', async socket => {
    console.log('user add')
    io.on('disconnect', () => {
      console.log('user exit')
    })
    let id = await getIdFromCookie(socket.request.headers.cookie)
    socket.emit('news', { msg: 22 })
    if (!id) {
      socket.emit('error', { msg: '缺乏身份认证' })
    }
    socket.id = id
  })
  return io
}

module.exports = addSocketServer

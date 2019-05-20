const WebSocket = require('ws')
const url = require('url')
const { getIdFromCookie, reject } = require('../utils/tools')
const onmessage = require('./onmessage')
const http = require('http')

const wss = new WebSocket.Server({ noServer: true })

wss.on('connection', (ws, request) => {
  //
})

wss.onmessage = onmessage

wss.onerror = function(code, reason) {
  console.log('异常关闭')
}

// 之前bug，不增加以下异常监听就一直出错
// wss.on('close', function(code, reason) {
//   console.log('关闭连接')
// })
// wss.on('error', function(code, reason) {
//   console.log('异常关闭')
// })

/**
 * 用于连接socket
 *
 * @param {Object} app 后端app
 */
function addSocketServer(app) {
  // app.on('upgrade', async (request, ws, head) => {
  //   const id = await getIdFromCookie(request.headers.cookie)
  //   // 不存在用户则销毁
  //   console.log(ws)
  //   // for (let v of Object.keys(ws)) {
  //   //   console.log(v)
  //   //   typeof Object[v] === 'function' && console.log(v)
  //   // }
  //   if (!id) {
  //     console.log('id不存在')
  //     // return ws.close()
  //   }
  //   // 路径不对也销毁
  //   if (url.parse(request.url).pathname !== '/wechat') {
  //     console.log('路径不存在')
  //     // return ws.close()
  //   }
  //   // 同一用户多次连接socket，则销毁socket
  //   if ([...wss.clients].some(item => item.id === id)) {
  //     console.log('用户已连接')
  //     // return ws.close()
  //   }
  //
  //   wss.handleUpgrade(request, ws, head, function done(ws) {
  //     // 连接成功后，把id加到上面
  //     ws.id = id
  //     ws.send(JSON.stringify({ msg: '你好，你连接成功了' }))
  //     wss.emit('connection', ws, request)
  //   })
  // })
  const io = require('socket.io')(app)
  io.on('connection', client => {
    console.log('client', client)
    // client.on('event', data => { /* … */ });
    // client.on('disconnect', () => { /* … */ });
  })
}

module.exports = {
  addSocketServer,
  // wss,
}

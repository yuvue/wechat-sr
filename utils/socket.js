const WebSocket = require('ws')
const User = require('../models/user')

let wss = new WebSocket.Server({ noServer: true })
let clients = wss.clients
let online = 0

wss.on('connection', (ws, user) => {
  console.log(`${user.email}加入`)
  ws.on('message', () => {})
  ws.send(JSON.stringify({ msg: '连接socket成功' }))
  online++
  ws.on('close', (code, reason) => {
    console.log(`${user.email}退出`)
    online--
  })
})

wss.send = function(to_id, msg) {
  try {
    typeof msg === 'object' && (msg = JSON.stringify(msg))
  } catch (e) {
    console.log('转换异常')
  }
  ;[...wss.clients].some(client => client.id === to_id && client.send(msg))
}

async function upgrade(request, socket, head) {
  let reg = /id=(.*)/.exec(request.url)
  let id = reg[1] || ''
  let user = await User.findById(id)
  if (!user) return socket.destroy()
  wss.handleUpgrade(request, socket, head, function done(ws) {
    ws.id = id
    wss.emit('connection', ws, user)
  })
}
module.exports = { upgrade, wss }

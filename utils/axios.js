let axios = require('axios')

module.exports = axios.create({
  baseURL: `http://${process.env.HOST || '127.0.0.1'}:${process.env.PORT ||
    3000}/api`,
  timeout: 5000
})

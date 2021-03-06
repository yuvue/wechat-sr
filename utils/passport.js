let passport = require('koa-passport')
let LocalStrategy = require('passport-local')
let User = require('../models/user')

passport.use(
  new LocalStrategy(async (username, password, done) => {
    let user = await User.findOne({ username })
    if (!user) {
      return done(null, false, '用户名不存在')
    }
    if (user.password !== password) {
      return done(null, false, '密码错误')
    }
    return done(null, user)
  })
)

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

module.exports = passport

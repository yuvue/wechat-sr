let passport = require('koa-passport')
let LocalStrategy = require('passport-local')
let User = require('../models/user')

passport.use(
  new LocalStrategy(async (username, password, done) => {
    console.log('local')
    let user = await User.findOne({ username })
    console.log(user)
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
  console.log('serialize')
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  console.log('deserialize')
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

module.exports = passport

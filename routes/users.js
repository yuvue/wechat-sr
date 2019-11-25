const Router = require('koa-router');
const User = require('../models/user');
const Moment = require('../models/moment');
const passport = require('../utils/passport');
const { getContacts, getResFromMoment } = require('../models/index');
const { getQuery } = require('../utils/tools');
const sendMail = require('../utils/mail');
const errCode = require('../config/errCode');
const stmp = require('../config/stmp');
const redisClient = require('redis').createClient();

let router = new Router();
router.prefix('/api');

router.post('/login', async (ctx, next) => {
  return passport.authenticate('local', async (err, user, info) => {
    // 验证出错
    if (err) {
      ctx.status = 403;
      ctx.body = {
        code: 999999,
        msg: 3000
      };
      return;
    }

    // 验证失败
    if (!user) {
      ctx.status = 403;
      let code = 300091;
      ctx.body = {
        code,
        msg: errCode[code]
      };
      return;
    }

    // 认证成功
    let contacts = await getContacts(String(user._id));

    // 获取瞬间
    let idList = contacts.map(({ contact_id }) => contact_id);
    idList.push(user._id);
    let friendList = await Moment.find({ user_id: { $in: idList } })
      .sort({ add_time: -1 })
      .limit(200);

    let allList = await Moment.find({})
      .sort({ add_time: -1 })
      .limit(300);

    friendList = await getResFromMomentList(friendList);
    allList = await getResFromMomentList(allList);

    ctx.body = {
      code: 0,
      msg: '登录成功',
      user,
      contacts,
      moments: { friendList, allList }
    };
    return ctx.login(user);
  })(ctx, next);
});

router.put('/user', async (ctx, next) => {
  let { code, username, password, email } = ctx.request.body;
  let user = User.findOne({ username });
  if (user) {
    ctx.status = 403;
    return (ctx.body = {
      code: -1,
      msg: '用户名已存在'
    });
  }
  try {
    let resBody = await new Promise((y, n) => {
      redisClient.get(email, async (err, info) => {
        let { verifyCode, expireDate } = JSON.parse(info);
        if (err) return;
        if (code !== verifyCode) {
          ctx.status = 403;
          n('验证码不正确');
        }
        if (Date.now() > expireDate) {
          ctx.status = 403;
          n('验证码已过期，请重新发送');
        }
        let user = await User.create({ username, password, email });
        if (user) y({ code: 0, msg: '注册成功', user });
      });
    });
    ctx.body = resBody;
  } catch (error) {
    ctx.body = {
      code: -1,
      msg: error
    };
  }
});

router.post('/user/code', async (ctx, next) => {
  let { email } = ctx.request.query;
  let user = User.findOne({ email });
  if (user) {
    ctx.status = 403;
    return (ctx.body = { code: -1, msg: '该邮箱已注册' });
  }
  let verifyCode = stmp.code;
  let flag = await sendMail(
    email,
    '注册微信',
    `<h2>欢迎使用微信，验证码为 <b style='color: red'>${verifyCode}</b>, 有效期1分钟</h2>`
  );
  if (flag) {
    redisClient.set(
      email,
      JSON.stringify({ verifyCode, expireDate: stmp.expire })
    );
    ctx.body = {
      verifyCode
    };
  }
});

router.get('/user', async ctx => {
  let query = getQuery(ctx.request.url);
  let user = await User.findOne(query);
  if (!user) {
    let code = 300092;
    ctx.body = {
      code,
      msg: errCode[code]
    };
    return;
  }
  ctx.body = {
    code: 0,
    user
  };
});

router.post('/search', async ctx => {
  let email = ctx.request.body.email;
  let user = await User.aggregate([
    { $match: { email } },
    {
      $project: {
        contact_id: '$_id',
        _id: 0,
        email: 1,
        nickname: 1,
        avatar: 1,
        signature: 1,
        username: 1
      }
    }
  ]);
  if (!user[0] || user[0]['contact_id'] === ctx.session.passport.user) {
    ctx.body = {
      code: 300092,
      msg: '该用户不存在'
    };
    return;
  }
  let remark = user[0].nickname;
  let alphaFull = pinyin.getCamelChars(remark);
  let messageList = [];
  ctx.body = {
    code: 0,
    user: {
      ...user[0],
      remark,
      messageList,
      alphaFull,
      alpha: alphaFull[0]
    }
  };
});

// 修改用户信息
router.patch('/user/edit', async ctx => {
  let _id = ctx.request.body._id;
  let user = await User.updateOne({ _id }, { $set: ctx.request.body });
  if (user !== null) {
    ctx.body = {
      code: 0,
      msg: '修改用户信息成功',
      user: await User.findById(_id, '-password')
    };
  }
});

router.post('/test/get', async ctx => {
  let ids = await User.find({}, { _id: 1 });
  ctx.body = { ids };
});

async function getResFromMomentList(moments) {
  let list = [];
  for (let i = 0; i < moments.length; i++) {
    let moment = await getResFromMoment(moments[i]);
    list.push(moment);
  }
  return list;
}

module.exports = router;

;(function(n) {
  function t(t) {
    for (
      var c, r, u = t[0], i = t[1], s = t[2], f = 0, d = [];
      f < u.length;
      f++
    )
      (r = u[f]), a[r] && d.push(a[r][0]), (a[r] = 0)
    for (c in i) Object.prototype.hasOwnProperty.call(i, c) && (n[c] = i[c])
    l && l(t)
    while (d.length) d.shift()()
    return o.push.apply(o, s || []), e()
  }
  function e() {
    for (var n, t = 0; t < o.length; t++) {
      for (var e = o[t], c = !0, r = 1; r < e.length; r++) {
        var u = e[r]
        0 !== a[u] && (c = !1)
      }
      c && (o.splice(t--, 1), (n = i((i.s = e[0]))))
    }
    return n
  }
  var c = {},
    r = { app: 0 },
    a = { app: 0 },
    o = []
  function u(n) {
    return (
      i.p +
      'js/' +
      ({}[n] || n) +
      '.' +
      {
        'chunk-142f9fc0': '0df7e752',
        'chunk-25461414': '9493bca7',
        'chunk-45717758': '4f9dfe2d',
        'chunk-470754c8': 'f3220653',
        'chunk-481c824b': 'c411d4ae',
        'chunk-4e85f3d0': 'e76e430c',
        'chunk-53702bda': '23c43357',
        'chunk-54949128': '6c899b2a',
        'chunk-5ff53d17': 'cd56dfcb',
        'chunk-61dc5e72': 'bbad0bc3',
        'chunk-76d40438': '9f120cf5',
        'chunk-7ab7a65a': 'd9bdb6c3',
        'chunk-7c18e51d': '9e7fee07',
        'chunk-7dad3e3a': 'f2af33c2',
        'chunk-4ca9b07b': 'd8e14c5e',
        'chunk-7e497ca4': 'f963eb85',
        'chunk-89a7179a': 'd2c11aa2',
        'chunk-b20be7c2': '6bd5ab92',
        'chunk-7ec3b3e1': 'ed82a7f6',
        'chunk-8297259a': '31773cd0',
        'chunk-b25dc034': 'b534498e',
        'chunk-c6a00ed0': '010f13cc',
        'chunk-ea7ef530': 'd29db392',
      }[n] +
      '.js'
    )
  }
  function i(t) {
    if (c[t]) return c[t].exports
    var e = (c[t] = { i: t, l: !1, exports: {} })
    return n[t].call(e.exports, e, e.exports, i), (e.l = !0), e.exports
  }
  ;(i.e = function(n) {
    var t = [],
      e = {
        'chunk-142f9fc0': 1,
        'chunk-25461414': 1,
        'chunk-45717758': 1,
        'chunk-470754c8': 1,
        'chunk-4e85f3d0': 1,
        'chunk-53702bda': 1,
        'chunk-54949128': 1,
        'chunk-5ff53d17': 1,
        'chunk-61dc5e72': 1,
        'chunk-76d40438': 1,
        'chunk-7ab7a65a': 1,
        'chunk-7c18e51d': 1,
        'chunk-7dad3e3a': 1,
        'chunk-4ca9b07b': 1,
        'chunk-7e497ca4': 1,
        'chunk-89a7179a': 1,
        'chunk-b20be7c2': 1,
        'chunk-7ec3b3e1': 1,
        'chunk-8297259a': 1,
        'chunk-b25dc034': 1,
        'chunk-c6a00ed0': 1,
        'chunk-ea7ef530': 1,
      }
    r[n]
      ? t.push(r[n])
      : 0 !== r[n] &&
        e[n] &&
        t.push(
          (r[n] = new Promise(function(t, e) {
            for (
              var c =
                  'css/' +
                  ({}[n] || n) +
                  '.' +
                  {
                    'chunk-142f9fc0': '67d26b0f',
                    'chunk-25461414': '6377d548',
                    'chunk-45717758': '6071e534',
                    'chunk-470754c8': 'ef9f5b1b',
                    'chunk-481c824b': '31d6cfe0',
                    'chunk-4e85f3d0': '62504ca9',
                    'chunk-53702bda': 'fe04ceb8',
                    'chunk-54949128': 'd7c2fdc2',
                    'chunk-5ff53d17': '171fd527',
                    'chunk-61dc5e72': 'baf298a0',
                    'chunk-76d40438': '6b584bb4',
                    'chunk-7ab7a65a': 'cbe2b5a1',
                    'chunk-7c18e51d': 'c2149f82',
                    'chunk-7dad3e3a': '6377d548',
                    'chunk-4ca9b07b': '35b478e6',
                    'chunk-7e497ca4': '35b478e6',
                    'chunk-89a7179a': 'f6445dac',
                    'chunk-b20be7c2': 'e17f2a58',
                    'chunk-7ec3b3e1': '2a1e59dc',
                    'chunk-8297259a': '366f7074',
                    'chunk-b25dc034': '654e3487',
                    'chunk-c6a00ed0': '02569e4b',
                    'chunk-ea7ef530': '59120c15',
                  }[n] +
                  '.css',
                a = i.p + c,
                o = document.getElementsByTagName('link'),
                u = 0;
              u < o.length;
              u++
            ) {
              var s = o[u],
                f = s.getAttribute('data-href') || s.getAttribute('href')
              if ('stylesheet' === s.rel && (f === c || f === a)) return t()
            }
            var d = document.getElementsByTagName('style')
            for (u = 0; u < d.length; u++) {
              ;(s = d[u]), (f = s.getAttribute('data-href'))
              if (f === c || f === a) return t()
            }
            var l = document.createElement('link')
            ;(l.rel = 'stylesheet'),
              (l.type = 'text/css'),
              (l.onload = t),
              (l.onerror = function(t) {
                var c = (t && t.target && t.target.src) || a,
                  o = new Error(
                    'Loading CSS chunk ' + n + ' failed.\n(' + c + ')'
                  )
                ;(o.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (o.request = c),
                  delete r[n],
                  l.parentNode.removeChild(l),
                  e(o)
              }),
              (l.href = a)
            var h = document.getElementsByTagName('head')[0]
            h.appendChild(l)
          }).then(function() {
            r[n] = 0
          }))
        )
    var c = a[n]
    if (0 !== c)
      if (c) t.push(c[2])
      else {
        var o = new Promise(function(t, e) {
          c = a[n] = [t, e]
        })
        t.push((c[2] = o))
        var s,
          f = document.createElement('script')
        ;(f.charset = 'utf-8'),
          (f.timeout = 120),
          i.nc && f.setAttribute('nonce', i.nc),
          (f.src = u(n)),
          (s = function(t) {
            ;(f.onerror = f.onload = null), clearTimeout(d)
            var e = a[n]
            if (0 !== e) {
              if (e) {
                var c = t && ('load' === t.type ? 'missing' : t.type),
                  r = t && t.target && t.target.src,
                  o = new Error(
                    'Loading chunk ' + n + ' failed.\n(' + c + ': ' + r + ')'
                  )
                ;(o.type = c), (o.request = r), e[1](o)
              }
              a[n] = void 0
            }
          })
        var d = setTimeout(function() {
          s({ type: 'timeout', target: f })
        }, 12e4)
        ;(f.onerror = f.onload = s), document.head.appendChild(f)
      }
    return Promise.all(t)
  }),
    (i.m = n),
    (i.c = c),
    (i.d = function(n, t, e) {
      i.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: e })
    }),
    (i.r = function(n) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 })
    }),
    (i.t = function(n, t) {
      if ((1 & t && (n = i(n)), 8 & t)) return n
      if (4 & t && 'object' === typeof n && n && n.__esModule) return n
      var e = Object.create(null)
      if (
        (i.r(e),
        Object.defineProperty(e, 'default', { enumerable: !0, value: n }),
        2 & t && 'string' != typeof n)
      )
        for (var c in n)
          i.d(
            e,
            c,
            function(t) {
              return n[t]
            }.bind(null, c)
          )
      return e
    }),
    (i.n = function(n) {
      var t =
        n && n.__esModule
          ? function() {
              return n['default']
            }
          : function() {
              return n
            }
      return i.d(t, 'a', t), t
    }),
    (i.o = function(n, t) {
      return Object.prototype.hasOwnProperty.call(n, t)
    }),
    (i.p = '/'),
    (i.oe = function(n) {
      throw (console.error(n), n)
    })
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    f = s.push.bind(s)
  ;(s.push = t), (s = s.slice())
  for (var d = 0; d < s.length; d++) t(s[d])
  var l = f
  o.push([0, 'chunk-vendors']), e()
})({
  0: function(n, t, e) {
    n.exports = e('56d7')
  },
  2464: function(n, t, e) {},
  '4a85': function(n, t, e) {
    'use strict'
    e.d(t, 'a', function() {
      return r
    }),
      e.d(t, 'd', function() {
        return a
      }),
      e.d(t, 'b', function() {
        return o
      }),
      e.d(t, 'c', function() {
        return u
      })
    var c = e('b775')
    function r(n) {
      return Object(c['a'])('put', '/moment', n)
    }
    function a(n) {
      return Object(c['a'])('post', '/moment/comment', n)
    }
    function o(n) {
      return Object(c['a'])('post', '/moment/collect', n)
    }
    function u(n) {
      return Object(c['a'])('post', '/moment/like', n)
    }
  },
  '56d7': function(n, t, e) {
    'use strict'
    e.r(t)
    e('cadf'), e('551c'), e('f751'), e('097d')
    var c = e('2b0e'),
      r = function() {
        var n = this,
          t = n.$createElement,
          e = n._self._c || t
        return e('div', { attrs: { id: 'app-container' } }, [
          e('div', { attrs: { id: 'app' } }, [e('router-view')], 1),
        ])
      },
      a = [],
      o = {
        name: 'app',
        mounted: function() {
          this.$store.dispatch('connect')
        },
      },
      u = o,
      i = (e('7c55'), e('2877')),
      s = Object(i['a'])(u, r, a, !1, null, null, null),
      f = s.exports,
      d = e('8c4f'),
      l = [
        {
          path: '/chat/:id',
          component: function() {
            return e.e('chunk-4e85f3d0').then(e.bind(null, '4b6e'))
          },
          name: 'chatId',
        },
        {
          path: '/contact',
          component: function() {
            return e.e('chunk-61dc5e72').then(e.bind(null, '1d0c'))
          },
          name: 'contact',
        },
        {
          path: '/contact/add',
          component: function() {
            return e.e('chunk-53702bda').then(e.bind(null, 'db20'))
          },
          name: 'contactAdd',
        },
        {
          path: '/contact/friend',
          component: function() {
            return e.e('chunk-ea7ef530').then(e.bind(null, '49b6'))
          },
          name: 'contactFriend',
        },
        {
          path: '/contact/search',
          component: function() {
            return e.e('chunk-7ab7a65a').then(e.bind(null, '2dd8'))
          },
          name: 'contactSearch',
        },
        {
          path: '/contact/search/verify',
          component: function() {
            return e.e('chunk-b25dc034').then(e.bind(null, 'eb9c'))
          },
          name: 'contactSearchVerify',
        },
        {
          path: '/contact/:id/config',
          component: function() {
            return e.e('chunk-470754c8').then(e.bind(null, 'a3e3'))
          },
          name: 'contactIdConfig',
        },
        {
          path: '/contact/:id',
          component: function() {
            return e.e('chunk-8297259a').then(e.bind(null, 'f4d7'))
          },
          name: 'contactId',
        },
        {
          path: '/contact/:id/remark',
          component: function() {
            return e.e('chunk-25461414').then(e.bind(null, '6053'))
          },
          name: 'contactIdRemark',
        },
        {
          path: '/',
          component: function() {
            return e.e('chunk-45717758').then(e.bind(null, 'd504'))
          },
          name: 'index',
        },
        {
          path: '/login',
          component: function() {
            return e.e('chunk-c6a00ed0').then(e.bind(null, 'a55b'))
          },
          name: 'login',
        },
        {
          path: '/me/edit',
          component: function() {
            return e.e('chunk-76d40438').then(e.bind(null, '4f96'))
          },
          name: 'meEdit',
        },
        {
          path: '/me',
          component: function() {
            return e.e('chunk-7c18e51d').then(e.bind(null, 'e9f7'))
          },
          name: 'me',
        },
        {
          path: '/moment',
          component: function() {
            return Promise.all([
              e.e('chunk-7dad3e3a'),
              e.e('chunk-b20be7c2'),
            ]).then(e.bind(null, '9395'))
          },
          name: 'moment',
        },
        {
          path: '/moment/add',
          component: function() {
            return Promise.all([
              e.e('chunk-7dad3e3a'),
              e.e('chunk-89a7179a'),
            ]).then(e.bind(null, '3f9e'))
          },
          name: 'momentAdd',
        },
        {
          path: '/moment/friend',
          component: function() {
            return Promise.all([
              e.e('chunk-7dad3e3a'),
              e.e('chunk-7e497ca4'),
            ]).then(e.bind(null, 'c626'))
          },
          name: 'momentFriend',
        },
        {
          path: '/moment/collect',
          component: function() {
            return Promise.all([
              e.e('chunk-7dad3e3a'),
              e.e('chunk-4ca9b07b'),
            ]).then(e.bind(null, 'ab6c'))
          },
          name: 'momentCollect',
        },
        {
          path: '/register',
          component: function() {
            return e.e('chunk-54949128').then(e.bind(null, '73cf'))
          },
          name: 'register',
        },
        {
          path: '/group',
          component: function() {
            return e.e('chunk-7ec3b3e1').then(e.bind(null, 'c4ec'))
          },
          name: 'group',
        },
        {
          path: '/group/add',
          component: function() {
            return e.e('chunk-142f9fc0').then(e.bind(null, 'f135'))
          },
          name: 'groupAdd',
        },
        {
          path: '/error',
          component: function() {
            return e.e('chunk-481c824b').then(e.bind(null, 'dda8'))
          },
          name: 'error',
          alias: '*',
        },
        {
          path: '/detail',
          component: function() {
            return e.e('chunk-5ff53d17').then(e.bind(null, 'd8c0'))
          },
          name: 'detail',
        },
      ]
    c['default'].use(d['a'])
    var h,
      m,
      p = new d['a']({ mode: 'history', routes: l }),
      b = e('2f62'),
      k = e('0e44'),
      g = e('bd86'),
      v = e('93d6'),
      O = 'SET_USER',
      _ = 'UPDATE_AVATAR',
      L = {
        user: {
          _id: '',
          email: '',
          nickname: '',
          avatar: '',
          address: '',
          signature: '',
        },
      },
      j = ((h = {}),
      Object(g['a'])(h, O, function(n, t) {
        ;(n.user = t),
          localStorage.getItem('userinfo') &&
            localStorage.removeItem('userinfo'),
          localStorage.setItem('userinfo', JSON.stringify(t))
      }),
      Object(g['a'])(h, _, function(n, t) {
        n.user.avatar = t
      }),
      h),
      w = {
        setUser: function(n, t) {
          var e = n.commit
          e(O, t)
        },
        updateAvatar: function(n, t) {
          var e = n.commit,
            c = n.state
          e(_, t), Object(v['c'])({ avatar: t, _id: c.info._id })
        },
      },
      E = {
        user: function(n) {
          return n.user
        },
      },
      y = { state: L, mutations: j, actions: w, getters: E },
      S = y,
      A = (e('5df3'), e('f400'), e('55dd'), e('96cf'), e('3b8d')),
      R = (e('ac6a'), e('7618')),
      T = e('aead'),
      x = e('b775')
    function M(n) {
      return Object(x['a'])('put', '/message', n)
    }
    function C(n) {
      return Object(x['a'])('patch', '/message/read', n)
    }
    var D = 'SET_LIST',
      N = 'ADD_CONTACT',
      I = 'SEND_MESSAGE',
      P = 'READ_MESSAGE',
      F = 'READ_GROUP_MESSAGE',
      U = 'GET_MESSAGE',
      G = 'SET_CUR_CONTACT',
      J = 'SET_REMARK',
      B = 'ADD_FRIEND',
      q = { contactList: [], curContact: '' }
    function K(n) {
      var t = n.length
      return t > 0 ? n[t - 1] : ''
    }
    var $,
      V = ((m = {}),
      Object(g['a'])(m, D, function(n, t) {
        n.contactList = t
      }),
      Object(g['a'])(m, N, function(n, t) {
        n.contactList.push(t)
      }),
      Object(g['a'])(m, G, function(n, t) {
        'object' === Object(R['a'])(t) && (n.curContact = t),
          'string' === typeof t &&
            (n.curContact = n.contactList.filter(function(n) {
              var e = n.contact_id
              return e === t
            })[0])
      }),
      Object(g['a'])(m, U, function(n, t) {
        n.contactList.some(function(n) {
          n.contact_id === t.from_id && n.messageList.push(t)
        })
      }),
      Object(g['a'])(m, I, function(n, t) {
        n.contactList.some(function(n) {
          n.contact_id === t.to_id && n.messageList.push(t)
        })
      }),
      Object(g['a'])(m, P, function(n, t) {
        n.contactList.some(function(n) {
          n.contact_id === t &&
            n.messageList.forEach(function(n) {
              return n.from_id === t && (n.hasRead = !0)
            })
        })
      }),
      Object(g['a'])(m, J, function(n, t) {
        n.contactList.some(function(n) {
          n.contact_id === t.id && (n.remark = t.remark) && (n.alpha = t.alpha)
        })
      }),
      Object(g['a'])(m, B, function(n, t) {
        var e = t.id,
          c = t.config
        n.contactList.some(function(n) {
          n.contact_id === e && (n.config = c)
        })
      }),
      Object(g['a'])(m, F, function(n, t) {
        n.contactList.some(function(n) {
          n._id =
            t &&
            n.messageList.forEach(function(n) {
              return (n.hasRead = !0)
            })
        })
      }),
      m),
      H = {
        setList: function(n, t) {
          var e = n.commit
          e(D, t)
        },
        setCurContact: function(n, t) {
          var e = n.commit
          e(G, t)
        },
        setRemark: (function() {
          var n = Object(A['a'])(
            regeneratorRuntime.mark(function n(t, e) {
              var c, r, a
              return regeneratorRuntime.wrap(function(n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (c = t.commit), (n.next = 3), Object(T['b'])(e)
                    case 3:
                      ;(r = n.sent), (a = r.data), a && c(J, a)
                    case 6:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            })
          )
          function t(t, e) {
            return n.apply(this, arguments)
          }
          return t
        })(),
        sendMessage: (function() {
          var n = Object(A['a'])(
            regeneratorRuntime.mark(function n(t, e) {
              var c, r, a
              return regeneratorRuntime.wrap(function(n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (c = t.commit), (n.next = 3), M(e)
                    case 3:
                      ;(r = n.sent), (a = r.data), c(I, a)
                    case 6:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            })
          )
          function t(t, e) {
            return n.apply(this, arguments)
          }
          return t
        })(),
        configFriend: (function() {
          var n = Object(A['a'])(
            regeneratorRuntime.mark(function n(t, e) {
              var c, r
              return regeneratorRuntime.wrap(function(n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (c = t.commit), (n.next = 3), Object(T['a'])(e)
                    case 3:
                      ;(r = n.sent), r && c(B, e)
                    case 5:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            })
          )
          function t(t, e) {
            return n.apply(this, arguments)
          }
          return t
        })(),
        readMessage: (function() {
          var n = Object(A['a'])(
            regeneratorRuntime.mark(function n(t, e) {
              var c, r
              return regeneratorRuntime.wrap(function(n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (c = t.commit), (n.next = 3), C({ from_id: e })
                    case 3:
                      ;(r = n.sent), r && c(P, e)
                    case 5:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            })
          )
          function t(t, e) {
            return n.apply(this, arguments)
          }
          return t
        })(),
      },
      W = {
        contacts: function(n) {
          var t = n.contactList
            .filter(function(n) {
              var t = n.config
              return 1 === t
            })
            .sort(function(n, t) {
              return n['alpha'] < t['alpha'] ? -1 : 1
            })
            .reduce(function(n, t) {
              var e = t.alpha[0]
              return !n[e] && (n[e] = []), n[e].push(t), n
            }, {})
          return t
        },
        chats: function(n) {
          return function(t) {
            return n.contactList
              .filter(function(n) {
                var t = n.config,
                  e = n.messageList,
                  c = n.type
                return (1 === t || 'group' === c) && e.length > 0
              })
              .sort(function(n, t) {
                return K(n.messageList)['time'] < K(t.messageList)['time']
              })
              .map(function(n) {
                var e = n.avatar,
                  c = n.remark,
                  r = n.contact_id,
                  a = n.messageList,
                  o = 0
                return (
                  a.forEach(function(n) {
                    return !1 === n.hasRead && t !== n.from_id && o++
                  }),
                  {
                    avatar: e,
                    remark: c,
                    _id: r,
                    msg: K(a),
                    time: K(a).time,
                    unReadCount: o,
                  }
                )
              })
          }
        },
        newfriends: function(n) {
          return n.contactList.filter(function(n) {
            var t = n.addFrom,
              e = n.contact_id
            return t === e
          })
        },
        groups: function(n) {
          return n.contactList.filter(function(n) {
            var t = n.type
            return 'group' === t
          })
        },
        avatar: function(n) {
          return function(t) {
            var e = ''
            return (
              n.contactList.some(function(n) {
                return n.contact_id === t && (e = n.avatar)
              }),
              e
            )
          }
        },
        allUnReadCount: function(n) {
          return function(t) {
            var e = 0
            return (
              n.contactList.forEach(function(n) {
                n.messageList.forEach(function(n) {
                  !1 === n.hasRead && n.from_id !== t && e++
                })
              }),
              e
            )
          }
        },
        contactIdRemarkMap: function(n) {
          var t = new Map()
          return (
            n.contactList.forEach(function(n) {
              t.set(n.contact_id, n.remark)
            }),
            t
          )
        },
      },
      z = { state: q, mutations: V, actions: H, getters: W },
      Q = z,
      X = e('5c96'),
      Y = e.n(X),
      Z = { ws: null },
      nn = 'ws://47.96.72.48:3000',
      tn = {
        wssendMessage: function(n, t) {
          n['ws'].send(JSON.stringify(t))
        },
      },
      en = {
        connect: function(n) {
          var t = n.state,
            e = n.commit,
            c = n.rootGetters,
            r = c.user._id
          if (r) {
            var a = nn + '/wechat?id='.concat(r),
              o = new WebSocket(a)
            ;(o.onmessage = function(n) {
              var t = n.data,
                c = JSON.parse(t),
                r = c.data,
                a = c.msg,
                o = c.type
              a && X['Message'].info(a), o && r && e(o, r)
            }),
              (o.onclose = function() {
                return X['Message'].warning('您已掉线')
              }),
              (t.ws = o)
          }
        },
        close: function(n) {
          var t = n.state
          null !== t.ws && (t.ws.close(), (t.ws = null))
        },
      },
      cn = {
        getsocket: function(n) {
          return n.ws
        },
      },
      rn = { state: Z, mutations: tn, actions: en, getters: cn },
      an = rn,
      on = e('cebc'),
      un = (e('6762'), e('2fdb'), e('4a85')),
      sn = 'SET_ALL_LIST',
      fn = 'SET_FRIEND_LIST',
      dn = 'ADD_LIST',
      ln = 'ADD_SELF_LIST',
      hn = 'ADD_ALL_LIST',
      mn = 'ADD_COMMENT',
      pn = 'COLLECT_MOMENT',
      bn = 'LIKE_MOMENT',
      kn = { allList: [], friendList: [] },
      gn = (($ = {}),
      Object(g['a'])($, sn, function(n, t) {
        var e = t.allList,
          c = t.friendList
        ;(n.allList = e), (n.friendList = c)
      }),
      Object(g['a'])($, fn, function(n, t) {
        n.friendList = t
      }),
      Object(g['a'])($, dn, function(n, t) {
        n.allList.push(t), n.friendList.push(t)
      }),
      Object(g['a'])($, ln, function(n, t) {
        n.friendList.push(t)
      }),
      Object(g['a'])($, hn, function(n, t) {
        n.allList.push(t)
      }),
      Object(g['a'])($, mn, function(n, t) {
        var e = t.id,
          c = t.comment
        n.allList.some(function(n) {
          n._id === e && n.comments.push(c)
        }),
          n.friendList.some(function(n) {
            n._id === e && n.comments.push(c)
          })
      }),
      Object(g['a'])($, pn, function(n, t) {
        var e = t.id,
          c = t.config,
          r = t.user_id
        n.allList.some(function(n) {
          if (n._id === e) {
            var t = n.collects
            ;-1 === c && t.splice(t.indexOf(r), 1), 1 === c && t.push(r)
          }
        }),
          n.friendList.some(function(n) {
            if (n._id === e) {
              var t = n.collects
              ;-1 === c && t.splice(t.indexOf(r), 1), 1 === c && t.push(r)
            }
          })
      }),
      Object(g['a'])($, bn, function(n, t) {
        var e = t.id,
          c = t.config
        n.allList.some(function(n) {
          n._id === e && (-1 === c && (n.likes -= 1), 1 === c && (n.likes += 1))
        }),
          n.friendList.some(function(n) {
            n._id === e &&
              (-1 === c && (n.likes -= 1), 1 === c && (n.likes += 1))
          })
      }),
      $),
      vn = {
        collectMoments: function(n) {
          return function(t) {
            return n.allList.filter(function(n) {
              var e = n.collects
              return e.includes(t)
            })
          }
        },
      },
      On = {
        addComment: (function() {
          var n = Object(A['a'])(
            regeneratorRuntime.mark(function n(t, e) {
              var c, r, a, o, u
              return regeneratorRuntime.wrap(function(n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (c = t.commit),
                        (r = t.rootState),
                        (a = r.user.user.avatar),
                        (n.next = 4),
                        Object(un['d'])({ id: e.id, text: e.text })
                      )
                    case 4:
                      ;(o = n.sent),
                        (u = o.data),
                        u &&
                          c(mn, {
                            id: e.id,
                            comment: Object(on['a'])({}, u, { avatar: a }),
                          })
                    case 7:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            })
          )
          function t(t, e) {
            return n.apply(this, arguments)
          }
          return t
        })(),
        collectMoment: (function() {
          var n = Object(A['a'])(
            regeneratorRuntime.mark(function n(t, e) {
              var c, r, a, o
              return regeneratorRuntime.wrap(function(n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (c = t.commit),
                        (r = t.rootState),
                        (n.next = 3),
                        Object(un['b'])(e)
                      )
                    case 3:
                      ;(a = n.sent),
                        (o = r.user.user._id),
                        a && c(pn, Object(on['a'])({}, e, { user_id: o }))
                    case 6:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            })
          )
          function t(t, e) {
            return n.apply(this, arguments)
          }
          return t
        })(),
        likeMoment: (function() {
          var n = Object(A['a'])(
            regeneratorRuntime.mark(function n(t, e) {
              var c, r
              return regeneratorRuntime.wrap(function(n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (c = t.commit), (n.next = 3), Object(un['c'])(e)
                    case 3:
                      ;(r = n.sent), r && c(bn, e)
                    case 5:
                    case 'end':
                      return n.stop()
                  }
              }, n)
            })
          )
          function t(t, e) {
            return n.apply(this, arguments)
          }
          return t
        })(),
      },
      _n = { state: kn, mutations: gn, getters: vn, actions: On },
      Ln = _n
    c['default'].use(b['a'])
    var jn = new b['a'].Store({
      state: {},
      mutations: {},
      actions: {},
      modules: { user: S, contact: Q, socket: an, moment: Ln },
      plugins: [Object(k['a'])()],
    })
    e('c69f')
    c['default'].use(Y.a)
    e('f5df')
    var wn = e('9483')
    Object(wn['a'])(''.concat('/', 'service-worker.js'), {
      ready: function() {
        console.log(
          'App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB'
        )
      },
      registered: function() {
        console.log('Service worker has been registered.')
      },
      cached: function() {
        console.log('Content has been cached for offline use.')
      },
      updatefound: function() {
        console.log('New content is downloading.')
      },
      updated: function() {
        console.log('New content is available; please refresh.')
      },
      offline: function() {
        console.log(
          'No internet connection found. App is running in offline mode.'
        )
      },
      error: function(n) {
        console.error('Error during service worker registration:', n)
      },
    }),
      (c['default'].config.productionTip = !1),
      new c['default']({
        router: p,
        store: jn,
        render: function(n) {
          return n(f)
        },
      }).$mount('#app')
  },
  '7c55': function(n, t, e) {
    'use strict'
    var c = e('2464'),
      r = e.n(c)
    r.a
  },
  '93d6': function(n, t, e) {
    'use strict'
    e.d(t, 'a', function() {
      return r
    }),
      e.d(t, 'c', function() {
        return a
      }),
      e.d(t, 'b', function() {
        return o
      })
    var c = e('b775')
    function r(n) {
      return Object(c['a'])('post', '/login', n)
    }
    function a(n) {
      return Object(c['a'])('patch', 'user/edit', n)
    }
    function o(n) {
      return Object(c['a'])('get', '/user', n)
    }
  },
  aead: function(n, t, e) {
    'use strict'
    e.d(t, 'c', function() {
      return r
    }),
      e.d(t, 'b', function() {
        return a
      }),
      e.d(t, 'a', function() {
        return o
      })
    var c = e('b775')
    function r(n) {
      return Object(c['a'])('put', '/contact', n)
    }
    function a(n) {
      return Object(c['a'])('put', '/contact/remark', n)
    }
    function o(n) {
      return Object(c['a'])('patch', '/contact/config', n)
    }
  },
  b775: function(n, t, e) {
    'use strict'
    var c = e('cebc'),
      r = (e('6762'), e('2fdb'), e('bc3a')),
      a = e.n(r),
      o = e('b383'),
      u = e.n(o),
      i = e('5c96'),
      s = function(n, t) {
        return ''.concat(n, '/?').concat(u.a.stringify(t))
      },
      f = a.a.create({ baseURL: '/api', timeout: 3e4 })
    t['a'] = function(n, t) {
      var e =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
      if (['get', 'post', 'delete', 'put', 'patch'].includes(n))
        return (
          'get' === n && (t = s(t, e)),
          new Promise(function(a, o) {
            f[n](t, e, Object(c['a'])({}, r))
              .then(function(n) {
                n && n.data && n.data.msg && i['Message'].success(n.data.msg),
                  a(n.data)
              })
              .catch(function(n) {
                n &&
                  n.response &&
                  n.response.data &&
                  n.response.data.msg &&
                  i['Message'].error(n.response.data.msg)
              })
          })
        )
      console.error('请求方法错误，请检查封装方法参数')
    }
  },
  c69f: function(n, t, e) {},
})
//# sourceMappingURL=app.322cd254.js.map

;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-6213e864'],
  {
    '320c': function(e, t, r) {
      'use strict'
      /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n =
          Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable
      function s(e) {
        if (null === e || void 0 === e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          )
        return Object(e)
      }
      function a() {
        try {
          if (!Object.assign) return !1
          var e = new String('abc')
          if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
            return !1
          for (var t = {}, r = 0; r < 10; r++)
            t['_' + String.fromCharCode(r)] = r
          var n = Object.getOwnPropertyNames(t).map(function(e) {
            return t[e]
          })
          if ('0123456789' !== n.join('')) return !1
          var i = {}
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(e) {
              i[e] = e
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, i)).join('')
          )
        } catch (o) {
          return !1
        }
      }
      e.exports = a()
        ? Object.assign
        : function(e, t) {
            for (var r, a, c = s(e), u = 1; u < arguments.length; u++) {
              for (var p in ((r = Object(arguments[u])), r))
                i.call(r, p) && (c[p] = r[p])
              if (n) {
                a = n(r)
                for (var f = 0; f < a.length; f++)
                  o.call(r, a[f]) && (c[a[f]] = r[a[f]])
              }
            }
            return c
          }
    },
    '3b65': function(e, t, r) {
      'use strict'
      var n = r('9688'),
        i = r.n(n)
      i.a
    },
    '7aaf': function(e, t, r) {
      'use strict'
      var n = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t
          return r('div', { staticClass: 'header' }, [
            r('p', { staticClass: 'left' }, [e._t('left')], 2),
            r('p', [e._v(e._s(e.text))]),
            r('p', { staticClass: 'right' }, [e._t('right')], 2),
          ])
        },
        i = [],
        o = { name: 'BaseHeader', props: ['text'] },
        s = o,
        a = (r('3b65'), r('2877')),
        c = Object(a['a'])(s, n, i, !1, null, '0d31b276', null)
      t['a'] = c.exports
    },
    8958: function(e, t, r) {
      'use strict'
      /*!
       * cookie
       * Copyright(c) 2012-2014 Roman Shtylman
       * Copyright(c) 2015 Douglas Christopher Wilson
       * MIT Licensed
       */ ;(t.parse = a), (t.serialize = c)
      var n = decodeURIComponent,
        i = encodeURIComponent,
        o = /; */,
        s = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
      function a(e, t) {
        if ('string' !== typeof e)
          throw new TypeError('argument str must be a string')
        for (
          var r = {}, i = t || {}, s = e.split(o), a = i.decode || n, c = 0;
          c < s.length;
          c++
        ) {
          var p = s[c],
            f = p.indexOf('=')
          if (!(f < 0)) {
            var l = p.substr(0, f).trim(),
              h = p.substr(++f, p.length).trim()
            '"' == h[0] && (h = h.slice(1, -1)),
              void 0 == r[l] && (r[l] = u(h, a))
          }
        }
        return r
      }
      function c(e, t, r) {
        var n = r || {},
          o = n.encode || i
        if ('function' !== typeof o)
          throw new TypeError('option encode is invalid')
        if (!s.test(e)) throw new TypeError('argument name is invalid')
        var a = o(t)
        if (a && !s.test(a)) throw new TypeError('argument val is invalid')
        var c = e + '=' + a
        if (null != n.maxAge) {
          var u = n.maxAge - 0
          if (isNaN(u)) throw new Error('maxAge should be a Number')
          c += '; Max-Age=' + Math.floor(u)
        }
        if (n.domain) {
          if (!s.test(n.domain)) throw new TypeError('option domain is invalid')
          c += '; Domain=' + n.domain
        }
        if (n.path) {
          if (!s.test(n.path)) throw new TypeError('option path is invalid')
          c += '; Path=' + n.path
        }
        if (n.expires) {
          if ('function' !== typeof n.expires.toUTCString)
            throw new TypeError('option expires is invalid')
          c += '; Expires=' + n.expires.toUTCString()
        }
        if (
          (n.httpOnly && (c += '; HttpOnly'),
          n.secure && (c += '; Secure'),
          n.sameSite)
        ) {
          var p =
            'string' === typeof n.sameSite
              ? n.sameSite.toLowerCase()
              : n.sameSite
          switch (p) {
            case !0:
              c += '; SameSite=Strict'
              break
            case 'lax':
              c += '; SameSite=Lax'
              break
            case 'strict':
              c += '; SameSite=Strict'
              break
            default:
              throw new TypeError('option sameSite is invalid')
          }
        }
        return c
      }
      function u(e, t) {
        try {
          return t(e)
        } catch (r) {
          return e
        }
      }
    },
    9688: function(e, t, r) {},
    a55b: function(e, t, r) {
      'use strict'
      r.r(t)
      var n = function() {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t
          return r(
            'div',
            { attrs: { id: 'login' } },
            [
              r('BaseHeader', { attrs: { text: '登录' } }),
              r('main', { staticClass: 'main-top' }, [
                r(
                  'div',
                  { staticClass: 'form x-ctr' },
                  [
                    r(
                      'el-form',
                      { attrs: { model: e.form } },
                      [
                        r(
                          'el-form-item',
                          { attrs: { label: '用户名或邮箱' } },
                          [
                            r('el-input', {
                              model: {
                                value: e.form.username,
                                callback: function(t) {
                                  e.$set(e.form, 'username', t)
                                },
                                expression: 'form.username',
                              },
                            }),
                          ],
                          1
                        ),
                        r(
                          'el-form-item',
                          { attrs: { label: '密码' } },
                          [
                            r('el-input', {
                              attrs: { 'show-password': '' },
                              model: {
                                value: e.form.password,
                                callback: function(t) {
                                  e.$set(e.form, 'password', t)
                                },
                                expression: 'form.password',
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    r(
                      'div',
                      [
                        r(
                          'el-button',
                          {
                            attrs: { type: 'primary' },
                            on: { click: e.submit },
                          },
                          [e._v('登录')]
                        ),
                        r(
                          'el-button',
                          {
                            staticClass: 'f-r',
                            on: {
                              click: function(t) {
                                return e.$router.push('/register')
                              },
                            },
                          },
                          [e._v('注册')]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          )
        },
        i = [],
        o = (r('96cf'), r('3b8d')),
        s = r('93d6'),
        a = r('7aaf'),
        c = r('8958')
      function u() {
        return (
          'object' === typeof document && 'string' === typeof document.cookie
        )
      }
      function p(e) {
        return 'string' === typeof e
          ? c['parse'](e)
          : 'object' === typeof e && null !== e
          ? e
          : {}
      }
      function f(e, t) {
        return (
          'undefined' === typeof t &&
            (t = !e || ('{' !== e[0] && '[' !== e[0] && '"' !== e[0])),
          !t
        )
      }
      function l(e, t) {
        void 0 === t && (t = {})
        var r = h(e)
        if (f(r, t.doNotParse))
          try {
            return JSON.parse(r)
          } catch (n) {}
        return e
      }
      function h(e) {
        return e && 'j' === e[0] && ':' === e[1] ? e.substr(2) : e
      }
      var m = r('320c'),
        d = (function() {
          function e(e) {
            ;(this.changeListeners = []),
              (this.cookies = p(e)),
              (this.HAS_DOCUMENT_COOKIE = u())
          }
          return (
            (e.prototype._updateBrowserValues = function() {
              this.HAS_DOCUMENT_COOKIE &&
                (this.cookies = c['parse'](document.cookie))
            }),
            (e.prototype._emitChange = function(e) {
              for (var t = 0; t < this.changeListeners.length; ++t)
                this.changeListeners[t](e)
            }),
            (e.prototype.get = function(e, t) {
              return (
                void 0 === t && (t = {}),
                this._updateBrowserValues(),
                l(this.cookies[e], t)
              )
            }),
            (e.prototype.getAll = function(e) {
              void 0 === e && (e = {}), this._updateBrowserValues()
              var t = {}
              for (var r in this.cookies) t[r] = l(this.cookies[r], e)
              return t
            }),
            (e.prototype.set = function(e, t, r) {
              var n
              'object' === typeof t && (t = JSON.stringify(t)),
                (this.cookies = m({}, this.cookies, ((n = {}), (n[e] = t), n))),
                this.HAS_DOCUMENT_COOKIE &&
                  (document.cookie = c['serialize'](e, t, r)),
                this._emitChange({ name: e, value: t, options: r })
            }),
            (e.prototype.remove = function(e, t) {
              var r = (t = m({}, t, {
                expires: new Date(1970, 1, 1, 0, 0, 1),
                maxAge: 0,
              }))
              ;(this.cookies = m({}, this.cookies)),
                delete this.cookies[e],
                this.HAS_DOCUMENT_COOKIE &&
                  (document.cookie = c['serialize'](e, '', r)),
                this._emitChange({ name: e, value: void 0, options: t })
            }),
            (e.prototype.addChangeListener = function(e) {
              this.changeListeners.push(e)
            }),
            (e.prototype.removeChangeListener = function(e) {
              var t = this.changeListeners.indexOf(e)
              t >= 0 && this.changeListeners.splice(t, 1)
            }),
            e
          )
        })(),
        v = d,
        g = v,
        b = {
          name: 'Login',
          data: function() {
            return { form: { username: '', password: '' } }
          },
          components: { BaseHeader: a['a'] },
          methods: {
            submit: (function() {
              var e = Object(o['a'])(
                regeneratorRuntime.mark(function e() {
                  var t
                  return regeneratorRuntime.wrap(
                    function(e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              Object(s['a'])(this.form)
                            )
                          case 3:
                            ;(t = e.sent),
                              this.$store.dispatch('setUser', t.user),
                              this.$store.dispatch('setList', t.contacts),
                              this.$router.push('/'),
                              this.$store.dispatch('connect'),
                              (e.next = 13)
                            break
                          case 10:
                            ;(e.prev = 10),
                              (e.t0 = e['catch'](0)),
                              console.log(e.t0)
                          case 13:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    this,
                    [[0, 10]]
                  )
                })
              )
              function t() {
                return e.apply(this, arguments)
              }
              return t
            })(),
          },
          mounted: function() {
            var e = new g()
            e.remove('wechat'),
              e.remove('wechat.sig'),
              this.$store.dispatch('close')
          },
        },
        w = b,
        y = (r('d6db'), r('2877')),
        O = Object(y['a'])(w, n, i, !1, null, null, null)
      t['default'] = O.exports
    },
    a9e7: function(e, t, r) {},
    d6db: function(e, t, r) {
      'use strict'
      var n = r('a9e7'),
        i = r.n(n)
      i.a
    },
  },
])
//# sourceMappingURL=chunk-6213e864.e47373a6.js.map

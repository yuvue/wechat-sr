;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-4e7b71d8'],
  {
    '04a3': function(t, e, a) {
      'use strict'
      var r = a('704c'),
        n = a.n(r)
      n.a
    },
    '3b65': function(t, e, a) {
      'use strict'
      var r = a('9688'),
        n = a.n(r)
      n.a
    },
    '704c': function(t, e, a) {},
    '7aaf': function(t, e, a) {
      'use strict'
      var r = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a('div', { staticClass: 'header' }, [
            a('p', { staticClass: 'left' }, [t._t('left')], 2),
            a('p', [t._v(t._s(t.text))]),
            a('p', { staticClass: 'right' }, [t._t('right')], 2),
          ])
        },
        n = [],
        s = { name: 'BaseHeader', props: ['text'] },
        i = s,
        c = (a('3b65'), a('2877')),
        u = Object(c['a'])(i, r, n, !1, null, '0d31b276', null)
      e['a'] = u.exports
    },
    9688: function(t, e, a) {},
    eb9c: function(t, e, a) {
      'use strict'
      a.r(e)
      var r = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a(
            'div',
            [
              a(
                'BaseHeader',
                { attrs: { text: '朋友验证' } },
                [
                  a('template', { slot: 'left' }, [
                    a('i', {
                      staticClass: 'el-icon-arrow-left',
                      on: {
                        click: function(e) {
                          return t.$router.back()
                        },
                      },
                    }),
                  ]),
                  a(
                    'template',
                    { slot: 'right' },
                    [
                      a(
                        'el-button',
                        {
                          attrs: { type: 'primary', size: 'small' },
                          on: { click: t.add },
                        },
                        [t._v('发送')]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
              a(
                'main',
                { staticClass: 'main-top' },
                [
                  a('p', [t._v('你需要发送验证申请，等待对方通过')]),
                  a('el-input', {
                    model: {
                      value: t.verifyText,
                      callback: function(e) {
                        t.verifyText = e
                      },
                      expression: 'verifyText',
                    },
                  }),
                ],
                1
              ),
            ],
            1
          )
        },
        n = [],
        s = (a('96cf'), a('3b8d')),
        i = a('7aaf'),
        c = a('aead'),
        u = {
          name: 'Verify',
          data: function() {
            return { verifyText: '你好，我是' }
          },
          components: { BaseHeader: i['a'] },
          methods: {
            add: (function() {
              var t = Object(s['a'])(
                regeneratorRuntime.mark(function t() {
                  var e, a, r, n
                  return regeneratorRuntime.wrap(
                    function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e = this.$route.params.id),
                              (a = this.verifyText),
                              (t.next = 4),
                              Object(c['c'])({ id: e, verifyText: a })
                            )
                          case 4:
                            ;(r = t.sent),
                              (n = r.user),
                              n &&
                                (this.$store.commit('ADD_CONTACT', n),
                                this.$router.push('/contact'))
                          case 7:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this
                  )
                })
              )
              function e() {
                return t.apply(this, arguments)
              }
              return e
            })(),
          },
        },
        o = u,
        l = (a('04a3'), a('2877')),
        f = Object(l['a'])(o, r, n, !1, null, 'fa2865d2', null)
      e['default'] = f.exports
    },
  },
])
//# sourceMappingURL=chunk-4e7b71d8.f5addc55.js.map

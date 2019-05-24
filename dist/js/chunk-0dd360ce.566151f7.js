;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-0dd360ce'],
  {
    '3b65': function(t, e, a) {
      'use strict'
      var r = a('9688'),
        n = a.n(r)
      n.a
    },
    6053: function(t, e, a) {
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
                { attrs: { text: '设置备注' } },
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
                          on: { click: t.onSubmit },
                        },
                        [t._v('完成')]
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
                  a('el-input', {
                    model: {
                      value: t.remark,
                      callback: function(e) {
                        t.remark = e
                      },
                      expression: 'remark',
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
        c = a('7aaf'),
        i = {
          name: 'ContactRemark',
          components: { BaseHeader: c['a'] },
          data: function() {
            return { remark: '' }
          },
          methods: {
            onSubmit: (function() {
              var t = Object(s['a'])(
                regeneratorRuntime.mark(function t() {
                  var e, a
                  return regeneratorRuntime.wrap(
                    function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            ;(e = this.$store.state.contact.curContact
                              .contact_id),
                              (a = this.remark),
                              this.$store.dispatch('setRemark', {
                                id: e,
                                remark: a,
                              })
                          case 3:
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
        o = i,
        l = a('2877'),
        u = Object(l['a'])(o, r, n, !1, null, null, null)
      e['default'] = u.exports
    },
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
        c = s,
        i = (a('3b65'), a('2877')),
        o = Object(i['a'])(c, r, n, !1, null, '0d31b276', null)
      e['a'] = o.exports
    },
    9688: function(t, e, a) {},
  },
])
//# sourceMappingURL=chunk-0dd360ce.566151f7.js.map

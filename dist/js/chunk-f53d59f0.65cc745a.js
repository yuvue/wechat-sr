;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-f53d59f0'],
  {
    '06ea': function(t, a, e) {},
    '3b65': function(t, a, e) {
      'use strict'
      var n = e('9688'),
        s = e.n(n)
      s.a
    },
    7354: function(t, a, e) {
      'use strict'
      var n = e('06ea'),
        s = e.n(n)
      s.a
    },
    '7aaf': function(t, a, e) {
      'use strict'
      var n = function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e('div', { staticClass: 'header' }, [
            e('p', { staticClass: 'left' }, [t._t('left')], 2),
            e('p', [t._v(t._s(t.text))]),
            e('p', { staticClass: 'right' }, [t._t('right')], 2),
          ])
        },
        s = [],
        c = { name: 'BaseHeader', props: ['text'] },
        i = c,
        r = (e('3b65'), e('2877')),
        l = Object(r['a'])(i, n, s, !1, null, '0d31b276', null)
      a['a'] = l.exports
    },
    9688: function(t, a, e) {},
    db20: function(t, a, e) {
      'use strict'
      e.r(a)
      var n = function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e(
            'div',
            [
              e(
                'BaseHeader',
                { attrs: { text: '添加朋友' } },
                [
                  e('template', { slot: 'left' }, [
                    e('i', {
                      staticClass: 'el-icon-arrow-left',
                      on: {
                        click: function(a) {
                          return t.$router.back()
                        },
                      },
                    }),
                  ]),
                ],
                2
              ),
              e('main', { staticClass: 'main-top main-bottom' }, [
                e(
                  'div',
                  {
                    staticClass: 'add-div',
                    on: {
                      click: function(a) {
                        return t.$router.push('/contact/search')
                      },
                    },
                  },
                  [
                    e('i', { staticClass: 'el-icon-search' }),
                    e('span', [t._v('邮箱/昵称')]),
                  ]
                ),
              ]),
            ],
            1
          )
        },
        s = [],
        c = e('7aaf'),
        i = { components: { BaseHeader: c['a'] } },
        r = i,
        l = (e('7354'), e('2877')),
        o = Object(l['a'])(r, n, s, !1, null, null, null)
      a['default'] = o.exports
    },
  },
])
//# sourceMappingURL=chunk-f53d59f0.65cc745a.js.map

;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-63e83d3e'],
  {
    2944: function(t, e, n) {
      'use strict'
      var a = n('8d9e'),
        c = n.n(a)
      c.a
    },
    '3b65': function(t, e, n) {
      'use strict'
      var a = n('9688'),
        c = n.n(a)
      c.a
    },
    '4ac1': function(t, e, n) {
      'use strict'
      var a = function() {
          var t = this,
            e = this,
            n = e.$createElement,
            a = e._self._c || n
          return a(
            'div',
            {
              attrs: { id: 'panel' },
              on: {
                click: function() {
                  return t.$emit('menuClick')
                },
              },
            },
            [
              e._t('name'),
              a('div', { staticClass: 'right' }, [e._t('info')], 2),
            ],
            2
          )
        },
        c = [],
        r = { name: 'MenuPanel', props: ['name'] },
        i = r,
        s = (n('2944'), n('2877')),
        u = Object(s['a'])(i, a, c, !1, null, '768e4ce6', null)
      e['a'] = u.exports
    },
    '7aaf': function(t, e, n) {
      'use strict'
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'header' }, [
            n('p', { staticClass: 'left' }, [t._t('left')], 2),
            n('p', [t._v(t._s(t.text))]),
            n('p', { staticClass: 'right' }, [t._t('right')], 2),
          ])
        },
        c = [],
        r = { name: 'BaseHeader', props: ['text'] },
        i = r,
        s = (n('3b65'), n('2877')),
        u = Object(s['a'])(i, a, c, !1, null, '0d31b276', null)
      e['a'] = u.exports
    },
    '8d9e': function(t, e, n) {},
    9688: function(t, e, n) {},
    a3e3: function(t, e, n) {
      'use strict'
      n.r(e)
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            [
              n(
                'BaseHeader',
                { attrs: { text: '资料设置' } },
                [
                  n('template', { slot: 'left' }, [
                    n('i', {
                      staticClass: 'el-icon-arrow-left',
                      on: {
                        click: function(e) {
                          return t.$router.back()
                        },
                      },
                    }),
                  ]),
                ],
                2
              ),
              n(
                'main',
                { staticClass: 'main-top main-bottom' },
                [
                  n('MenuPanel', {
                    attrs: { name: '设置备注' },
                    on: {
                      menuClick: function(e) {
                        return t.$router.push(
                          '/contact/' + t.contact._id + '/remark'
                        )
                      },
                    },
                  }),
                  n('MenuPanel', {
                    attrs: { name: '把他推荐给朋友' },
                    on: {
                      menuClick: function(e) {
                        return t.$router.push(
                          '/contact/' + t.contact._id + '/remark'
                        )
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          )
        },
        c = [],
        r = n('cebc'),
        i = n('2f62'),
        s = n('4ac1'),
        u = n('7aaf'),
        o = {
          name: 'ContactConfig',
          components: { BaseHeader: u['a'], MenuPanel: s['a'] },
          computed: Object(r['a'])(
            {},
            Object(i['b'])({
              contact: function(t) {
                return t.curContact
              },
            })
          ),
        },
        l = o,
        f = n('2877'),
        m = Object(f['a'])(l, a, c, !1, null, null, null)
      e['default'] = m.exports
    },
  },
])
//# sourceMappingURL=chunk-63e83d3e.11fff832.js.map

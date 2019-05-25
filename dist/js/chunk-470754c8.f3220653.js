;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-470754c8'],
  {
    '01bb': function(t, e, n) {},
    '29ee': function(t, e, n) {
      'use strict'
      var a = n('de58'),
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
        i = { name: 'MenuPanel' },
        r = i,
        s = (n('29ee'), n('2877')),
        o = Object(s['a'])(r, a, c, !1, null, '4fd81a3c', null)
      e['a'] = o.exports
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
        i = { name: 'BaseHeader', props: ['text'] },
        r = i,
        s = (n('a8ef'), n('2877')),
        o = Object(s['a'])(r, a, c, !1, null, '681e548d', null)
      e['a'] = o.exports
    },
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
                  n(
                    'MenuPanel',
                    {
                      on: {
                        menuClick: function(e) {
                          return t.$router.push(
                            '/contact/' + t.contact.contact_id + '/remark'
                          )
                        },
                      },
                    },
                    [
                      n('template', { slot: 'name' }, [t._v('设置备注')]),
                      n('template', { slot: 'info' }, [
                        n('i', { staticClass: 'el-icon-arrow-right' }),
                      ]),
                    ],
                    2
                  ),
                  n(
                    'MenuPanel',
                    {
                      on: {
                        menuClick: function(e) {
                          return t.$router.push(
                            '/contact/' + t.contact.contact_id + '/remark'
                          )
                        },
                      },
                    },
                    [
                      n('template', { slot: 'name' }, [t._v('把他推荐给朋友')]),
                      n('template', { slot: 'info' }, [
                        n('i', { staticClass: 'el-icon-arrow-right' }),
                      ]),
                    ],
                    2
                  ),
                ],
                1
              ),
            ],
            1
          )
        },
        c = [],
        i = n('cebc'),
        r = n('2f62'),
        s = n('4ac1'),
        o = n('7aaf'),
        l = {
          name: 'ContactConfig',
          components: { BaseHeader: o['a'], MenuPanel: s['a'] },
          computed: Object(i['a'])(
            {},
            Object(r['b'])({
              contact: function(t) {
                return t.contact.curContact
              },
            })
          ),
        },
        u = l,
        f = n('2877'),
        m = Object(f['a'])(u, a, c, !1, null, null, null)
      e['default'] = m.exports
    },
    a8ef: function(t, e, n) {
      'use strict'
      var a = n('01bb'),
        c = n.n(a)
      c.a
    },
    de58: function(t, e, n) {},
  },
])
//# sourceMappingURL=chunk-470754c8.f3220653.js.map

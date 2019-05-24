;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-869ca6d4'],
  {
    '2c3d': function(t, n, a) {
      'use strict'
      var e = a('c230'),
        c = a.n(e)
      c.a
    },
    '3b65': function(t, n, a) {
      'use strict'
      var e = a('9688'),
        c = a.n(e)
      c.a
    },
    '49b6': function(t, n, a) {
      'use strict'
      a.r(n)
      var e = function() {
          var t = this,
            n = t.$createElement,
            a = t._self._c || n
          return a(
            'div',
            [
              a(
                'BaseHeader',
                { attrs: { text: '新的朋友' } },
                [
                  a('template', { slot: 'left' }, [
                    a('i', {
                      staticClass: 'el-icon-arrow-left',
                      on: {
                        click: function(n) {
                          return t.$router.back()
                        },
                      },
                    }),
                  ]),
                ],
                2
              ),
              a(
                'main',
                { staticClass: 'main-top main-bottom' },
                t._l(t.$store.getters.newfriends, function(t) {
                  return a('NewFriendPanel', { attrs: { contact: t } })
                }),
                1
              ),
            ],
            1
          )
        },
        c = [],
        s = a('7aaf'),
        i = function() {
          var t = this,
            n = t.$createElement,
            a = t._self._c || n
          return a('div', { staticClass: 'panel' }, [
            a('section', [
              a('img', { attrs: { src: t.contact.avatar, alt: '' } }),
              a('div', { staticClass: 'content' }, [
                a('p', { staticClass: 'name' }, [t._v(t._s(t.contact.remark))]),
                a('p', { staticClass: 'msg' }, [
                  t._v(t._s(t.contact.verifyText)),
                ]),
              ]),
            ]),
            0 === t.contact.config
              ? a(
                  'section',
                  [
                    a(
                      'el-button',
                      {
                        attrs: { type: 'primary', size: 'small' },
                        on: { click: t.add },
                      },
                      [t._v('添加')]
                    ),
                    a(
                      'el-button',
                      { attrs: { size: 'small' }, on: { click: t.refuse } },
                      [t._v('拒绝')]
                    ),
                  ],
                  1
                )
              : -1 === t.contact.config
              ? a('section', { staticClass: 'msg' }, [t._v('\n    已拒绝\n  ')])
              : 1 === t.contact.config
              ? a('section', { staticClass: 'msg' }, [t._v('\n    已添加\n  ')])
              : t._e(),
          ])
        },
        o = [],
        r = {
          name: 'NewFriendPanel',
          props: ['contact'],
          methods: {
            add: function() {
              var t = this.contact.contact_id
              this.$store.dispatch('configFriend', { id: t, config: 1 })
            },
            refuse: function() {
              var t = this.contact.contact_id
              this.$store.dispatch('configFriend', { id: t, config: -1 })
            },
          },
          mounted: function() {},
        },
        l = r,
        u = (a('2c3d'), a('2877')),
        f = Object(u['a'])(l, i, o, !1, null, '856a78fa', null),
        d = f.exports,
        p = {
          name: 'ContactFriend',
          components: { BaseHeader: s['a'], NewFriendPanel: d },
        },
        m = p,
        v = Object(u['a'])(m, e, c, !1, null, null, null)
      n['default'] = v.exports
    },
    '7aaf': function(t, n, a) {
      'use strict'
      var e = function() {
          var t = this,
            n = t.$createElement,
            a = t._self._c || n
          return a('div', { staticClass: 'header' }, [
            a('p', { staticClass: 'left' }, [t._t('left')], 2),
            a('p', [t._v(t._s(t.text))]),
            a('p', { staticClass: 'right' }, [t._t('right')], 2),
          ])
        },
        c = [],
        s = { name: 'BaseHeader', props: ['text'] },
        i = s,
        o = (a('3b65'), a('2877')),
        r = Object(o['a'])(i, e, c, !1, null, '0d31b276', null)
      n['a'] = r.exports
    },
    9688: function(t, n, a) {},
    c230: function(t, n, a) {},
  },
])
//# sourceMappingURL=chunk-869ca6d4.81c2ca6c.js.map

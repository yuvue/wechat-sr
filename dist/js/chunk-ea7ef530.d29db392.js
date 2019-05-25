;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-ea7ef530'],
  {
    '01bb': function(t, n, e) {},
    '2c3d': function(t, n, e) {
      'use strict'
      var a = e('c230'),
        c = e.n(a)
      c.a
    },
    '49b6': function(t, n, e) {
      'use strict'
      e.r(n)
      var a = function() {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            [
              e(
                'BaseHeader',
                { attrs: { text: '新的朋友' } },
                [
                  e('template', { slot: 'left' }, [
                    e('i', {
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
              e(
                'main',
                { staticClass: 'main-top main-bottom' },
                t._l(t.$store.getters.newfriends, function(t) {
                  return e('NewFriendPanel', { attrs: { contact: t } })
                }),
                1
              ),
            ],
            1
          )
        },
        c = [],
        s = e('7aaf'),
        i = function() {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e('div', { staticClass: 'panel' }, [
            e('section', [
              e('img', { attrs: { src: t.contact.avatar, alt: '' } }),
              e('div', { staticClass: 'content' }, [
                e('p', { staticClass: 'name' }, [t._v(t._s(t.contact.remark))]),
                e('p', { staticClass: 'msg' }, [
                  t._v(t._s(t.contact.verifyText)),
                ]),
              ]),
            ]),
            0 === t.contact.config
              ? e(
                  'section',
                  [
                    e(
                      'el-button',
                      {
                        attrs: { type: 'primary', size: 'small' },
                        on: { click: t.add },
                      },
                      [t._v('添加')]
                    ),
                    e(
                      'el-button',
                      { attrs: { size: 'small' }, on: { click: t.refuse } },
                      [t._v('拒绝')]
                    ),
                  ],
                  1
                )
              : -1 === t.contact.config
              ? e('section', { staticClass: 'msg' }, [t._v('\n    已拒绝\n  ')])
              : 1 === t.contact.config
              ? e('section', { staticClass: 'msg' }, [t._v('\n    已添加\n  ')])
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
        f = (e('2c3d'), e('2877')),
        u = Object(f['a'])(l, i, o, !1, null, '856a78fa', null),
        d = u.exports,
        p = {
          name: 'ContactFriend',
          components: { BaseHeader: s['a'], NewFriendPanel: d },
        },
        m = p,
        v = Object(f['a'])(m, a, c, !1, null, null, null)
      n['default'] = v.exports
    },
    '7aaf': function(t, n, e) {
      'use strict'
      var a = function() {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e('div', { staticClass: 'header' }, [
            e('p', { staticClass: 'left' }, [t._t('left')], 2),
            e('p', [t._v(t._s(t.text))]),
            e('p', { staticClass: 'right' }, [t._t('right')], 2),
          ])
        },
        c = [],
        s = { name: 'BaseHeader', props: ['text'] },
        i = s,
        o = (e('a8ef'), e('2877')),
        r = Object(o['a'])(i, a, c, !1, null, '681e548d', null)
      n['a'] = r.exports
    },
    a8ef: function(t, n, e) {
      'use strict'
      var a = e('01bb'),
        c = e.n(a)
      c.a
    },
    c230: function(t, n, e) {},
  },
])
//# sourceMappingURL=chunk-ea7ef530.d29db392.js.map

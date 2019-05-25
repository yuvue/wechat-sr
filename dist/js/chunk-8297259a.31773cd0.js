;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-8297259a'],
  {
    '01bb': function(t, a, e) {},
    '3e36': function(t, a, e) {},
    '53a3': function(t, a, e) {},
    '5be0': function(t, a, e) {
      'use strict'
      var n = e('3e36'),
        c = e.n(n)
      c.a
    },
    '5dfd': function(t, a, e) {
      'use strict'
      var n = function() {
          var t = this,
            a = this,
            e = a.$createElement,
            n = a._self._c || e
          return n(
            'div',
            {
              staticClass: 't-c',
              on: {
                click: function() {
                  return t.$emit('panelClick')
                },
              },
            },
            [
              a.icon ? n('i', { class: a.icon }) : a._e(),
              n('span', [a._v('  ' + a._s(a.text))]),
            ]
          )
        },
        c = [],
        r = { name: 'ButtonPanel', props: ['text', 'icon'] },
        i = r,
        s = (e('5be0'), e('2877')),
        o = Object(s['a'])(i, n, c, !1, null, '4ffc8e85', null)
      a['a'] = o.exports
    },
    '5e9d': function(t, a, e) {
      'use strict'
      var n = e('53a3'),
        c = e.n(n)
      c.a
    },
    '6b65': function(t, a, e) {},
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
        c = [],
        r = { name: 'BaseHeader', props: ['text'] },
        i = r,
        s = (e('a8ef'), e('2877')),
        o = Object(s['a'])(i, n, c, !1, null, '681e548d', null)
      a['a'] = o.exports
    },
    '83f0': function(t, a, e) {
      'use strict'
      var n = function() {
          var t = this,
            a = this,
            e = a.$createElement,
            n = a._self._c || e
          return n(
            'div',
            {
              attrs: { id: 'me-card' },
              on: {
                click: function() {
                  return t.$emit('clickMeCard')
                },
              },
            },
            [
              n('section', { staticClass: 'avatar' }, [
                n('img', { attrs: { src: a.avatar, alt: '' } }),
              ]),
              n('section', { staticClass: 'info' }, [
                n('p', { staticClass: 'name' }, [a._v(a._s(a.nickname))]),
                n('p', { staticClass: 'wechat' }, [
                  a._v('微信号：' + a._s(a.email)),
                ]),
              ]),
              a._t('icon'),
            ],
            2
          )
        },
        c = [],
        r = { name: 'MeCard', props: ['nickname', 'email', 'avatar'] },
        i = r,
        s = (e('5e9d'), e('2877')),
        o = Object(s['a'])(i, n, c, !1, null, '19aa288b', null)
      a['a'] = o.exports
    },
    a8ef: function(t, a, e) {
      'use strict'
      var n = e('01bb'),
        c = e.n(n)
      c.a
    },
    cefd: function(t, a, e) {
      'use strict'
      var n = e('6b65'),
        c = e.n(n)
      c.a
    },
    f4d7: function(t, a, e) {
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
                { attrs: { text: t.contact.remark } },
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
                  e('template', { slot: 'right' }, [
                    e('i', {
                      staticClass: 'el-icon-more',
                      on: {
                        click: function(a) {
                          return t.$router.push(
                            '/contact/' + t.contact.contact_id + '/config'
                          )
                        },
                      },
                    }),
                  ]),
                ],
                2
              ),
              e(
                'main',
                { staticClass: 'main-top' },
                [
                  e('MeCard', {
                    attrs: {
                      nickname: t.contact.remark,
                      email: t.contact.email,
                      avatar: t.contact.avatar,
                    },
                  }),
                  e('MenuPanelArrow', {
                    staticStyle: { 'margin-top': '20px' },
                    attrs: { name: '设置备注' },
                    on: {
                      menuClick: function(a) {
                        return t.$router.push(
                          '/contact/' + t.contact.remark + '/remark'
                        )
                      },
                    },
                  }),
                  e('ButtonPanel', {
                    staticStyle: { 'margin-top': '40px' },
                    attrs: { text: '发消息', icon: 'el-icon-chat-round' },
                    on: {
                      panelClick: function(a) {
                        return t.$router.push('/chat/' + t.contact.remark)
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
        r = e('cebc'),
        i = e('2f62'),
        s = e('7aaf'),
        o = e('83f0'),
        l = function() {
          var t = this,
            a = this,
            e = a.$createElement,
            n = a._self._c || e
          return n(
            'div',
            {
              attrs: { id: 'panel' },
              on: {
                click: function() {
                  return t.$emit('menuClick')
                },
              },
            },
            [n('p', [a._v(a._s(a.name))]), a._m(0)]
          )
        },
        u = [
          function() {
            var t = this,
              a = t.$createElement,
              e = t._self._c || a
            return e('div', { staticClass: 'right' }, [
              e('i', { staticClass: 'el-icon-arrow-right' }),
            ])
          },
        ],
        f = { name: 'MenuPanel', props: ['name'] },
        m = f,
        p = (e('cefd'), e('2877')),
        d = Object(p['a'])(m, l, u, !1, null, '7ed929ee', null),
        v = d.exports,
        _ = e('5dfd'),
        h = {
          name: 'ContactDetail',
          computed: Object(r['a'])(
            {},
            Object(i['b'])({
              contact: function(t) {
                return t.contact.curContact
              },
            })
          ),
          components: {
            BaseHeader: s['a'],
            MeCard: o['a'],
            MenuPanelArrow: v,
            ButtonPanel: _['a'],
          },
        },
        C = h,
        k = Object(p['a'])(C, n, c, !1, null, '6a9efe46', null)
      a['default'] = k.exports
    },
  },
])
//# sourceMappingURL=chunk-8297259a.31773cd0.js.map

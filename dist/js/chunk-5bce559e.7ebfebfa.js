;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-5bce559e'],
  {
    '3b65': function(t, e, a) {
      'use strict'
      var n = a('9688'),
        c = a.n(n)
      c.a
    },
    '3e36': function(t, e, a) {},
    '5be0': function(t, e, a) {
      'use strict'
      var n = a('3e36'),
        c = a.n(n)
      c.a
    },
    '5dfd': function(t, e, a) {
      'use strict'
      var n = function() {
          var t = this,
            e = this,
            a = e.$createElement,
            n = e._self._c || a
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
              e.icon ? n('i', { class: e.icon }) : e._e(),
              n('span', [e._v('  ' + e._s(e.text))]),
            ]
          )
        },
        c = [],
        r = { name: 'ButtonPanel', props: ['text', 'icon'] },
        i = r,
        s = (a('5be0'), a('2877')),
        o = Object(s['a'])(i, n, c, !1, null, '4ffc8e85', null)
      e['a'] = o.exports
    },
    '6b65': function(t, e, a) {},
    '7aaf': function(t, e, a) {
      'use strict'
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a('div', { staticClass: 'header' }, [
            a('p', { staticClass: 'left' }, [t._t('left')], 2),
            a('p', [t._v(t._s(t.text))]),
            a('p', { staticClass: 'right' }, [t._t('right')], 2),
          ])
        },
        c = [],
        r = { name: 'BaseHeader', props: ['text'] },
        i = r,
        s = (a('3b65'), a('2877')),
        o = Object(s['a'])(i, n, c, !1, null, '0d31b276', null)
      e['a'] = o.exports
    },
    '829b': function(t, e, a) {
      'use strict'
      var n = a('9199'),
        c = a.n(n)
      c.a
    },
    '83f0': function(t, e, a) {
      'use strict'
      var n = function() {
          var t = this,
            e = this,
            a = e.$createElement,
            n = e._self._c || a
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
                n('img', { attrs: { src: e.avatar, alt: '' } }),
              ]),
              n('section', { staticClass: 'info' }, [
                n('p', { staticClass: 'name' }, [e._v(e._s(e.nickname))]),
                n('p', { staticClass: 'wechat' }, [
                  e._v('微信号：' + e._s(e.email)),
                ]),
              ]),
              e._t('icon'),
            ],
            2
          )
        },
        c = [],
        r = { name: 'MeCard', props: ['nickname', 'email', 'avatar'] },
        i = r,
        s = (a('829b'), a('2877')),
        o = Object(s['a'])(i, n, c, !1, null, '7ea9c56e', null)
      e['a'] = o.exports
    },
    9199: function(t, e, a) {},
    9688: function(t, e, a) {},
    cefd: function(t, e, a) {
      'use strict'
      var n = a('6b65'),
        c = a.n(n)
      c.a
    },
    f4d7: function(t, e, a) {
      'use strict'
      a.r(e)
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a(
            'div',
            [
              a(
                'BaseHeader',
                { attrs: { text: t.contact.remark } },
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
                  a('template', { slot: 'right' }, [
                    a('i', {
                      staticClass: 'el-icon-more',
                      on: {
                        click: function(e) {
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
              a(
                'main',
                { staticClass: 'main-top' },
                [
                  a('MeCard', {
                    attrs: {
                      nickname: t.contact.remark,
                      email: t.contact.email,
                      avatar: t.contact.avatar,
                    },
                  }),
                  a('MenuPanelArrow', {
                    staticStyle: { 'margin-top': '20px' },
                    attrs: { name: '设置备注' },
                    on: {
                      menuClick: function(e) {
                        return t.$router.push(
                          '/contact/' + t.contact.remark + '/remark'
                        )
                      },
                    },
                  }),
                  a('ButtonPanel', {
                    staticStyle: { 'margin-top': '40px' },
                    attrs: { text: '发消息', icon: 'el-icon-chat-round' },
                    on: {
                      panelClick: function(e) {
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
        r = a('cebc'),
        i = a('2f62'),
        s = a('7aaf'),
        o = a('83f0'),
        l = function() {
          var t = this,
            e = this,
            a = e.$createElement,
            n = e._self._c || a
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
            [n('p', [e._v(e._s(e.name))]), e._m(0)]
          )
        },
        u = [
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a('div', { staticClass: 'right' }, [
              a('i', { staticClass: 'el-icon-arrow-right' }),
            ])
          },
        ],
        f = { name: 'MenuPanel', props: ['name'] },
        m = f,
        p = (a('cefd'), a('2877')),
        d = Object(p['a'])(m, l, u, !1, null, '7ed929ee', null),
        v = d.exports,
        _ = a('5dfd'),
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
        b = Object(p['a'])(C, n, c, !1, null, '6a9efe46', null)
      e['default'] = b.exports
    },
  },
])
//# sourceMappingURL=chunk-5bce559e.7ebfebfa.js.map

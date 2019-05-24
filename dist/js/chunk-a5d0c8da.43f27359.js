;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-a5d0c8da'],
  {
    '0103': function(t, a, e) {},
    '0919': function(t, a, e) {
      'use strict'
      var s = e('0103'),
        n = e.n(s)
      n.a
    },
    '3b65': function(t, a, e) {
      'use strict'
      var s = e('9688'),
        n = e.n(s)
      n.a
    },
    '7aaf': function(t, a, e) {
      'use strict'
      var s = function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e('div', { staticClass: 'header' }, [
            e('p', { staticClass: 'left' }, [t._t('left')], 2),
            e('p', [t._v(t._s(t.text))]),
            e('p', { staticClass: 'right' }, [t._t('right')], 2),
          ])
        },
        n = [],
        i = { name: 'BaseHeader', props: ['text'] },
        c = i,
        r = (e('3b65'), e('2877')),
        o = Object(r['a'])(c, s, n, !1, null, '0d31b276', null)
      a['a'] = o.exports
    },
    '829b': function(t, a, e) {
      'use strict'
      var s = e('9199'),
        n = e.n(s)
      n.a
    },
    '83f0': function(t, a, e) {
      'use strict'
      var s = function() {
          var t = this,
            a = this,
            e = a.$createElement,
            s = a._self._c || e
          return s(
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
              s('section', { staticClass: 'avatar' }, [
                s('img', { attrs: { src: a.avatar, alt: '' } }),
              ]),
              s('section', { staticClass: 'info' }, [
                s('p', { staticClass: 'name' }, [a._v(a._s(a.nickname))]),
                s('p', { staticClass: 'wechat' }, [
                  a._v('微信号：' + a._s(a.email)),
                ]),
              ]),
              a._t('icon'),
            ],
            2
          )
        },
        n = [],
        i = { name: 'MeCard', props: ['nickname', 'email', 'avatar'] },
        c = i,
        r = (e('829b'), e('2877')),
        o = Object(r['a'])(c, s, n, !1, null, '7ea9c56e', null)
      a['a'] = o.exports
    },
    9199: function(t, a, e) {},
    9688: function(t, a, e) {},
    e327: function(t, a, e) {
      'use strict'
      var s = function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e(
            'div',
            { staticClass: 'footer t-c' },
            [
              e(
                'el-col',
                { attrs: { span: 6 } },
                [
                  e('router-link', { attrs: { to: '/', exact: '' } }, [
                    e('i', { staticClass: 'icon icon-weixin' }, [
                      e(
                        'div',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: t.count,
                              expression: 'count',
                            },
                          ],
                          staticClass: 'circle',
                        },
                        [t._v('\n          ' + t._s(t.count) + '\n        ')]
                      ),
                    ]),
                    e('p', [t._v('微信')]),
                  ]),
                ],
                1
              ),
              e(
                'el-col',
                { attrs: { span: 6 } },
                [
                  e('router-link', { attrs: { to: '/contact' } }, [
                    e('div', [
                      e('i', { staticClass: 'icon icon-tongxunlu' }),
                      e('p', [t._v('通讯录')]),
                    ]),
                  ]),
                ],
                1
              ),
              e(
                'el-col',
                { attrs: { span: 6 } },
                [
                  e('router-link', { attrs: { to: '/moment' } }, [
                    e('div', [
                      e('i', { staticClass: 'icon icon-faxianxuanzhong' }),
                      e('p', [t._v('瞬间')]),
                    ]),
                  ]),
                ],
                1
              ),
              e(
                'el-col',
                { attrs: { span: 6 } },
                [
                  e('router-link', { attrs: { to: '/me' } }, [
                    e('div', [
                      e('i', { staticClass: 'icon icon-ren1' }),
                      e('p', [t._v('我')]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        },
        n = [],
        i = {
          name: 'BaseFooter',
          computed: {
            count: function() {
              return this.$store.getters.allUnReadCount(
                this.$store.getters.user._id
              )
            },
          },
        },
        c = i,
        r = (e('0919'), e('2877')),
        o = Object(r['a'])(c, s, n, !1, null, '9ae5393c', null)
      a['a'] = o.exports
    },
    e9f7: function(t, a, e) {
      'use strict'
      e.r(a)
      var s = function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e(
            'div',
            [
              e('BaseHeader', { attrs: { text: '我' } }),
              e(
                'main',
                { staticClass: 'main-top main-bottom' },
                [
                  e(
                    'MeCard',
                    {
                      attrs: {
                        nickname: t.user.nickname,
                        email: t.user.email,
                        avatar: t.user.avatar,
                      },
                      on: {
                        clickMeCard: function(a) {
                          return t.$router.push('/me/edit')
                        },
                      },
                    },
                    [
                      e('template', { slot: 'icon' }, [
                        e('i', { staticClass: 'el-icon-arrow-right' }),
                      ]),
                    ],
                    2
                  ),
                  e(
                    'div',
                    {
                      staticClass: 'panel t-c',
                      staticStyle: { 'margin-top': '30px' },
                      on: {
                        click: function(a) {
                          return t.$router.push('/login')
                        },
                      },
                    },
                    [t._v('\n      退出登录\n    ')]
                  ),
                  e(
                    'div',
                    {
                      staticClass: 'panel t-c',
                      staticStyle: { 'margin-top': '30px' },
                      on: { click: t.test },
                    },
                    [t._v('\n      连接socket\n    ')]
                  ),
                ],
                1
              ),
              e('BaseFooter'),
            ],
            1
          )
        },
        n = [],
        i = e('cebc'),
        c = e('7aaf'),
        r = e('e327'),
        o = e('83f0'),
        l = e('2f62'),
        u = {
          name: 'Me',
          components: {
            MeCard: o['a'],
            BaseFooter: r['a'],
            BaseHeader: c['a'],
          },
          computed: Object(i['a'])(
            {},
            Object(l['b'])({
              user: function(t) {
                return t.user.user
              },
            })
          ),
          methods: {
            test: function() {
              this.$store.dispatch('startSocket')
            },
          },
        },
        p = u,
        v = e('2877'),
        f = Object(v['a'])(p, s, n, !1, null, '2141f1de', null)
      a['default'] = f.exports
    },
  },
])
//# sourceMappingURL=chunk-a5d0c8da.43f27359.js.map

;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-7c18e51d'],
  {
    '0103': function(t, e, a) {},
    '01bb': function(t, e, a) {},
    '0919': function(t, e, a) {
      'use strict'
      var n = a('0103'),
        s = a.n(n)
      s.a
    },
    '29ee': function(t, e, a) {
      'use strict'
      var n = a('de58'),
        s = a.n(n)
      s.a
    },
    '4ac1': function(t, e, a) {
      'use strict'
      var n = function() {
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
            [
              e._t('name'),
              n('div', { staticClass: 'right' }, [e._t('info')], 2),
            ],
            2
          )
        },
        s = [],
        i = { name: 'MenuPanel' },
        r = i,
        c = (a('29ee'), a('2877')),
        o = Object(c['a'])(r, n, s, !1, null, '4fd81a3c', null)
      e['a'] = o.exports
    },
    '53a3': function(t, e, a) {},
    '5e9d': function(t, e, a) {
      'use strict'
      var n = a('53a3'),
        s = a.n(n)
      s.a
    },
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
        s = [],
        i = { name: 'BaseHeader', props: ['text'] },
        r = i,
        c = (a('a8ef'), a('2877')),
        o = Object(c['a'])(r, n, s, !1, null, '681e548d', null)
      e['a'] = o.exports
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
        s = [],
        i = { name: 'MeCard', props: ['nickname', 'email', 'avatar'] },
        r = i,
        c = (a('5e9d'), a('2877')),
        o = Object(c['a'])(r, n, s, !1, null, '19aa288b', null)
      e['a'] = o.exports
    },
    a8ef: function(t, e, a) {
      'use strict'
      var n = a('01bb'),
        s = a.n(n)
      s.a
    },
    de58: function(t, e, a) {},
    e327: function(t, e, a) {
      'use strict'
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a(
            'div',
            { staticClass: 'footer t-c' },
            [
              a(
                'el-col',
                { attrs: { span: 6 } },
                [
                  a('router-link', { attrs: { to: '/', exact: '' } }, [
                    a('i', { staticClass: 'icon icon-weixin' }, [
                      a(
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
                    a('p', [t._v('微信')]),
                  ]),
                ],
                1
              ),
              a(
                'el-col',
                { attrs: { span: 6 } },
                [
                  a('router-link', { attrs: { to: '/contact' } }, [
                    a('div', [
                      a('i', { staticClass: 'icon icon-tongxunlu' }),
                      a('p', [t._v('通讯录')]),
                    ]),
                  ]),
                ],
                1
              ),
              a(
                'el-col',
                { attrs: { span: 6 } },
                [
                  a('router-link', { attrs: { to: '/moment' } }, [
                    a('div', [
                      a('i', { staticClass: 'icon icon-faxianxuanzhong' }),
                      a('p', [t._v('瞬间')]),
                    ]),
                  ]),
                ],
                1
              ),
              a(
                'el-col',
                { attrs: { span: 6 } },
                [
                  a('router-link', { attrs: { to: '/me' } }, [
                    a('div', [
                      a('i', { staticClass: 'icon icon-ren1' }),
                      a('p', [t._v('我')]),
                    ]),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        },
        s = [],
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
        r = i,
        c = (a('0919'), a('2877')),
        o = Object(c['a'])(r, n, s, !1, null, '9ae5393c', null)
      e['a'] = o.exports
    },
    e9f7: function(t, e, a) {
      'use strict'
      a.r(e)
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a(
            'div',
            [
              a('BaseHeader', { attrs: { text: '我' } }),
              a(
                'main',
                { staticClass: 'main-top main-bottom' },
                [
                  a(
                    'MeCard',
                    {
                      attrs: {
                        nickname: t.user.nickname,
                        email: t.user.email,
                        avatar: t.user.avatar,
                      },
                      on: {
                        clickMeCard: function(e) {
                          return t.$router.push('/me/edit')
                        },
                      },
                    },
                    [
                      a('template', { slot: 'icon' }, [
                        a('i', { staticClass: 'el-icon-arrow-right' }),
                      ]),
                    ],
                    2
                  ),
                  a(
                    'MenuPanel',
                    {
                      staticClass: 'mt-20',
                      on: {
                        menuClick: function(e) {
                          return t.$router.push('/moment/friend')
                        },
                      },
                    },
                    [
                      a('template', { slot: 'name' }, [
                        a('div', [t._v('朋友圈')]),
                      ]),
                      a('template', { slot: 'info' }, [
                        a('i', { staticClass: 'el-icon-arrow-right' }),
                      ]),
                    ],
                    2
                  ),
                  a(
                    'MenuPanel',
                    {
                      on: {
                        menuClick: function(e) {
                          return t.$router.push('/moment/collect')
                        },
                      },
                    },
                    [
                      a('template', { slot: 'name' }, [
                        a('div', [t._v('收藏')]),
                      ]),
                      a('template', { slot: 'info' }, [
                        a('i', { staticClass: 'el-icon-arrow-right' }),
                      ]),
                    ],
                    2
                  ),
                  a(
                    'div',
                    {
                      staticClass: 'panel t-c mt-60',
                      on: {
                        click: function(e) {
                          return t.$router.push('/login')
                        },
                      },
                    },
                    [t._v('\n      退出登录\n    ')]
                  ),
                ],
                1
              ),
              a('BaseFooter'),
            ],
            1
          )
        },
        s = [],
        i = a('cebc'),
        r = a('7aaf'),
        c = a('e327'),
        o = a('4ac1'),
        l = a('83f0'),
        u = a('2f62'),
        m = {
          name: 'Me',
          components: {
            MeCard: l['a'],
            BaseFooter: c['a'],
            BaseHeader: r['a'],
            MenuPanel: o['a'],
          },
          computed: Object(i['a'])(
            {},
            Object(u['b'])({
              user: function(t) {
                return t.user.user
              },
            })
          ),
        },
        f = m,
        v = a('2877'),
        d = Object(v['a'])(f, n, s, !1, null, '8d7ab4f2', null)
      e['default'] = d.exports
    },
  },
])
//# sourceMappingURL=chunk-7c18e51d.9e7fee07.js.map

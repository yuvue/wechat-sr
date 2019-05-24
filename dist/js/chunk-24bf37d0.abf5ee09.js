;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-24bf37d0'],
  {
    '0103': function(t, n, e) {},
    '0919': function(t, n, e) {
      'use strict'
      var a = e('0103'),
        c = e.n(a)
      c.a
    },
    '1d0c': function(t, n, e) {
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
                { attrs: { text: '通讯录' } },
                [
                  e('template', { slot: 'right' }, [
                    e('i', {
                      staticClass: 'icon icon-adduser',
                      on: {
                        click: function(n) {
                          return t.$router.push('/contact/add')
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
                [e('ContactCardMenu'), e('ContactCardSort')],
                1
              ),
              e('BaseFooter'),
            ],
            1
          )
        },
        c = [],
        s = function() {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            t._l(Object.keys(t.contacts), function(n) {
              return e(
                'div',
                [
                  e('div', { staticClass: 'letter' }, [t._v(t._s(n))]),
                  t._l(t.contacts[n], function(n) {
                    return e(
                      'div',
                      [
                        e('ContactItem', {
                          attrs: { avatar: n.avatar, name: n.remark },
                          on: {
                            itemClick: function(e) {
                              return t.itemClick(n)
                            },
                          },
                        }),
                      ],
                      1
                    )
                  }),
                ],
                2
              )
            }),
            0
          )
        },
        i = [],
        r = (e('2f62'), e('e385')),
        o = {
          components: { ContactItem: r['a'] },
          computed: {
            contacts: function() {
              return this.$store.getters['contacts']
            },
          },
          methods: {
            itemClick: function(t) {
              this.$router.push('/contact/'.concat(t.remark)),
                this.$store.dispatch('setCurContact', t)
            },
          },
        },
        u = o,
        l = (e('d00b'), e('2877')),
        f = Object(l['a'])(u, s, i, !1, null, null, null),
        m = f.exports,
        d = function() {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
          return e(
            'div',
            [
              e('ContactItem', {
                attrs: {
                  avatar: '/img/icons/contact_top-friend-notify.png',
                  name: '新的朋友',
                },
                on: {
                  itemClick: function(n) {
                    return t.itemClick('/contact/friend')
                  },
                },
              }),
              e('ContactItem', {
                attrs: {
                  avatar: '/img/icons/contact_top-addgroup.png',
                  name: '群聊',
                },
                on: {
                  itemClick: function(n) {
                    return t.itemClick('/group')
                  },
                },
              }),
            ],
            1
          )
        },
        v = [],
        p = {
          components: { ContactItem: r['a'] },
          methods: {
            itemClick: function(t) {
              this.$router.push(t)
            },
          },
        },
        C = p,
        _ = (e('febb'), Object(l['a'])(C, d, v, !1, null, null, null)),
        h = _.exports,
        b = e('7aaf'),
        k = e('e327'),
        g = {
          name: 'chat',
          components: {
            ContactCardMenu: h,
            ContactCardSort: m,
            BaseFooter: k['a'],
            BaseHeader: b['a'],
          },
        },
        x = g,
        $ = Object(l['a'])(x, a, c, !1, null, '3a9c2854', null)
      n['default'] = $.exports
    },
    '36f1': function(t, n, e) {},
    '3b65': function(t, n, e) {
      'use strict'
      var a = e('9688'),
        c = e.n(a)
      c.a
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
        r = (e('3b65'), e('2877')),
        o = Object(r['a'])(i, a, c, !1, null, '0d31b276', null)
      n['a'] = o.exports
    },
    9688: function(t, n, e) {},
    d00b: function(t, n, e) {
      'use strict'
      var a = e('36f1'),
        c = e.n(a)
      c.a
    },
    e327: function(t, n, e) {
      'use strict'
      var a = function() {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n
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
        c = [],
        s = {
          name: 'BaseFooter',
          computed: {
            count: function() {
              return this.$store.getters.allUnReadCount(
                this.$store.getters.user._id
              )
            },
          },
        },
        i = s,
        r = (e('0919'), e('2877')),
        o = Object(r['a'])(i, a, c, !1, null, '9ae5393c', null)
      n['a'] = o.exports
    },
    e385: function(t, n, e) {
      'use strict'
      var a = function() {
          var t = this,
            n = this,
            e = n.$createElement,
            a = n._self._c || e
          return a(
            'div',
            {
              staticClass: 'item',
              on: {
                click: function() {
                  return t.$emit('itemClick')
                },
              },
            },
            [
              a('section', [
                a('img', {
                  staticClass: 'avatar',
                  attrs: { src: n.avatar, alt: '#' },
                }),
                a('p', { staticClass: 'name' }, [n._v(n._s(n.name))]),
              ]),
              a('section', [n._t('right')], 2),
            ]
          )
        },
        c = [],
        s = { name: 'ContactItem', props: ['avatar', 'name'] },
        i = s,
        r = (e('fbb8'), e('2877')),
        o = Object(r['a'])(i, a, c, !1, null, '45c141d0', null)
      n['a'] = o.exports
    },
    ef20: function(t, n, e) {},
    f12d: function(t, n, e) {},
    fbb8: function(t, n, e) {
      'use strict'
      var a = e('ef20'),
        c = e.n(a)
      c.a
    },
    febb: function(t, n, e) {
      'use strict'
      var a = e('f12d'),
        c = e.n(a)
      c.a
    },
  },
])
//# sourceMappingURL=chunk-24bf37d0.abf5ee09.js.map

;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-a3f0de48'],
  {
    '0103': function(t, e, a) {},
    '0919': function(t, e, a) {
      'use strict'
      var n = a('0103'),
        s = a.n(n)
      s.a
    },
    '3b65': function(t, e, a) {
      'use strict'
      var n = a('9688'),
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
        c = { name: 'BaseHeader', props: ['text'] },
        i = c,
        o = (a('3b65'), a('2877')),
        r = Object(o['a'])(i, n, s, !1, null, '0d31b276', null)
      e['a'] = r.exports
    },
    9688: function(t, e, a) {},
    cafd: function(t, e, a) {
      'use strict'
      function n(t) {
        var e = new Date(t),
          a = {
            year: e.getFullYear(),
            month: e.getMonth() + 1,
            date: e.getDate(),
            day: e.getDay(),
            hour: e.getHours(),
            minite: e.getMinutes(),
            getHourMinite: function() {
              var t = this.minite
              return (
                t < 10 && (t = '0'.concat(t)),
                this.hour >= 13
                  ? '下午'.concat(this.hour - 12, ':').concat(t)
                  : '上午'.concat(this.hour, ':').concat(t)
              )
            },
            getYearMonthDay: function() {
              return ''
                .concat(this.year, '/')
                .concat(this.month, '/')
                .concat(this.date)
            },
          },
          n = new Date(),
          s = Date.parse(
            ''
              .concat(n.getFullYear(), '/')
              .concat(n.getMonth() + 1, '/')
              .concat(n.getDate())
          )
        if (t > s) return a.getHourMinite()
        if (t > s - 864e5) return '昨天'
        if (t > s - 6048e5) {
          var c = ['一', '二', '三', '四', '五', '六', '日']
          return '星期'.concat(c[a.day])
        }
        return a.getYearMonthDay()
      }
      e['a'] = n
    },
    cbe6: function(t, e, a) {},
    cf9a: function(t, e, a) {
      'use strict'
      var n = a('cbe6'),
        s = a.n(n)
      s.a
    },
    d504: function(t, e, a) {
      'use strict'
      a.r(e)
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a(
            'div',
            [
              a('BaseHeader', {
                attrs: { text: t.count ? '微信 (' + t.count + ')' : '微信' },
              }),
              a(
                'main',
                { staticClass: 'main-top main-bottom' },
                t._l(t.chats, function(t) {
                  return a('ChatItem', { key: t._id, attrs: { contact: t } })
                }),
                1
              ),
              a('BaseFooter'),
            ],
            1
          )
        },
        s = [],
        c = (a('96cf'), a('3b8d')),
        i = a('e327'),
        o = a('7aaf'),
        r = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a('div', { staticClass: 'item', on: { click: t.itemClick } }, [
            a('div', { staticClass: 'item-part item-part-left' }, [
              a('img', { attrs: { src: t.contact.avatar, alt: '#' } }),
              a(
                'div',
                {
                  directives: [
                    {
                      name: 'show',
                      rawName: 'v-show',
                      value: t.contact.unReadCount,
                      expression: 'contact.unReadCount',
                    },
                  ],
                  staticClass: 'count',
                },
                [t._v('\n      ' + t._s(t.contact.unReadCount) + '\n    ')]
              ),
            ]),
            a('div', { staticClass: 'item-part item-part-right' }, [
              a('p', { staticClass: 'name' }, [
                t._v('\n      ' + t._s(t.contact.remark) + '\n      '),
                a('b', { staticClass: 'time' }, [
                  t._v(t._s(t._f('_time')(t.contact.time))),
                ]),
              ]),
              a('p', { staticClass: 'msg' }, [
                t._v(t._s(t._f('_msg')(t.contact.msg))),
              ]),
            ]),
          ])
        },
        u = [],
        l = a('cafd'),
        h = {
          name: 'ChatItem',
          props: ['contact'],
          methods: {
            itemClick: function() {
              var t = this.contact._id
              this.$router.push('/chat/'.concat(t)),
                this.$store.dispatch('setCurContact', t)
            },
          },
          filters: {
            _msg: function(t) {
              return 'audio' === t.type
                ? '[语音] '.concat(t.length, 's')
                : t.text
            },
            _time: l['a'],
          },
          mounted: function() {},
        },
        m = h,
        d = (a('cf9a'), a('2877')),
        f = Object(d['a'])(m, r, u, !1, null, '3e69544f', null),
        p = f.exports
      function v(t) {
        t.dispatch('appShell/appHeader/setAppHeader', {
          show: !0,
          title: 'Lavas',
          showMenu: !0,
          showBack: !1,
          showLogo: !1,
          actions: [{ icon: 'search', route: '/search' }],
        })
      }
      var _ = {
          name: 'index',
          metaInfo: {
            title: 'Home',
            titleTemplate: '%s - Lavas',
            meta: [
              { name: 'keywords', content: 'lavas PWA' },
              {
                name: 'description',
                content:
                  '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题',
              },
            ],
          },
          data: function() {
            return { user_id: this.$store.getters.user._id }
          },
          computed: {
            chats: function() {
              return this.$store.getters.chats(this.user_id)
            },
            count: function() {
              return this.$store.getters.allUnReadCount(this.user_id)
            },
          },
          components: { BaseFooter: i['a'], BaseHeader: o['a'], ChatItem: p },
          asyncData: (function() {
            var t = Object(c['a'])(
              regeneratorRuntime.mark(function t(e) {
                var a
                return regeneratorRuntime.wrap(function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        ;(a = e.store), e.route, v(a)
                      case 2:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )
            function e(e) {
              return t.apply(this, arguments)
            }
            return e
          })(),
          activated: function() {
            v(this.$store)
          },
          mounted: function() {
            console.log(this.chats)
          },
        },
        g = _,
        C = Object(d['a'])(g, n, s, !1, null, '08c79835', null)
      e['default'] = C.exports
    },
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
        c = {
          name: 'BaseFooter',
          computed: {
            count: function() {
              return this.$store.getters.allUnReadCount(
                this.$store.getters.user._id
              )
            },
          },
        },
        i = c,
        o = (a('0919'), a('2877')),
        r = Object(o['a'])(i, n, s, !1, null, '9ae5393c', null)
      e['a'] = r.exports
    },
  },
])
//# sourceMappingURL=chunk-a3f0de48.ff67fa8d.js.map

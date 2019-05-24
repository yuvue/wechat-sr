;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-df7e1d2c'],
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
    '3f9e': function(t, e, a) {
      'use strict'
      a.r(e)
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a(
            'div',
            [
              a('BaseHeader', { attrs: { text: '瞬间' } }),
              a(
                'main',
                { staticClass: 'main-top main-bottom' },
                [a('Card')],
                1
              ),
              a('BaseFooter'),
            ],
            1
          )
        },
        s = [],
        i = a('7a26'),
        c = a('7aaf'),
        r = a('e327'),
        o = {
          name: 'chat',
          components: { Card: i['a'], BaseFooter: r['a'], BaseHeader: c['a'] },
        },
        l = o,
        u = a('2877'),
        m = Object(u['a'])(l, n, s, !1, null, '4a08fc9c', null)
      e['default'] = m.exports
    },
    '66a5': function(t, e, a) {},
    '6d9d': function(t, e, a) {
      'use strict'
      var n = a('96aa'),
        s = a.n(n)
      s.a
    },
    '7a26': function(t, e, a) {
      'use strict'
      var n = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a('div', { staticClass: 'card' }, [
            t._m(0),
            a('main', [
              t._m(1),
              a('section', { staticClass: 'card-part-2' }, [
                a('div', { staticClass: 'card-text' }, [
                  t._v(
                    '\n        这是周佳俊发的一篇测试发现模块的socket功能的说说\n      '
                  ),
                ]),
                a('div', { staticClass: 'card-config' }, [
                  t._m(2),
                  t._m(3),
                  a('p', { on: { click: t.showComment } }, [
                    a('i', { staticClass: 'icon icon-pinglun' }),
                    a('span', [t._v(' 4')]),
                  ]),
                ]),
                a(
                  'div',
                  {
                    directives: [
                      {
                        name: 'show',
                        rawName: 'v-show',
                        value: t.isComment,
                        expression: 'isComment',
                      },
                    ],
                    staticClass: 'card-comment',
                  },
                  [
                    a('el-divider'),
                    a(
                      'div',
                      [a('CommentBox', { attrs: { comment: t.comment } })],
                      1
                    ),
                    t._m(4),
                  ],
                  1
                ),
              ]),
            ]),
          ])
        },
        s = [
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a('header', [
              a('section', [
                a('img', {
                  attrs: { src: '/img/avatar/chenhuan.jpeg', alt: '' },
                }),
              ]),
              a('section', { staticClass: 'middle' }, [
                a('p', { staticClass: 'sender' }, [t._v('我')]),
                a('p', { staticClass: 'time' }, [t._v('2019/2/20')]),
              ]),
            ])
          },
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a('section', [
              a('div', { staticClass: 'card-image' }, [
                a('img', { attrs: { src: '/img/avatar/chenhuan.jpeg' } }),
              ]),
            ])
          },
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a('p', [a('i', { staticClass: 'icon icon-wujiaoxingkong' })])
          },
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a('p', [
              a('i', { staticClass: 'icon icon-aixin1' }),
              a('span', [t._v(' 2')]),
            ])
          },
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a('div', { staticClass: 'comment-write' }, [
              a('input', {
                attrs: { type: 'text', placeholder: '请输入评论' },
              }),
              a('button', { staticClass: 'btn-send' }, [
                t._v('\n            发送\n          '),
              ]),
            ])
          },
        ],
        i = function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e
          return a('div', { staticClass: 'box' }, [
            a('img', { attrs: { src: t.comment['avatar'], alt: '' } }),
            a('div', { staticClass: 'comment' }, [
              a('p', { staticClass: 'time' }, [
                t._v(t._s(t._f('filterTime')(t.comment['time']))),
              ]),
              a('p', { staticClass: 'text' }, [t._v(t._s(t.comment['text']))]),
            ]),
          ])
        },
        c = [],
        r = a('cafd'),
        o = {
          name: 'CommentBox',
          props: { comment: { type: Object } },
          data: function() {
            return { commentText: '' }
          },
          filters: { filterTime: r['a'] },
        },
        l = o,
        u = (a('6d9d'), a('2877')),
        m = Object(u['a'])(l, i, c, !1, null, '4d62b11a', null),
        f = m.exports,
        v = {
          name: 'Card',
          data: function() {
            return {
              comment: {
                avatar: '/img/avatar/chenhuan.jpeg',
                time: Date.now(),
                text: '对的',
              },
              isComment: !1,
            }
          },
          components: { CommentBox: f },
          methods: {
            showComment: function() {
              this.isComment = !this.isComment
            },
          },
        },
        d = v,
        h = (a('7f9c'), Object(u['a'])(d, n, s, !1, null, '87e8ef6a', null))
      e['a'] = h.exports
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
        c = i,
        r = (a('3b65'), a('2877')),
        o = Object(r['a'])(c, n, s, !1, null, '0d31b276', null)
      e['a'] = o.exports
    },
    '7f9c': function(t, e, a) {
      'use strict'
      var n = a('66a5'),
        s = a.n(n)
      s.a
    },
    9688: function(t, e, a) {},
    '96aa': function(t, e, a) {},
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
          var i = ['一', '二', '三', '四', '五', '六', '日']
          return '星期'.concat(i[a.day])
        }
        return a.getYearMonthDay()
      }
      e['a'] = n
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
        r = (a('0919'), a('2877')),
        o = Object(r['a'])(c, n, s, !1, null, '9ae5393c', null)
      e['a'] = o.exports
    },
  },
])
//# sourceMappingURL=chunk-df7e1d2c.9b76a80b.js.map

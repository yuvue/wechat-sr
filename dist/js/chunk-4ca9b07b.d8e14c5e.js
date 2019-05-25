;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-4ca9b07b'],
  {
    '0b9b': function(t, e, n) {
      'use strict'
      var i = n('0da7'),
        a = n.n(i)
      a.a
    },
    '0da7': function(t, e, n) {},
    '37c4': function(t, e, n) {
      'use strict'
      var i = n('d42b'),
        a = n.n(i)
      a.a
    },
    '6e90': function(t, e, n) {},
    '7a26': function(t, e, n) {
      'use strict'
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'card' }, [
            n('header', [
              n('section', [
                n('img', {
                  staticClass: 'avatar',
                  attrs: { src: t.moment.avatar, alt: '' },
                }),
              ]),
              n('section', { staticClass: 'middle' }, [
                n('p', { staticClass: 'sender' }, [t._v(t._s(t.name))]),
                n('p', { staticClass: 'time' }, [
                  t._v(t._s(t._f('_time')(t.moment.add_time))),
                ]),
              ]),
            ]),
            n(
              'div',
              { staticClass: 'card-image' },
              t._l(t.moment.img, function(t, e) {
                return n('img', { key: e, attrs: { src: t } })
              }),
              0
            ),
            n('section', [
              n('div', { staticClass: 'card-text' }, [
                t._v('\n      ' + t._s(t.moment.text) + '\n    '),
              ]),
              n(
                'div',
                { staticClass: 'card-voice' },
                [n('AmrPlayer', { attrs: { audio: t.moment.audio } })],
                1
              ),
              n('div', { staticClass: 'card-config' }, [
                n('p', [
                  n('i', {
                    staticClass: 'icon',
                    class: t.isCollected ? 'icon-star' : 'icon-wujiaoxingkong',
                    on: { click: t.collect },
                  }),
                ]),
                n('p', [
                  n('i', {
                    staticClass: 'icon ',
                    class: t.isLiked ? 'icon-aixin1' : 'icon-aixin',
                    on: { click: t.like },
                  }),
                  n('span', [t._v(' ' + t._s(t.moment.likes))]),
                ]),
                n('p', { on: { click: t.showComment } }, [
                  n('i', { staticClass: 'icon icon-pinglun' }),
                  t.moment.comments
                    ? n('span', [t._v(' ' + t._s(t.moment.comments.length))])
                    : t._e(),
                ]),
              ]),
              n(
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
                  n('el-divider'),
                  n(
                    'div',
                    t._l(t.moment.comments, function(t) {
                      return n('CommentBox', {
                        key: t._id,
                        attrs: { comment: t },
                      })
                    }),
                    1
                  ),
                  n(
                    'div',
                    { staticClass: 'comment-write' },
                    [
                      n('el-input', {
                        attrs: { type: 'text', placeholder: '请输入评论' },
                        model: {
                          value: t.text,
                          callback: function(e) {
                            t.text = e
                          },
                          expression: 'text',
                        },
                      }),
                      n(
                        'el-button',
                        {
                          attrs: { size: 'small', type: 'primary' },
                          on: { click: t.comment },
                        },
                        [t._v('\n          发送\n        ')]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ])
        },
        a = [],
        s = (n('6762'),
        n('2fdb'),
        function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'box' }, [
            n('img', { attrs: { src: t.comment['avatar'], alt: '' } }),
            n('div', { staticClass: 'comment' }, [
              n('p', { staticClass: 'time' }, [
                t._v(t._s(t._f('filterTime')(t.comment['add_time']))),
              ]),
              n('p', { staticClass: 'text' }, [t._v(t._s(t.comment['text']))]),
            ]),
          ])
        }),
        c = [],
        o = n('cafd'),
        r = {
          name: 'CommentBox',
          props: { comment: { type: Object } },
          data: function() {
            return { commentText: '' }
          },
          filters: { filterTime: o['a'] },
        },
        m = r,
        l = (n('0b9b'), n('2877')),
        u = Object(l['a'])(m, s, c, !1, null, '78b865f8', null),
        d = u.exports
      function h(t) {
        var e = new Date(t),
          n = {
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
          i = new Date(),
          a = Date.parse(
            ''
              .concat(i.getFullYear(), '/')
              .concat(i.getMonth() + 1, '/')
              .concat(i.getDate())
          )
        if (t > a) return n.getHourMinite()
        if (t > a - 864e5) return '昨天'
        if (t > a - 6048e5) {
          var s = ['一', '二', '三', '四', '五', '六', '日']
          return '星期'.concat(s[n.day])
        }
        return n.getYearMonthDay()
      }
      var f = h,
        v = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            [
              n('div', { staticClass: 'range' }, [
                n('div', { staticClass: 'second y-ctr x-ctr' }, [
                  t._v(t._s(t.audio.sec + ' s')),
                ]),
                n('div', { ref: 'range', staticClass: 'range__move' }),
              ]),
              n(
                'el-button',
                {
                  attrs: { size: 'small', type: 'primary' },
                  on: { click: t.play },
                },
                [t._v('播放')]
              ),
            ],
            1
          )
        },
        _ = [],
        p = n('ae4c'),
        g = n.n(p),
        C = null,
        y = 'http://localhost:3000',
        x = {
          name: 'AmrPlayer',
          props: ['audio'],
          methods: {
            play: function() {
              var t = this
              ;(C = new g.a()),
                C.initWithUrl(y + this.audio.src).then(function() {
                  C.play(),
                    (t.interval = setInterval(function() {
                      t.seconds += 1
                      var e = t.$refs.range
                      e.style.width = t.seconds + 'px'
                    }, 1e3)),
                    C.onEnded(function() {
                      clearInterval(t.interval), (C = null)
                    })
                })
            },
          },
        },
        k = x,
        b = (n('f868'), Object(l['a'])(k, v, _, !1, null, 'ff89171a', null)),
        w = b.exports,
        M = {
          name: 'Card',
          props: ['moment'],
          components: { CommentBox: d, AmrPlayer: w },
          data: function() {
            return {
              isComment: !1,
              text: '',
              user_id: this.$store.getters.user._id,
              isLiked: !1,
            }
          },
          computed: {
            name: function() {
              var t = this.moment.user_id
              if (t === this.user_id) return '我'
              var e = this.$store.getters.contactIdRemarkMap.get(t) || ''
              return e || (this.moment.nickname || '某个很帅的人')
            },
            isCollected: function() {
              return this.moment.collects.includes(this.user_id)
            },
          },
          methods: {
            showComment: function() {
              this.isComment = !this.isComment
            },
            comment: function() {
              var t = this.moment._id
              this.$store.dispatch('addComment', {
                id: t,
                user_id: this.user_id,
                text: this.text,
              }),
                (this.text = '')
            },
            collect: function() {
              this.$store.dispatch('collectMoment', {
                id: this.moment._id,
                config: this.isCollected ? -1 : 1,
              })
            },
            like: function() {
              ;(this.isLiked = !this.isLiked),
                this.$store.dispatch('likeMoment', {
                  id: this.moment._id,
                  config: this.isLiked ? 1 : -1,
                })
            },
          },
          filters: { _time: f },
        },
        D = M,
        $ = (n('37c4'), Object(l['a'])(D, i, a, !1, null, null, null))
      e['a'] = $.exports
    },
    ab6c: function(t, e, n) {
      'use strict'
      n.r(e)
      var i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            [
              n(
                'BaseHeader',
                { attrs: { text: '我的收藏' } },
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
                t._l(t.moments, function(t) {
                  return n('Card', { key: t._id, attrs: { moment: t } })
                }),
                1
              ),
            ],
            1
          )
        },
        a = [],
        s = n('7aaf'),
        c = n('7a26'),
        o = {
          name: 'MomentFriend',
          components: { BaseHeader: s['a'], Card: c['a'] },
          data: function() {
            return { user_id: this.$store.getters.user._id }
          },
          computed: {
            moments: function() {
              return this.$store.getters.collectMoments(this.user_id)
            },
          },
        },
        r = o,
        m = n('2877'),
        l = Object(m['a'])(r, i, a, !1, null, '4acf495f', null)
      e['default'] = l.exports
    },
    cafd: function(t, e, n) {
      'use strict'
      function i(t) {
        var e = new Date(t),
          n = {
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
          i = new Date(),
          a = Date.parse(
            ''
              .concat(i.getFullYear(), '/')
              .concat(i.getMonth() + 1, '/')
              .concat(i.getDate())
          )
        if (t > a) return n.getHourMinite()
        if (t > a - 864e5) return '昨天'
        if (t > a - 6048e5) {
          var s = ['一', '二', '三', '四', '五', '六', '日']
          return '星期'.concat(s[n.day])
        }
        return n.getYearMonthDay()
      }
      e['a'] = i
    },
    d42b: function(t, e, n) {},
    f868: function(t, e, n) {
      'use strict'
      var i = n('6e90'),
        a = n.n(i)
      a.a
    },
  },
])
//# sourceMappingURL=chunk-4ca9b07b.d8e14c5e.js.map

;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-4e85f3d0'],
  {
    '01bb': function(t, e, n) {},
    2362: function(t, e, n) {},
    '33eb': function(t, e, n) {
      'use strict'
      var a = n('b7d9'),
        s = n.n(a)
      s.a
    },
    '4acd': function(t, e, n) {},
    '4b6e': function(t, e, n) {
      'use strict'
      n.r(e)
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            [
              n(
                'BaseHeader',
                { attrs: { text: t.contact.remark } },
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
                  n('template', { slot: 'right' }, [
                    n('i', {
                      staticClass: 'el-icon-more',
                      on: {
                        click: function(e) {
                          return t.$router.push(
                            '/chat/' + t.contact._id + '/config'
                          )
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
                t._l(t.contact.msg, function(t) {
                  return n('TextMsgBox', { key: t._id, attrs: { msg: t } })
                }),
                1
              ),
              n('ChatFooter'),
            ],
            1
          )
        },
        s = [],
        o = n('cebc'),
        c = (n('2f62'), n('7aaf')),
        i = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { attrs: { id: 'dialogue-footer' } },
            [
              t.showSpeak
                ? n('ChatFooterVoice', { on: { send: t.send } })
                : t._e(),
              t.showSpeak
                ? t._e()
                : n('ChatFooterText', { on: { send: t.send } }),
            ],
            1
          )
        },
        r = [],
        u = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'dialogue-footer' }, [
            n('section', [
              n('i', {
                staticClass: 'icon icon-yuyin',
                on: {
                  click: function(e) {
                    t.$parent.showSpeak = !0
                  },
                },
              }),
            ]),
            n(
              'section',
              {
                on: {
                  keyup: function(e) {
                    return !e.type.indexOf('key') &&
                      t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                      ? null
                      : t.click(e)
                  },
                },
              },
              [
                n('el-input', {
                  model: {
                    value: t.text,
                    callback: function(e) {
                      t.text = e
                    },
                    expression: 'text',
                  },
                }),
              ],
              1
            ),
            n(
              'section',
              [
                n(
                  'el-button',
                  {
                    attrs: { type: 'primary', size: 'small' },
                    on: { click: t.click },
                  },
                  [t._v('发送')]
                ),
              ],
              1
            ),
          ])
        },
        l = [],
        f = {
          name: 'ChatFooterText',
          data: function() {
            return { text: '' }
          },
          methods: {
            click: function() {
              var t = { type: 'text', text: this.text }
              this.$emit('send', t), (this.text = '')
            },
          },
        },
        d = f,
        m = (n('65ba'), n('2877')),
        p = Object(m['a'])(d, u, l, !1, null, '79c3d8e4', null),
        h = p.exports,
        _ = function() {
          var t = this,
            e = this,
            n = e.$createElement,
            a = e._self._c || n
          return a('div', { staticClass: 'dialogue-footer' }, [
            a('section', [
              a('i', {
                staticClass: 'icon icon-jianpan2',
                on: {
                  click: function(t) {
                    e.$parent.showSpeak = !1
                  },
                },
              }),
            ]),
            a('section', [a('el-input', { attrs: { value: '点击 录音' } })], 1),
            a(
              'section',
              [
                a(
                  'el-button',
                  {
                    attrs: { type: 'primary', size: 'small' },
                    on: {
                      click: function() {
                        return t.$emit('send')
                      },
                    },
                  },
                  [e._v('发送')]
                ),
              ],
              1
            ),
          ])
        },
        v = [],
        b = {
          name: 'ChatFooterVoice',
          data: function() {
            return { isRecording: !1 }
          },
          method: { click: function() {} },
          mounted: function() {},
        },
        g = b,
        x = (n('33eb'), Object(m['a'])(g, _, v, !1, null, '0194a55f', null)),
        k = x.exports,
        C = {
          name: 'FooterDialogue',
          data: function() {
            return { showSpeak: !1 }
          },
          components: { ChatFooterText: h, ChatFooterVoice: k },
          methods: {
            send: function(t) {
              var e = this.$store.state.contact.curContact.contact_id,
                n = this.$store.getters.user._id
              this.$store.dispatch(
                'sendMessage',
                Object(o['a'])({}, t, { from_id: n, to_id: e })
              )
            },
          },
        },
        $ = C,
        y = Object(m['a'])($, i, r, !1, null, null, null),
        w = y.exports,
        E = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            {
              staticClass: 'msg-flex',
              class: t.msg.send ? 'msg__send' : 'msg__receive',
            },
            [
              n('p', { staticClass: 'msg-text' }, [t._v(t._s(t.msg.text))]),
              n('img', { attrs: { src: t.msg.avatar, alt: '' } }),
            ]
          )
        },
        O = [],
        j = { name: 'TextMsgBox', props: ['msg'] },
        F = j,
        S = (n('5ebf'), Object(m['a'])(F, E, O, !1, null, '449b73aa', null)),
        B = S.exports,
        M = {
          name: 'ChatDetail',
          data: function() {
            return { user: this.$store.getters['user'] }
          },
          computed: {
            contact: function() {
              var t = this,
                e = this.$store.state.contact.curContact,
                n = e.contact_id,
                a = e.remark,
                s = e.messageList,
                c = e.type,
                i = s.map(function(e) {
                  var n = e.from_id === t.user._id,
                    a = n ? t.user.avatar : t.$store.getters.avatar(e.from_id)
                  return Object(o['a'])({ send: n, avatar: a }, e)
                })
              return { _id: n, type: c, msg: i, remark: a }
            },
          },
          components: { BaseHeader: c['a'], ChatFooter: w, TextMsgBox: B },
          beforeRouteLeave: function(t, e, n) {
            'group' === this.contact.type
              ? this.$store.commit('READ_GROUP_MESSAGE', this.contact._id)
              : this.$store.dispatch('readMessage', this.contact._id),
              n()
          },
        },
        T = M,
        R = Object(m['a'])(T, a, s, !1, null, '06961654', null)
      e['default'] = R.exports
    },
    '5ebf': function(t, e, n) {
      'use strict'
      var a = n('2362'),
        s = n.n(a)
      s.a
    },
    '65ba': function(t, e, n) {
      'use strict'
      var a = n('4acd'),
        s = n.n(a)
      s.a
    },
    '7aaf': function(t, e, n) {
      'use strict'
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'header' }, [
            n('p', { staticClass: 'left' }, [t._t('left')], 2),
            n('p', [t._v(t._s(t.text))]),
            n('p', { staticClass: 'right' }, [t._t('right')], 2),
          ])
        },
        s = [],
        o = { name: 'BaseHeader', props: ['text'] },
        c = o,
        i = (n('a8ef'), n('2877')),
        r = Object(i['a'])(c, a, s, !1, null, '681e548d', null)
      e['a'] = r.exports
    },
    a8ef: function(t, e, n) {
      'use strict'
      var a = n('01bb'),
        s = n.n(a)
      s.a
    },
    b7d9: function(t, e, n) {},
  },
])
//# sourceMappingURL=chunk-4e85f3d0.e76e430c.js.map

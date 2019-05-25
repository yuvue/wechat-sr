;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-76d40438'],
  {
    '01bb': function(t, e, n) {},
    '25ef': function(t, e, n) {
      'use strict'
      var a = n('cf93'),
        s = n.n(a)
      s.a
    },
    '29ee': function(t, e, n) {
      'use strict'
      var a = n('de58'),
        s = n.n(a)
      s.a
    },
    '4ac1': function(t, e, n) {
      'use strict'
      var a = function() {
          var t = this,
            e = this,
            n = e.$createElement,
            a = e._self._c || n
          return a(
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
              a('div', { staticClass: 'right' }, [e._t('info')], 2),
            ],
            2
          )
        },
        s = [],
        i = { name: 'MenuPanel' },
        r = i,
        l = (n('29ee'), n('2877')),
        c = Object(l['a'])(r, a, s, !1, null, '4fd81a3c', null)
      e['a'] = c.exports
    },
    '4f96': function(t, e, n) {
      'use strict'
      n.r(e)
      var a = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            [
              n('MeHeader', {
                attrs: { 'is-edit': t.isEdit },
                on: {
                  editUser: t.editUser,
                  changeEditState: t.changeEditState,
                  onSubmit: t.onSubmit,
                },
              }),
              n('main', { staticClass: 'main-top' }, [
                n(
                  'div',
                  { staticClass: 'c-1' },
                  [
                    n('AvatarBar', {
                      attrs: { avatar: t.user.avatar, 'is-edit': t.isEdit },
                      on: { editUser: t.editUser },
                    }),
                    n('NameBar', {
                      attrs: { nickname: t.user.nickname, 'is-edit': t.isEdit },
                      on: { editUser: t.editUser },
                    }),
                    n('WechatNumberBar', {
                      attrs: { email: t.user.email, 'is-edit': t.isEdit },
                      on: { editUser: t.editUser },
                    }),
                    n('AddressBar', {
                      attrs: { address: t.user.address, 'is-edit': t.isEdit },
                      on: { editUser: t.editUser },
                    }),
                    n('SignatureBar', {
                      attrs: {
                        signature: t.user.signature,
                        'is-edit': t.isEdit,
                      },
                      on: { editUser: t.editUser },
                    }),
                  ],
                  1
                ),
              ]),
            ],
            1
          )
        },
        s = [],
        i = (n('96cf'), n('3b8d')),
        r = n('cebc'),
        l = n('2f62'),
        c = n('93d6'),
        u = function() {
          var t = this,
            e = this,
            n = e.$createElement,
            a = e._self._c || n
          return a(
            'BaseHeader',
            { attrs: { text: '编辑信息' } },
            [
              a(
                'template',
                { slot: 'left' },
                [
                  e.isEdit
                    ? a(
                        'el-button',
                        {
                          attrs: { type: 'default' },
                          on: {
                            click: function() {
                              return t.$emit('changeEditState')
                            },
                          },
                        },
                        [e._v('取消')]
                      )
                    : a('i', {
                        staticClass: 'el-icon-arrow-left',
                        on: {
                          click: function(t) {
                            return e.$router.back()
                          },
                        },
                      }),
                ],
                1
              ),
              a(
                'template',
                { slot: 'right' },
                [
                  e.isEdit
                    ? a(
                        'el-button',
                        {
                          attrs: { type: 'primary' },
                          on: {
                            click: function() {
                              return t.$emit('onSubmit')
                            },
                          },
                        },
                        [e._v('完成')]
                      )
                    : a('i', {
                        staticClass: 'el-icon-edit',
                        on: {
                          click: function() {
                            return t.$emit('changeEditState')
                          },
                        },
                      }),
                ],
                1
              ),
            ],
            2
          )
        },
        o = [],
        d = n('7aaf'),
        m = {
          components: { BaseHeader: d['a'] },
          props: ['isEdit', 'changeEditState'],
          methods: {},
        },
        p = m,
        f = (n('25ef'), n('2877')),
        v = Object(f['a'])(p, u, o, !1, null, '6177cfb8', null),
        h = v.exports,
        b = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'MenuPanel',
            [
              n('template', { slot: 'name' }, [n('div', [t._v('地区')])]),
              n(
                'template',
                { slot: 'info' },
                [
                  t.isEdit
                    ? n('el-input', {
                        model: {
                          value: t.address,
                          callback: function(e) {
                            t.address = e
                          },
                          expression: 'address',
                        },
                      })
                    : n('p', [t._v(t._s(t.address))]),
                ],
                1
              ),
            ],
            2
          )
        },
        _ = [],
        E = n('4ac1'),
        g = { components: { MenuPanel: E['a'] }, props: ['address', 'isEdit'] },
        k = g,
        x = Object(f['a'])(k, b, _, !1, null, null, null),
        $ = x.exports,
        S = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'MenuPanel',
            [
              n('template', { slot: 'name' }, [n('div', [t._v('头像')])]),
              n('template', { slot: 'info' }, [
                t.isEdit
                  ? n('div', { staticClass: 'l-f' }, [
                      n(
                        'section',
                        { staticStyle: { 'margin-right': '40px' } },
                        [
                          n('img', {
                            ref: 'img',
                            staticClass: 'img-60',
                            attrs: { src: t.avatar, alt: '' },
                          }),
                        ]
                      ),
                      n(
                        'section',
                        [
                          n(
                            'el-upload',
                            {
                              staticClass: 'upload-demo',
                              attrs: {
                                action: '/api/upload',
                                'on-success': t.handleSuccess,
                                'list-type': 'picture',
                              },
                            },
                            [
                              n(
                                'el-button',
                                { attrs: { size: 'small', type: 'primary' } },
                                [t._v('点击上传')]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ])
                  : n('img', {
                      staticClass: 'img-60',
                      attrs: { src: t.avatar, alt: '' },
                    }),
              ]),
            ],
            2
          )
        },
        U = [],
        j = {
          components: { MenuPanel: E['a'] },
          props: ['avatar', 'isEdit'],
          methods: {
            handleSuccess: function(t) {
              ;(this.$refs.img.src = t.src),
                this.$store.dispatch('updateAvatar', t.src)
            },
          },
        },
        B = j,
        C = Object(f['a'])(B, S, U, !1, null, null, null),
        M = C.exports,
        O = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'MenuPanel',
            [
              n('template', { slot: 'name' }, [n('div', [t._v('名字')])]),
              n(
                'template',
                { slot: 'info' },
                [
                  t.isEdit
                    ? n('el-input', {
                        on: { input: t.handleInput },
                        model: {
                          value: t.val,
                          callback: function(e) {
                            t.val = e
                          },
                          expression: 'val',
                        },
                      })
                    : n('p', [t._v(t._s(t.nickname))]),
                ],
                1
              ),
            ],
            2
          )
        },
        P = [],
        w = {
          components: { MenuPanel: E['a'] },
          props: ['nickname', 'isEdit'],
          data: function() {
            return { val: this.nickname }
          },
          methods: {
            handleInput: function() {
              this.$emit('editUser', 'nickname', this.val)
            },
          },
        },
        y = w,
        A = Object(f['a'])(y, O, P, !1, null, null, null),
        H = A.exports,
        N = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'MenuPanel',
            [
              n('template', { slot: 'name' }, [n('div', [t._v('个性签名')])]),
              n(
                'template',
                { slot: 'info' },
                [
                  t.isEdit
                    ? n('el-input', {
                        model: {
                          value: t.signature,
                          callback: function(e) {
                            t.signature = e
                          },
                          expression: 'signature',
                        },
                      })
                    : n('p', [t._v(t._s(t.signature))]),
                ],
                1
              ),
            ],
            2
          )
        },
        I = [],
        J = {
          components: { MenuPanel: E['a'] },
          props: ['signature', 'isEdit'],
        },
        R = J,
        W = Object(f['a'])(R, N, I, !1, null, null, null),
        z = W.exports,
        q = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'MenuPanel',
            [
              n('template', { slot: 'name' }, [n('div', [t._v('微信号')])]),
              n(
                'template',
                { slot: 'info' },
                [
                  t.isEdit
                    ? n('el-input', {
                        model: {
                          value: t.email,
                          callback: function(e) {
                            t.email = e
                          },
                          expression: 'email',
                        },
                      })
                    : n('p', [t._v(t._s(t.email))]),
                ],
                1
              ),
            ],
            2
          )
        },
        D = [],
        F = { components: { MenuPanel: E['a'] }, props: ['email', 'isEdit'] },
        G = F,
        K = Object(f['a'])(G, q, D, !1, null, null, null),
        L = K.exports,
        Q = {
          name: 'Edit',
          data: function() {
            return { isEdit: !1 }
          },
          components: {
            MeHeader: h,
            AddressBar: $,
            AvatarBar: M,
            NameBar: H,
            SignatureBar: z,
            WechatNumberBar: L,
          },
          computed: Object(r['a'])(
            {},
            Object(l['b'])({
              user: function(t) {
                return t.user.user
              },
            })
          ),
          methods: {
            changeEditState: function() {
              this.isEdit = !this.isEdit
            },
            onSubmit: (function() {
              var t = Object(i['a'])(
                regeneratorRuntime.mark(function t() {
                  var e
                  return regeneratorRuntime.wrap(
                    function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), Object(c['c'])(this.user)
                          case 2:
                            ;(e = t.sent),
                              0 === e.code &&
                                ((this.isEdit = !1),
                                this.$store.dispatch('setUser', e.user))
                          case 4:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    this
                  )
                })
              )
              function e() {
                return t.apply(this, arguments)
              }
              return e
            })(),
            editUser: function(t, e) {
              this.user[t] = e
            },
          },
        },
        T = Q,
        V = (n('bb8e'), Object(f['a'])(T, a, s, !1, null, '4fe2f149', null))
      e['default'] = V.exports
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
        i = { name: 'BaseHeader', props: ['text'] },
        r = i,
        l = (n('a8ef'), n('2877')),
        c = Object(l['a'])(r, a, s, !1, null, '681e548d', null)
      e['a'] = c.exports
    },
    a8ef: function(t, e, n) {
      'use strict'
      var a = n('01bb'),
        s = n.n(a)
      s.a
    },
    bb8e: function(t, e, n) {
      'use strict'
      var a = n('cf5e'),
        s = n.n(a)
      s.a
    },
    cf5e: function(t, e, n) {},
    cf93: function(t, e, n) {},
    de58: function(t, e, n) {},
  },
])
//# sourceMappingURL=chunk-76d40438.9f120cf5.js.map

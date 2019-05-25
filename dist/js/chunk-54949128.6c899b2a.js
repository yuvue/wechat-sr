;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-54949128'],
  {
    '01bb': function(e, t, a) {},
    '2cfd': function(e, t, a) {
      'use strict'
      var s = a('e07e'),
        r = a.n(s)
      r.a
    },
    '73cf': function(e, t, a) {
      'use strict'
      a.r(t)
      var s = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t
          return a(
            'div',
            { attrs: { id: 'register' } },
            [
              a('BaseHeader', { attrs: { text: '注册' } }),
              a('main', { staticClass: 'main-top' }, [
                a(
                  'div',
                  { staticClass: 'form' },
                  [
                    a(
                      'el-form',
                      { attrs: { model: e.form } },
                      [
                        a(
                          'el-form-item',
                          { attrs: { label: '用户名' } },
                          [
                            a('el-input', {
                              model: {
                                value: e.form.username,
                                callback: function(t) {
                                  e.$set(e.form, 'username', t)
                                },
                                expression: 'form.username',
                              },
                            }),
                          ],
                          1
                        ),
                        a(
                          'el-form-item',
                          { attrs: { label: '邮箱' } },
                          [
                            a('el-input', {
                              model: {
                                value: e.form.username,
                                callback: function(t) {
                                  e.$set(e.form, 'username', t)
                                },
                                expression: 'form.username',
                              },
                            }),
                          ],
                          1
                        ),
                        a(
                          'el-form-item',
                          { attrs: { label: '验证码' } },
                          [
                            a('el-input', {
                              model: {
                                value: e.form.username,
                                callback: function(t) {
                                  e.$set(e.form, 'username', t)
                                },
                                expression: 'form.username',
                              },
                            }),
                          ],
                          1
                        ),
                        a(
                          'el-form-item',
                          { attrs: { label: '设置密码' } },
                          [
                            a('el-input', {
                              attrs: { 'show-password': '' },
                              model: {
                                value: e.form.password,
                                callback: function(t) {
                                  e.$set(e.form, 'password', t)
                                },
                                expression: 'form.password',
                              },
                            }),
                          ],
                          1
                        ),
                        a(
                          'el-form-item',
                          { attrs: { label: '确认密码' } },
                          [
                            a('el-input', {
                              attrs: { 'show-password': '' },
                              model: {
                                value: e.form.password,
                                callback: function(t) {
                                  e.$set(e.form, 'password', t)
                                },
                                expression: 'form.password',
                              },
                            }),
                          ],
                          1
                        ),
                        a(
                          'el-form-item',
                          [
                            a(
                              'el-button',
                              {
                                staticClass: 'btn-center',
                                attrs: { type: 'primary' },
                                on: { click: e.register },
                              },
                              [e._v('注册')]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          )
        },
        r = [],
        n = a('7aaf'),
        o = {
          name: 'index',
          metaInfo: {
            title: 'register',
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
          components: { BaseHeader: n['a'] },
          data: function() {
            return { form: { username: '', password: '' } }
          },
        },
        l = o,
        i = (a('2cfd'), a('2877')),
        m = Object(i['a'])(l, s, r, !1, null, null, null)
      t['default'] = m.exports
    },
    '7aaf': function(e, t, a) {
      'use strict'
      var s = function() {
          var e = this,
            t = e.$createElement,
            a = e._self._c || t
          return a('div', { staticClass: 'header' }, [
            a('p', { staticClass: 'left' }, [e._t('left')], 2),
            a('p', [e._v(e._s(e.text))]),
            a('p', { staticClass: 'right' }, [e._t('right')], 2),
          ])
        },
        r = [],
        n = { name: 'BaseHeader', props: ['text'] },
        o = n,
        l = (a('a8ef'), a('2877')),
        i = Object(l['a'])(o, s, r, !1, null, '681e548d', null)
      t['a'] = i.exports
    },
    a8ef: function(e, t, a) {
      'use strict'
      var s = a('01bb'),
        r = a.n(s)
      r.a
    },
    e07e: function(e, t, a) {},
  },
])
//# sourceMappingURL=chunk-54949128.6c899b2a.js.map

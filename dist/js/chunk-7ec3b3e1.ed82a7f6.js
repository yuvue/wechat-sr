;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-7ec3b3e1'],
  {
    '01bb': function(t, a, e) {},
    '7aaf': function(t, a, e) {
      'use strict'
      var n = function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e('div', { staticClass: 'header' }, [
            e('p', { staticClass: 'left' }, [t._t('left')], 2),
            e('p', [t._v(t._s(t.text))]),
            e('p', { staticClass: 'right' }, [t._t('right')], 2),
          ])
        },
        s = [],
        c = { name: 'BaseHeader', props: ['text'] },
        r = c,
        i = (e('a8ef'), e('2877')),
        o = Object(i['a'])(r, n, s, !1, null, '681e548d', null)
      a['a'] = o.exports
    },
    a8ef: function(t, a, e) {
      'use strict'
      var n = e('01bb'),
        s = e.n(n)
      s.a
    },
    c4ec: function(t, a, e) {
      'use strict'
      e.r(a)
      var n = function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a
          return e(
            'div',
            [
              e(
                'BaseHeader',
                { attrs: { text: '我的群聊' } },
                [
                  e('template', { slot: 'left' }, [
                    e('i', {
                      staticClass: 'el-icon-arrow-left',
                      on: {
                        click: function(a) {
                          return t.$router.back()
                        },
                      },
                    }),
                  ]),
                  e('template', { slot: 'right' }, [
                    e('i', {
                      staticClass: 'icon icon-tianjiaduoyonghu',
                      on: {
                        click: function(a) {
                          return t.$router.push('/group/add')
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
                t._l(t.$store.getters.groups, function(a) {
                  return e('ContactItem', {
                    attrs: { name: a.remark, avatar: a.avatar },
                    on: {
                      itemClick: function(e) {
                        return t.click(a)
                      },
                    },
                  })
                }),
                1
              ),
            ],
            1
          )
        },
        s = [],
        c = e('7aaf'),
        r = e('e385'),
        i = {
          name: 'chat',
          components: { BaseHeader: c['a'], ContactItem: r['a'] },
          methods: {
            click: function(t) {
              this.$router.push('/chat/'.concat(t.remark)),
                this.$store.commit('SET_CUR_CONTACT', t)
            },
          },
        },
        o = i,
        l = e('2877'),
        u = Object(l['a'])(o, n, s, !1, null, null, null)
      a['default'] = u.exports
    },
    e385: function(t, a, e) {
      'use strict'
      var n = function() {
          var t = this,
            a = this,
            e = a.$createElement,
            n = a._self._c || e
          return n(
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
              n('section', [
                n('img', {
                  staticClass: 'avatar',
                  attrs: { src: a.avatar, alt: '#' },
                }),
                n('p', { staticClass: 'name' }, [a._v(a._s(a.name))]),
              ]),
              n('section', [a._t('right')], 2),
            ]
          )
        },
        s = [],
        c = { name: 'ContactItem', props: ['avatar', 'name'] },
        r = c,
        i = (e('fbb8'), e('2877')),
        o = Object(i['a'])(r, n, s, !1, null, '45c141d0', null)
      a['a'] = o.exports
    },
    ef20: function(t, a, e) {},
    fbb8: function(t, a, e) {
      'use strict'
      var n = e('ef20'),
        s = e.n(n)
      s.a
    },
  },
])
//# sourceMappingURL=chunk-7ec3b3e1.ed82a7f6.js.map

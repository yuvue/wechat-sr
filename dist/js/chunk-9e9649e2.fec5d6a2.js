;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-9e9649e2'],
  {
    '3b65': function(t, a, e) {
      'use strict'
      var n = e('9688'),
        s = e.n(n)
      s.a
    },
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
        i = (e('3b65'), e('2877')),
        o = Object(i['a'])(r, n, s, !1, null, '0d31b276', null)
      a['a'] = o.exports
    },
    9688: function(t, a, e) {},
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
//# sourceMappingURL=chunk-9e9649e2.fec5d6a2.js.map

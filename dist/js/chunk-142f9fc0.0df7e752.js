;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-142f9fc0'],
  {
    '01bb': function(t, e, n) {},
    '57f0': function(t, e, n) {
      'use strict'
      var a = n('7b5d'),
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
        i = { name: 'BaseHeader', props: ['text'] },
        c = i,
        r = (n('a8ef'), n('2877')),
        o = Object(r['a'])(c, a, s, !1, null, '681e548d', null)
      e['a'] = o.exports
    },
    '7b5d': function(t, e, n) {},
    a8ef: function(t, e, n) {
      'use strict'
      var a = n('01bb'),
        s = n.n(a)
      s.a
    },
    e385: function(t, e, n) {
      'use strict'
      var a = function() {
          var t = this,
            e = this,
            n = e.$createElement,
            a = e._self._c || n
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
                  attrs: { src: e.avatar, alt: '#' },
                }),
                a('p', { staticClass: 'name' }, [e._v(e._s(e.name))]),
              ]),
              a('section', [e._t('right')], 2),
            ]
          )
        },
        s = [],
        i = { name: 'ContactItem', props: ['avatar', 'name'] },
        c = i,
        r = (n('fbb8'), n('2877')),
        o = Object(r['a'])(c, a, s, !1, null, '45c141d0', null)
      e['a'] = o.exports
    },
    ef20: function(t, e, n) {},
    f135: function(t, e, n) {
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
                { attrs: { text: '发起群聊' } },
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
                  n(
                    'template',
                    { slot: 'right' },
                    [
                      n(
                        'el-button',
                        {
                          attrs: { type: 'primary', size: 'small' },
                          on: { click: t.submit },
                        },
                        [t._v('确定')]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
              n(
                'main',
                { staticClass: 'main-top main-bottom' },
                [n('ContactCardSelectSort', { ref: 'card' })],
                1
              ),
            ],
            1
          )
        },
        s = [],
        i = (n('96cf'), n('3b8d')),
        c = n('7aaf'),
        r = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            t._l(Object.keys(t.contacts), function(e) {
              return n(
                'div',
                [
                  n('div', { staticClass: 'letter' }, [t._v(t._s(e))]),
                  t._l(t.contacts[e], function(e) {
                    return n(
                      'div',
                      [
                        n(
                          'ContactItem',
                          {
                            attrs: { avatar: e.avatar, name: e.remark },
                            on: {
                              itemClick: function(n) {
                                return t.itemClick(e.contact_id)
                              },
                            },
                          },
                          [
                            n('template', { slot: 'right' }, [
                              n('div', {
                                staticClass: 'circle',
                                class:
                                  t.idList.includes(e.contact_id) &&
                                  'circle__selected',
                              }),
                            ]),
                          ],
                          2
                        ),
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
        o = [],
        l = (n('6762'), n('2fdb'), n('2f62'), n('e385')),
        u = {
          components: { ContactItem: l['a'] },
          data: function() {
            return { idList: [], a: '' }
          },
          computed: {
            contacts: function() {
              return this.$store.getters['contacts']
            },
          },
          methods: {
            itemClick: function(t) {
              var e = this.idList
              e.includes(t) ? e.splice(e.indexOf(t), 1) : this.idList.push(t)
            },
          },
        },
        f = u,
        d = (n('57f0'), n('2877')),
        m = Object(d['a'])(f, r, o, !1, null, null, null),
        p = m.exports,
        v = n('b775')
      function b(t) {
        return Object(v['a'])('put', '/group', t)
      }
      var h = {
          name: 'groupAdd',
          components: { BaseHeader: c['a'], ContactCardSelectSort: p },
          methods: {
            submit: (function() {
              var t = Object(i['a'])(
                regeneratorRuntime.mark(function t() {
                  var e
                  return regeneratorRuntime.wrap(
                    function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e = this.$refs.card.idList),
                              (t.next = 3),
                              b({ idList: e })
                            )
                          case 3:
                            t.sent
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
          },
        },
        _ = h,
        C = Object(d['a'])(_, a, s, !1, null, null, null)
      e['default'] = C.exports
    },
    fbb8: function(t, e, n) {
      'use strict'
      var a = n('ef20'),
        s = n.n(a)
      s.a
    },
  },
])
//# sourceMappingURL=chunk-142f9fc0.0df7e752.js.map

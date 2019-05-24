;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-5ff53d17'],
  {
    '36c8': function(e, n, t) {},
    '75f3': function(e, n, t) {
      'use strict'
      var a = t('36c8'),
        s = t.n(a)
      s.a
    },
    d8c0: function(e, n, t) {
      'use strict'
      t.r(n)
      var a = function() {
          var e = this,
            n = e.$createElement,
            t = e._self._c || n
          return t(
            'div',
            { staticClass: 'detail-wrapper' },
            [
              t(
                'v-layout',
                { attrs: { row: '', wrap: '' } },
                [
                  t('v-flex', { attrs: { xs10: '', 'offset-xs1': '' } }, [
                    t(
                      'article',
                      { staticClass: 'detail-content text-xs-center' },
                      [
                        t(
                          'header',
                          { staticClass: 'detail-title text-xs-center' },
                          [
                            e._v(
                              '\n          Detail ' +
                                e._s(e.$route.params.id) +
                                '\n        '
                            ),
                          ]
                        ),
                        t(
                          'router-link',
                          {
                            attrs: {
                              to: {
                                name: 'detailId',
                                params: { id: Number(e.$route.params.id) + 1 },
                              },
                            },
                          },
                          [
                            e._v(
                              '\n          Detail ' +
                                e._s(Number(e.$route.params.id) + 1) +
                                '\n        '
                            ),
                          ]
                        ),
                        t('p', [
                          e._v(
                            '\n          Progressive Web Apps are user experiences that have the reach of the\n          web, and are: Reliable - Load instantly and never show the\n          downasaur, even in uncertain network conditions. Fast - Respond\n          quickly to user interactions with silky smooth animations and no\n          janky scrolling.\n        '
                          ),
                        ]),
                        t('p', [
                          e._v(
                            '\n          Progressive Web Apps are user experiences that have the reach of the\n          web, and are: Reliable - Load instantly and never show the\n          downasaur, even in uncertain network conditions. Fast - Respond\n          quickly to user interactions with silky smooth animations and no\n          janky scrolling.\n        '
                          ),
                        ]),
                        t('p', [
                          e._v(
                            '\n          Progressive Web Apps are user experiences that have the reach of the\n          web, and are: Reliable - Load instantly and never show the\n          downasaur, even in uncertain network conditions. Fast - Respond\n          quickly to user interactions with silky smooth animations and no\n          janky scrolling.\n        '
                          ),
                        ]),
                        t('p', [
                          e._v(
                            '\n          Progressive Web Apps are user experiences that have the reach of the\n          web, and are: Reliable - Load instantly and never show the\n          downasaur, even in uncertain network conditions. Fast - Respond\n          quickly to user interactions with silky smooth animations and no\n          janky scrolling.\n        '
                          ),
                        ]),
                        t('p', [
                          e._v(
                            '\n          Progressive Web Apps are user experiences that have the reach of the\n          web, and are: Reliable - Load instantly and never show the\n          downasaur, even in uncertain network conditions. Fast - Respond\n          quickly to user interactions with silky smooth animations and no\n          janky scrolling.\n        '
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        },
        s = [],
        r = (t('96cf'), t('3b8d')),
        i = {
          appHeaderState: {
            show: !0,
            title: 'Lavas',
            showMenu: !1,
            showBack: !0,
            showLogo: !1,
            actions: [{ icon: 'home', route: { name: 'index' } }],
          },
        }
      function o(e) {
        e.dispatch('appShell/appHeader/setAppHeader', i.appHeaderState)
      }
      var c = {
          name: 'detailId',
          metaInfo: function() {
            return {
              title: 'Detail '.concat(this.$route.params.id),
              titleTemplate: '%s - Lavas',
              meta: [
                { name: 'keywords', content: 'lavas PWA' },
                {
                  name: 'description',
                  content:
                    '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题',
                },
              ],
            }
          },
          asyncData: (function() {
            var e = Object(r['a'])(
              regeneratorRuntime.mark(function e(n) {
                var t
                return regeneratorRuntime.wrap(function(e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = n.store),
                          n.route,
                          o(t),
                          (e.next = 4),
                          new Promise(function(e, n) {
                            setTimeout(e, 500)
                          })
                        )
                      case 4:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            function n(n) {
              return e.apply(this, arguments)
            }
            return n
          })(),
          activated: function() {
            o(this.$store)
          },
        },
        l = c,
        d = (t('75f3'), t('2877')),
        u = Object(d['a'])(l, a, s, !1, null, '1112a4d2', null)
      n['default'] = u.exports
    },
  },
])
//# sourceMappingURL=chunk-5ff53d17.b3df9184.js.map

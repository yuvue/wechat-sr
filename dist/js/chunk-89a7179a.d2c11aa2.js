;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-89a7179a'],
  {
    '20f6': function(t, e, n) {},
    '3f9e': function(t, e, n) {
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
                { attrs: { text: '记录中' } },
                [
                  n(
                    'template',
                    { slot: 'left' },
                    [
                      n(
                        'el-button',
                        {
                          attrs: { size: 'small' },
                          on: {
                            click: function(e) {
                              return t.$router.back()
                            },
                          },
                        },
                        [t._v('取消')]
                      ),
                    ],
                    1
                  ),
                  n(
                    'template',
                    { slot: 'right' },
                    [
                      n(
                        'el-button',
                        {
                          attrs: { size: 'small', type: 'primary' },
                          on: { click: t.submit },
                        },
                        [t._v('发布')]
                      ),
                    ],
                    1
                  ),
                ],
                2
              ),
              n('main', { staticClass: 'main-top main-bottom' }, [
                n(
                  'section',
                  [
                    n('el-input', {
                      attrs: {
                        type: 'textarea',
                        rows: 5,
                        placeholder: '记录这一刻，晒给最懂你的人...',
                      },
                      model: {
                        value: t.textarea,
                        callback: function(e) {
                          t.textarea = e
                        },
                        expression: 'textarea',
                      },
                    }),
                  ],
                  1
                ),
                n(
                  'section',
                  [
                    t._l(t.tags, function(e) {
                      return n(
                        'el-tag',
                        {
                          key: e,
                          attrs: { closable: '', 'disable-transitions': !1 },
                          on: {
                            close: function(n) {
                              return t.handleClose(e)
                            },
                          },
                        },
                        [t._v('\n        ' + t._s(e) + '\n      ')]
                      )
                    }),
                    t.inputVisible
                      ? n('el-input', {
                          ref: 'saveTagInput',
                          staticClass: 'input-new-tag',
                          attrs: { size: 'small' },
                          on: { blur: t.handleInputConfirm },
                          nativeOn: {
                            keyup: function(e) {
                              return !e.type.indexOf('key') &&
                                t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                                ? null
                                : t.handleInputConfirm(e)
                            },
                          },
                          model: {
                            value: t.inputValue,
                            callback: function(e) {
                              t.inputValue = e
                            },
                            expression: 'inputValue',
                          },
                        })
                      : n(
                          'el-button',
                          {
                            staticClass: 'button-new-tag',
                            attrs: { size: 'small' },
                            on: { click: t.showInput },
                          },
                          [t._v('添加标签')]
                        ),
                  ],
                  2
                ),
                n('section', [n('Upload', { ref: 'upload' })], 1),
                n('section', [n('Recorder', { ref: 'recorder' })], 1),
                n(
                  'section',
                  [
                    n(
                      'el-radio-group',
                      {
                        model: {
                          value: t.config,
                          callback: function(e) {
                            t.config = e
                          },
                          expression: 'config',
                        },
                      },
                      [
                        n('el-radio-button', {
                          attrs: { label: '仅自己可见' },
                        }),
                        n('el-radio-button', { attrs: { label: '广场可见' } }),
                        n('el-radio-button', { attrs: { label: '好友可见' } }),
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
        a = [],
        s = (n('96cf'), n('3b8d')),
        r = n('7aaf'),
        o = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n(
            'div',
            { staticClass: 'recorder' },
            [
              t.isRecording
                ? n(
                    'el-button',
                    { attrs: { size: 'small' }, on: { click: t.stopRecord } },
                    [t._v('结束录音')]
                  )
                : n(
                    'el-button',
                    { attrs: { size: 'small' }, on: { click: t.startRecord } },
                    [t._v('点击录音')]
                  ),
              n('div', { staticClass: 'range' }, [
                n('div', { staticClass: 'second y-ctr x-ctr' }, [
                  t._v(t._s(t.seconds + ' s')),
                ]),
                n('div', { ref: 'range', staticClass: 'range__move' }),
              ]),
            ],
            1
          )
        },
        l = [],
        c = n('ae4c'),
        u = n.n(c),
        d = null,
        p = {
          name: 'Recorder',
          data: function() {
            return { isRecording: !1, seconds: 0, audio: null }
          },
          methods: {
            canvas: function() {
              var t = document.getElementById('canvas'),
                e = t.getContext('2d')
              ;(e.fillStyle = 'rgb(200,0,0)'), e.fillRect(10, 10, 55, 50)
            },
            startRecord: function() {
              var t = this
              ;(d = new u.a()),
                d.initWithRecord().then(function() {
                  d.startRecord(),
                    (t.isRecording = !0),
                    d.finishRecord().then(function() {
                      t.audio = d.getBlob()
                    }),
                    (t.interval = setInterval(function() {
                      t.seconds += 1
                      var e = t.$refs.range
                      ;(e.style.width = t.seconds + 'px'),
                        t.seconds > 120 &&
                          (t.stopRecord(), clearInterval(t.interval))
                    }, 1e3))
                })
            },
            stopRecord: function() {
              ;(this.isRecording = !1),
                d.finishRecord(),
                (d = null),
                clearInterval(this.interval)
            },
          },
        },
        f = p,
        h = (n('b786'), n('2877')),
        m = Object(h['a'])(f, o, l, !1, null, '88ed1394', null),
        v = m.exports,
        g = function() {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e
          return n('div', { staticClass: 'input-file' }, [
            n(
              'section',
              [
                n('el-button', { attrs: { size: 'small' } }, [
                  t._v('上传图片'),
                ]),
                n('span', [t._v('最多不超过9张')]),
                n('input', {
                  ref: 'pictures',
                  staticClass: 'input-file-real',
                  attrs: { type: 'file', multiple: '' },
                  on: { input: t.inputImage },
                }),
              ],
              1
            ),
            n(
              'section',
              { staticClass: 'show-image' },
              t._l(t.srcList, function(t, e) {
                return n('div', { key: e }, [n('img', { attrs: { src: t } })])
              }),
              0
            ),
          ])
        },
        b = [],
        _ = {
          name: 'Upload',
          data: function() {
            return { pictureList: [], srcList: [] }
          },
          methods: {
            inputImage: function() {
              var t = this.$refs.pictures.files
              this.pictureList = t
              for (
                var e = [],
                  n = function(n) {
                    var i = new FileReader()
                    ;(i.onload = function() {
                      var t = i.result
                      e.push(t)
                    }),
                      i.readAsDataURL(t[n])
                  },
                  i = 0;
                i < t.length;
                i++
              )
                n(i)
              this.srcList = e
            },
          },
        },
        x = _,
        k = (n('f353'), Object(h['a'])(x, g, b, !1, null, '762e2ebc', null)),
        R = k.exports,
        w = n('4a85'),
        y = { 仅自己可见: -1, 好友可见: 1, 广场可见: 2 },
        C = {
          name: 'addMoment',
          components: { BaseHeader: r['a'], Recorder: v, Upload: R },
          data: function() {
            return {
              textarea: '',
              tags: [],
              inputVisible: !1,
              inputValue: '',
              dialogImageUrl: '',
              dialogVisible: !1,
              config: '广场可见',
            }
          },
          methods: {
            handleClose: function(t) {
              this.tags.splice(this.tags.indexOf(t), 1)
            },
            showInput: function() {
              var t = this
              ;(this.inputVisible = !0),
                this.$nextTick(function(e) {
                  t.$refs.saveTagInput.$refs.input.focus()
                })
            },
            handleInputConfirm: function() {
              var t = this.inputValue
              t && this.tags.push(t),
                (this.inputVisible = !1),
                (this.inputValue = '')
            },
            remove: function(t, e) {},
            preview: function(t) {
              ;(this.dialogImageUrl = t.url), (this.dialogVisible = !0)
            },
            beforeUpload: function(t) {
              var e = 'image/jpeg' === t.type,
                n = t.size / 1024 / 1024 < 2
              return (
                e || this.$message.error('上传头像图片只能是 JPG 格式!'),
                n || this.$message.error('上传头像图片大小不能超过 2MB!'),
                e && n
              )
            },
            submit: (function() {
              var t = Object(s['a'])(
                regeneratorRuntime.mark(function t() {
                  var e, n, i, a, s, r, o, l, c, u
                  return regeneratorRuntime.wrap(
                    function(t) {
                      while (1)
                        switch ((t.prev = t.next)) {
                          case 0:
                            for (
                              e = this.textarea,
                                n = this.tags,
                                i = this.$refs.recorder,
                                a = i.audio,
                                s = i.seconds,
                                r = this.$refs.upload.pictureList,
                                o = y[this.config],
                                l = new FormData(),
                                c = 0;
                              c < r.length;
                              c++
                            )
                              l.append('i'.concat(c), r[c])
                            return (
                              l.append('text', e),
                              l.append('tags', n),
                              l.append('audio', a),
                              l.append('seconds', s),
                              l.append('config', o),
                              (t.next = 14),
                              Object(w['a'])(l)
                            )
                          case 14:
                            ;(u = t.sent),
                              u &&
                                u.data &&
                                this.$store.commit('ADD_LIST', u.data)
                          case 16:
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
        I = C,
        $ = (n('6661'), Object(h['a'])(I, i, a, !1, null, null, null))
      e['default'] = $.exports
    },
    4812: function(t, e, n) {},
    6661: function(t, e, n) {
      'use strict'
      var i = n('4812'),
        a = n.n(i)
      a.a
    },
    b786: function(t, e, n) {
      'use strict'
      var i = n('c118'),
        a = n.n(i)
      a.a
    },
    c118: function(t, e, n) {},
    f353: function(t, e, n) {
      'use strict'
      var i = n('20f6'),
        a = n.n(i)
      a.a
    },
  },
])
//# sourceMappingURL=chunk-89a7179a.d2c11aa2.js.map

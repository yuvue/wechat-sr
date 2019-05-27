const qs = require('querystring')
const URL = require('url')
const Redis = require('koa-redis')
const Store = new Redis().client

/**
 * 从cookie获取user_id
 *
 * @param {String} cookie cookie
 */
async function getIdFromCookie(cookie) {
  let tmp = /wechat=(.*?);/.exec(cookie)
  if (!tmp) return undefined
  return JSON.parse(await Store.get(`wechat:uid${tmp[1]}`)).passport.user
}

/**
 * 编辑对象key
 *
 * @param {Object} object 要编辑的对象
 * @param {Array} keys 要删除的键
 * @param {obj} keys 要新增的键值对
 */
function editObject(object, keys, obj) {
  keys.forEach(k => delete object[k])
  if (obj) obj = { ...object, ...obj }
  return object
}

/**
 * 获取get请求url中的查询段并转为对象
 *
 * @param {String} url 要编辑的url
 */
function getQuery(url) {
  let query = URL.parse(url).query
  if (!query) return undefined
  else return qs.parse(query)
}

/**
 * 包装数据成promise，并拒绝，再返回
 *
 * @param {Object} data 要包装的数据
 */
function reject(data) {
  return new Promise((resolve, reject) => reject(data))
}

/**
 * 包装数据成promise，并成功，再返回
 *
 * @param {Object} data 要包装的数据
 */
function resolve(data) {
  return new Promise(resolve => resolve(data))
}

/**
 * 从文件完整绝对路径获取相对当前项目的绝对路径
 *
 * @param {String} src 返回路径开始的字符
 * @param {String} srcPath 要处理的路径
 */
function getPath(src, srcPath) {
  return srcPath.slice(srcPath.indexOf(src))
}

module.exports = {
  editObject,
  getQuery,
  reject,
  resolve,
  getIdFromCookie,
  getPath,
}

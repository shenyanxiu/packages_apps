const TIMEOUT = 10e3
const fetch = require('@system.fetch')
/**
 * QappRequest
 * @param {*} url 
 * @param {*} data 
 * @param {*} config 
 * @returns 
 */
const QappRequest = (url, data, config) => {
  let start = Date.now();
  const { method = 'GET', headers = {} } = config

  return new Promise((resolve, reject) => {
    if (!data) {
      data = {}
    }
    console.log("### 🚀 album ### fetch start:", url, data);
    fetch.fetch({
      url,
      method,
      data,
      header: headers,
      responseType: 'json',
      success: (res) => {
        console.log('🚀request success time:', res.code, Date.now() - start + 'ms');
        if (res) {
          return resolve(res)
        } else {
          console.log('### 🚀 album ### fetch res no res');
          return reject({
            data: 'no res'
          })
        }
      },
      fail: (data, code) => {
        console.log('🚀request fail time:', data, code, Date.now() - start + 'ms');
        if (code === 401) {
          return resolve({
            data,
            code
          })
        }
        return reject({
          data,
          code
        })
      }
    })
  })

}

export default {
  /**
   * get
   * @param {*} url 
   * @param {*} params 
   * @param {*} config 
   * @returns 
   */
  get: function (url, params, config = {}) {
    return QappRequest(url, params, {
      method: 'GET',
      ...config
    })
  },
  /**
   * post
   * @param {*} url 
   * @param {*} params 
   * @param {*} config 
   * @returns 
   */
  post: function (url, params, config = {}) {
    return QappRequest(url, params, {
      method: 'POST',
      ...config
    })
  }
}
/**
 * turnObjAsQueryString
 * @param {Object} obj
 * @returns string
 */
function turnObjAsQueryString(obj) {
  return Object.keys(obj).map(k => {
    return k + '=' + obj[k]
  }).join('&')
}


/**
 * url
 * @param {*} path 
 * @param {*} params 
 * @returns 
 */
export function url(path, params) {
  const str = path + '?' + turnObjAsQueryString({
    ...params
  })
  return str.toString()
}

/**
 * debounce
 * @param {*} func 
 * @param {*} delay 
 * @returns 
 */
export function debounce(func, delay) {
  let timer
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

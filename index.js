const KY = require('ky-universal')

module.exports = class WebApi {
  constructor(defaults, ky = KY) {
    this._defaults = {
      hooks: {},
      ...defaults
    }

    this._ky = ky
  }

  setHeader(name, value) {
    if (!value) {
      delete this._defaults.headers[name];
    } else {
      this._defaults.headers[name] = value
    }
  }

  setToken(token, type) {
    const value = !token ? null : (type ? type + ' ' : '') + token
    this.setHeader('authorization', value)
  }

  _hook(name, fn) {
    if (!this._defaults.hooks[name]) {
      this._defaults.hooks[name] = []
    }
    this._defaults.hooks[name].push(fn)
  }

  onRequest(fn) {
    this._hook('beforeRequest', fn)
  }

  onRetry(fn) {
    this._hook('beforeRetry', fn)
  }

  onResponse(fn) {
    this._hook('afterResponse', fn)
  }

  onError(fn) {
    this._hook('onError', fn)
  }

  _fetch(url, options) {

  }

  call(apiName, params, options) {

  }

  
}
/*
for (let method of ['get', 'head', 'delete', 'post', 'put', 'patch']) {
  const hasBody = ['post', 'put', 'patch'].includes(method)

  WebApi.prototype[method] = async function (url, arg1, arg2) {
    let options

    if (!hasBody) {
      options = arg1
    } else {
      options = arg2 || {}
      if (arg1 !== undefined) {
        if (arg1.constructor === Object || Array.isArray(arg1)) {
          options.json = arg1
        } else {
          options.body = arg1
        }
      }
    }

    const _options = { ...this._defaults, ...options }

    if (/^https?/.test(url)) {
      delete _options.prefixUrl
    }

    try {
      const response = await this._ky[method](url, _options)
      return response
    } catch (error) {
      // Call onError hook
      if (_options.hooks.onError) {
        _options.hooks.onError.forEach(fn => fn(error))
      }
      // Throw error
      throw error
    }
  }

  WebApi.prototype['$' + method] = function (url, arg1, arg2) {
    return this[method](url, arg1, arg2).then(res => res.json())
  }
}
*/
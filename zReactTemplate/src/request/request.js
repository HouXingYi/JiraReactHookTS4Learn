import axios from 'axios'

import { formatGetParams } from './utils'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

// 处理请求错误
const handleErr = (e) => {
  let content = '网络波动大，请稍后再试'
  let msg = e
  if (e.status === 200) {
    if (e.errMsg && e.errMsg === 'downloadFile:ok') {
      return Promise.resolve(e)
    }
    if (e.data) {
      // if (e.data.err_code === 0 || e.data.err_code === 1 ) { // 将err_code === 1 也视为错误，一般该错误是内部错误
      if (e.data.err_code === 0) {
        return Promise.resolve(e.data)
      } else if (e.data.err_code === 10020) {
        return Promise.reject(e.data.err_code)
      } else if (e.data.err_code === 10220) { // 10220 商品不存在
      }
      // content = baseConfig.ERR_CODE[e.data.err_code]
      content = e.data.err_desc
      msg = e.data
    }
  } else if (e.status === 500) {
    content = '哎呦~小爱连不上网络啦！'
  }
  console.log('content', content)
  return Promise.reject(msg)
}

// 创建axios实例
const service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 15000, // 请求超时时间
  cancelToken: source.token,
  headers: {
    loading: true // 默认有loading
  }
})

// request拦截器
service.interceptors.request.use(config => {
  if (config.headers.loading) {
    // uni.showLoading({mask: false})
  }
  // config.headers.token = window.localStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
  config.headers.site = 'ml'
  config.headers.os = 'wx'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.config.headers.loading) {
      // uni.hideLoading()
    }
    return handleErr(response)
  },
  error => {
    // return Promise.reject(error)
    console.log('error', error)
    if (error.config.headers.loading) {
      // uni.hideLoading()
    }

    return handleErr(error)
  }
)

service.source = source

var http = {
  // get请求封装
  get (url, options, headers = {}) {
    var options2 = options.params
    var params = formatGetParams(options2)
    return service({
      url: url + params,
      method: 'get',
      data: options2,
      headers
    })
  },
  // post请求封装
  post (url, options, headers = {}) {
    // var params = formatGetParams(options)
    return service({
      url,
      // url: url + params,
      method: 'post',
      data: options,
      headers
    })
  }
}

export default http

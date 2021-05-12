import http from './request.js'

/** 首页部分  **/
// 获取首页轮播图  system/wx/advert?aid=1
export function getBannerData (options) {
  return http.get('/system/wx/advert', { params: options })
}
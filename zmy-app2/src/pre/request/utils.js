// 转换时间为10分50秒
const getDuration = (value) => {
  var theTime = parseInt(value) // 需要转换的时间秒
  var theTime1 = 0 // 分
  var theTime2 = 0 // 小时
  var theTime3 = 0 // 天
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60)
    theTime = parseInt(theTime % 60)
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60)
      theTime1 = parseInt(theTime1 % 60)
      if (theTime2 > 24) {
        // 大于24小时
        theTime3 = parseInt(theTime2 / 24)
        theTime2 = parseInt(theTime2 % 24)
      }
    }
  }
  var result = ''
  if (theTime > 0) {
    result = '' + parseInt(theTime) + '秒'
  }
  if (theTime1 > 0) {
    result = '' + parseInt(theTime1) + '分' + result
  }
  if (theTime2 > 0) {
    result = '' + parseInt(theTime2) + '小时' + result
  }
  if (theTime3 > 0) {
    result = '' + parseInt(theTime3) + '天' + result
  }
  if (result === '') {
    return 0 + '秒'
  }
  return result
}

// 事件格式化 y年M月d日 H时m分s秒
const timestampToTime = (timestamp, fmt = 'yyyy-MM-dd HH:mm:ss', y = true) => {
  let date
  if (!timestamp) return
  if (timestamp.toString().length === 10) {
    date = new Date(parseInt(timestamp * 1000))
  } else if (timestamp.toString().length === 13) {
    date = new Date(parseInt(timestamp))
  } else {
    console.log('时间戳数据有误')
    if (y) {
      return
    }
  }

  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  var week = {
    0: '\u65e5',
    1: '\u4e00',
    2: '\u4e8c',
    3: '\u4e09',
    4: '\u56db',
    5: '\u4e94',
    6: '\u516d'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(D+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') +
			week[date.getDay() + ''])
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

// 多少时间前
const getTimeAgo = (nTime, tTime) => {
  // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  const minute = 1000 * 60 // 把分，时，天，周，半个月，一个月用毫秒表示
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  // const halfamonth = day * 15
  const month = day * 30
  let result = ''
  var diffValue = tTime - nTime // 时间差

  if (diffValue < 0) {
    return
  }
  const minC = diffValue / minute // 计算时间差的分，时，天，周，月
  const hourC = diffValue / hour
  const dayC = diffValue / day
  const weekC = diffValue / week
  const monthC = diffValue / month
  if (monthC >= 1 && monthC <= 3) {
    result = ' ' + parseInt(monthC) + '月前'
  } else if (weekC >= 1 && weekC <= 3) {
    result = ' ' + parseInt(weekC) + '周前'
  } else if (dayC >= 1 && dayC <= 6) {
    result = ' ' + parseInt(dayC) + '天前'
  } else if (hourC >= 1 && hourC <= 23) {
    result = ' ' + parseInt(hourC) + '小时前'
  } else if (minC >= 1 && minC <= 59) {
    result = ' ' + parseInt(minC) + '分钟前'
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = '刚刚'
  } else {
    var datetime = new Date()
    datetime.setTime(nTime)
    const Nyear = datetime.getFullYear()
    const Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1
    const Ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()
    // const Nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()
    // const Nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes()
    // const Nsecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds()
    result = Nyear + '-' + Nmonth + '-' + Ndate
  }
  return result
}

const formatGetParams = (options) => {
  const sArr = []
  for (var key in options) {
    sArr.push(key + '=' + options[key])
  }
  return '?' + sArr.join('&')
}

// PC端判断
const IsPC = () => {
  var userAgentInfo = navigator.userAgent
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod', 'MiuiBrowser']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

// 微信浏览器判断
const isWeixn = () => {
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}

// 判断是不是视频
const isVideo = (url) => {
  if (!url) return false
  var index = url.lastIndexOf('.')
  url = url.substring(index)
  if (url !== '.mp4' && url !== '.rmvb' && url !== '.avi' && url !== '.ts') {
    return false
  }
  return true
}

// 随机字符串
const randomString = () => {
  var s = []
  var hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'

  var uuid = s.join('')
  return uuid
}
// 校验手机号
const checkPhone = (phone) => {
  if (/^1[3456789]\d{9}$/.test(phone)) {
    return true
  }
  return false
}
// 校验密码
const checkPassword = (psw) => {
  if (/^[0-9a-zA-Z]{6,16}$/.test(psw)) {
    return true
  }
  return false
}
// 校验昵称
const checkNickname = (nickname) => {
  if (/^[0-9a-zA-Z\u4e00-\u9fa5_]{2,16}$/.test(nickname)) {
    return true
  }
  return false
}

// 校验邮箱
const checkEmail = (email) => {
  if (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)) {
    return true
  }
  return false
}

// 校验身份证
const checkIDCard = (IDCard) => {
  if (/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(IDCard)) {
    return true
  }
  return false
}

export {
  getDuration,
  timestampToTime,
  IsPC,
  isWeixn,
  isVideo,
  randomString,
  checkPhone,
  checkPassword,
  checkNickname,
  getTimeAgo,
  checkEmail,
  checkIDCard,
  formatGetParams
}

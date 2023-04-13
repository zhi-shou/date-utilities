//获取指定日期向前指定天数的日期，默认取昨天
function getPreviousNDays(params) {
  var {dateStr=new Date(), nDays =1, format="yyyy-MM-dd"} = params || {};
  var date = new Date(dateStr);
  date.setDate(date.getDate() - nDays);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return format
    .replace('yyyy', year)
    .replace('YYYY', year)
    .replace('MM', ('0' + month).slice(-2))
    .replace('M', month)
    .replace('DD', ('0' + day).slice(-2))
    .replace('dd', ('0' + day).slice(-2))
    .replace('D', day)
    .replace('d', day)
    .replace('HH', ('0' + hours).slice(-2))
    .replace('H', hours)
    .replace('hh', ('0' + (hours || 12)).slice(-2))
    .replace('h', hours || 12)
    .replace('mm', ('0' + minutes).slice(-2))
    .replace('m', minutes)
    .replace('ss', ('0' + seconds).slice(-2))
    .replace('s', seconds);
}

//获取指定日期向后指定天数的日期，默认取明天
function getNextNDays(params) {
  var {dateStr=new Date(), nDays =1, format="yyyy-MM-dd"} = params || {};
  var date = new Date(dateStr);
  date.setDate(date.getDate() + nDays);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  return format
    .replace('yyyy', year)
    .replace('YYYY', year)
    .replace('MM', ('0' + month).slice(-2))
    .replace('M', month)
    .replace('DD', ('0' + day).slice(-2))
    .replace('dd', ('0' + day).slice(-2))
    .replace('D', day)
    .replace('d', day)
    .replace('HH', ('0' + hours).slice(-2))
    .replace('H', hours)
    .replace('hh', ('0' + (hours || 12)).slice(-2))
    .replace('h', hours || 12)
    .replace('mm', ('0' + minutes).slice(-2))
    .replace('m', minutes)
    .replace('ss', ('0' + seconds).slice(-2))
    .replace('s', seconds);
}
//日期格式化
function formatDate(params) {
  var { dateStr=new Date, format='yyyy-MM-dd' } = params || {}
  var date = new Date(dateStr);

  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  return format
    .replace('yyyy', year)
    .replace('YYYY', year)
    .replace('MM', ('0' + month).slice(-2))
    .replace('M', month)
    .replace('DD', ('0' + day).slice(-2))
    .replace('dd', ('0' + day).slice(-2))
    .replace('D', day)
    .replace('d', day)
    .replace('HH', ('0' + hours).slice(-2))
    .replace('H', hours)
    .replace('hh', ('0' + (hours || 12)).slice(-2))
    .replace('h', hours || 12)
    .replace('mm', ('0' + minutes).slice(-2))
    .replace('m', minutes)
    .replace('ss', ('0' + seconds).slice(-2))
    .replace('s', seconds);
}

//获取指定日期是星期几，默认查今天
function getDayOfWeek(dateStr = new Date) {
  var daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
  var date = new Date(dateStr);
  var dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
}

//获取指定日期所在月份
function getMonthOfYear(dateStr = new Date) {
  var date = new Date(dateStr);
  var monthOfYear = date.getMonth() + 1;
  return monthOfYear;
}

//获取指定日期所在的季度
function getQuarterOfYear(dateStr = new Date) {
  var date = new Date(dateStr);
  var month = date.getMonth() + 1;
  var quarter = Math.ceil(month / 3);
  return quarter;
}

//判断日期是否是闰年
function isLeapYear(date) {
  const year = date.getFullYear();
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

//判断日期是否在特定的日期之内
function isInRange(date, start, end) {
  const timestamp = date.getTime();
  const startTimestamp = start.getTime();
  const endTimestamp = end.getTime();
  return timestamp >= startTimestamp && timestamp <= endTimestamp;
}

//判断是否为工作日，周一到周五为工作日
function isWeekday(date) {
  const day = date.getDay();
  return day >= 1 && day <= 5;
}

//获取本地时间和UTC时间
function localOrUtc(type) {
  const currentDate = new Date();
  const localTime = currentDate.toLocaleString();
  const utcTime = currentDate.toUTCString();
  return type === 'local' ? localTime: utcTime;
}

module.exports = {
  getNextNDays,
  formatDate,
  getPreviousNDays,
  getDayOfWeek,
  getMonthOfYear,
  getQuarterOfYear,
  isLeapYear,
  isInRange,
  isWeekday,
  localOrUtc,
}
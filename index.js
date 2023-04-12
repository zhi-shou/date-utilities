//获取指定日期向前指定天数的日期，默认取昨天
function getPreviousNDays({dateStr=new Date(), nDays =1, format}) {
  var date = new Date(dateStr);
  date.setDate(date.getDate() - nDays);
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var seconds = ('0' + date.getSeconds()).slice(-2);

  switch (format) {
    case 'yyyy/mm/dd':
      return year + '/' + month + '/' + day;
    case 'yyyy/MM/dd':
      return year + '/' + month + '/' + day;
    case 'YYYY/MM/DD':
      return year + '/' + month + '/' + day;
    case 'mm/dd':
      return month + '/' + day;
    case 'MM/DD':
      return month + '/' + day;
    case 'yyyy/mm/dd hh:mm:ss':
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy/MM/dd hh:mm:ss':
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy/MM/dd HH:mm:ss':
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'YYYY/MM/DD HH:mm:ss':
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'mm-dd':
      return month + '-' + day;
    case 'MM-DD':
      return month + '-' + day;
    case 'yyyy-mm-dd hh:mm:ss':
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy-MM-dd hh:mm:ss':
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy-MM-dd HH:mm:ss':
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'YYYY-MM-DD HH:mm:ss':
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy-mm-dd':
    default:
      return year + '-' + month + '-' + day;
  }
}

//获取指定日期向后指定天数的日期，默认取明天
function getNextNDays({dateStr=new Date(),nDays=1, format}) {
  var date = new Date(dateStr);
  date.setDate(date.getDate() + nDays);
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var seconds = ('0' + date.getSeconds()).slice(-2);

  switch (format) {
    case 'yyyy/mm/dd':
      return year + '/' + month + '/' + day;
    case 'yyyy/MM/dd':
      return year + '/' + month + '/' + day;
    case 'YYYY/MM/DD':
      return year + '/' + month + '/' + day;
    case 'mm/dd':
      return month + '/' + day;
    case 'MM/DD':
      return month + '/' + day;
    case 'yyyy/mm/dd hh:mm:ss':
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy/MM/dd hh:mm:ss':
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy/MM/dd HH:mm:ss':
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'YYYY/MM/DD HH:mm:ss':
      return year + '/' + month + '/' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'mm-dd':
      return month + '-' + day;
    case 'MM-DD':
      return month + '-' + day;
    case 'yyyy-mm-dd hh:mm:ss':
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy-MM-dd hh:mm:ss':
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy-MM-dd HH:mm:ss':
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'YYYY-MM-DD HH:mm:ss':
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    case 'yyyy-mm-dd':
    default:
      return year + '-' + month + '-' + day;
  }
}
//日期格式化
function formatDate({dateStr=new Date, format='yyyy-MM-dd'}) {
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
    .replace('hh', ('0' + (hours % 12 || 12)).slice(-2))
    .replace('h', hours % 12 || 12)
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

module.exports = {
  getNextNDays,
  formatDate,
  getPreviousNDays,
  getDayOfWeek,
  getMonthOfYear,
  getQuarterOfYear,
}
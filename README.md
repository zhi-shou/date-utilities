# date-utils-js

### 简介
  用来提供一些方法来对日期做相应的处理，

### 安装

```
npm install date-utils-js
```
或者
```
yarn add date-utils-js
```
### 使用方法
```javascript
import {
  getPreviousNDays,
  getNextNDays,
  formatDate,
  getDayOfWeek,
  getMonthOfYear,
  getQuarterOfYear,
  isLeapYear,
  isInRange,
  isWeekday,
  localOrUtc,
} from 'date-utils-js';

/*getPreviousNDays
*获取指定日期向前指定天数的日期，默认取昨天, format默认yyyy-MM-dd
*
*MM或者M表示月份，mm或者m表示分钟
*getPreviousNDays({dateStr=new Date(), nDays =1, format='yyyy-MM-dd'})
*/
//示例
console.log(getPreviousNDays());
//获取昨天的日期
console.log(getPreviousNDays({dateStr:'2023-04-11', nDays:3,format:'yyyy-mm-dd'}));
//"2023-04-08"
console.log(getPreviousNDays({dateStr:'2023-04-11', nDays: 3,format:'yyyy年MM月dd日'}));
//"2023年04月08日"
console.log(getPreviousNDays({dateStr:'2023/04/11', nDays:5, format:'yyyy/MM/dd'}));
// "2023/04/06"
console.log(getPreviousNDays({dateStr:'2023-04-11 10:30:00', nDays:7, format:'yyyy-MM-dd hh:mm:ss'}));
//"2023-04-04 10:30:00"
console.log(getPreviousNDays({dateStr:'2023-04-11 10:30:00', nDays:7, format:'yyyy年MM月dd日 hh时mm分ss秒'}));
// "2023年04月04日 10时30分00秒"


/*getNextNDays
*获取指定日期向后指定天数的日期，默认取明天, format默认yyyy-MM-dd
*MM或者M表示月份，mm或者m表示分钟
*getNextNDays({dateStr=new Date(),nDays=1, format='yyyy-MM-dd'})
*/
//示例
console.log(getNextNDays());
//获取明天的日期
console.log(getNextNDays({dateStr:'2023-04-11', nDays:3, format:'yyyy-MM-dd'}));
// "2023-04-14"
console.log(getNextNDays({dateStr:'2023-04-11', nDays:3, format:'yyyy年MM月dd日'}));
// "2023年04月14日"
console.log(getNextNDays({dateStr:'2023/04/11', nDays:5, format:'yyyy/MM/dd'}));
// "2023/04/16"
console.log(getNextNDays({dateStr:'2023-04-11 10:30:00', nDays:7, format:'yyyy-MM-dd hh:mm:ss'}));
// "2023-04-18 10:30:00"
console.log(getNextNDays({dateStr:'2023-04-11 10:30:00', nDays:7, format:'yyyy年MM月dd日 hh时mm分ss秒'}));
// "2023年04月18日 10时30分00秒"


/*formatDate
*根据传入的占位符返回格式化后的日期, 默今天,format默认yyyy-MM-dd
*MM或者M表示月份，mm或者m表示分钟
*formatDate({dateStr=new Date, format=yyyy-MM-dd})
*/
//示例
console.log(formatDate({dateStr:'2023-04-11', format:'yyyy/MM/dd'}));
// "2023/04/11"
console.log(formatDate({dateStr:'2023-04-11', format:'yyyy年MM月dd日'}));
// "2023年04月11日"
console.log(formatDate({dateStr:'2023/04/11 10:30:00', format:'HH时mm分ss秒'}));
// "10时30分00秒"
console.log(formatDate({dateStr:'2023-04-11 14:30:00', format:'yyyy年M月d日 HH:mm:ss'}));
// "2023年4月11日 14:30:00"


/*getDayOfWeek
*获取指定日期是星期几,默认取今天是星期几
*getDayOfWeek(dateStr = new Date)
*/
//示例
console.log(getDayOfWeek('2023-04-11')); // "一"
console.log(getDayOfWeek('2023-04-12')); // "二"
console.log(getDayOfWeek('2023-04-13')); // "三"

/*getMonthOfYear
*获取指定日期所在月份,默认取今天是几月
*getMonthOfYear(dateStr = new Date)
*/
//示例
console.log(getMonthOfYear('2023-04-11')); // 4
console.log(getMonthOfYear('2023-05-01')); // 5
console.log(getMonthOfYear('2023-12-31')); // 12


/*getQuarterOfYear
*获取指定日期所在的季度,默认取今天是几季度
*调用方式：getQuarterOfYear(dateStr = new Date)
*/
//示例
console.log(getQuarterOfYear('2023-01-01')); // 1
console.log(getQuarterOfYear('2023-04-11')); // 2
console.log(getQuarterOfYear('2023-10-31')); // 4

/*isLeapYear
*判断日期是否是闰年
*调用方式：isLeapYear(date)
*/
//示例
const date = new Date("2024-01-01");
console.log(isLeapYear(date)); // true

/*isInRange
*判断日期是否是闰年
*调用方式：isInRange(date, start, end)
*/
// 示例
const date = new Date("2023-05-01");
const start = new Date("2023-04-01");
const end = new Date("2023-06-01");
console.log(isInRange(date, start, end)); // true

/*isWeekday
*判断日期是否是闰年
*iisWeekday(date)
*/
// 示例
const date = new Date("2023-04-12");
console.log(isWeekday(date)); // true，因为是星期三

/*localOrUtc
*判断日期是否是闰年
*localOrUtc(type)
*/
// 示例
const type = "local";
console.log(localOrUtc(type)); // 输出本地时间
```
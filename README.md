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
  getQuarterOfYear
} from 'date-utils-js';

//getPreviousNDays
//获取指定日期向前指定天数的日期，默认取昨天, format默认yyyy-mm-dd
getPreviousNDays({dateStr=new Date(), nDays =1, format})

console.log(getPreviousNDays('2023-04-11', 3,'yyyy-mm-dd'));
//"2023-04-08"
console.log(getPreviousNDays('2023/04/11', 5, 'yyyy/mm/dd'));
// "2023/04/06"
console.log(getPreviousNDays('2023-04-11 10:30:00', 7, 'yyyy-mm-dd hh:mm:ss'));
// "2023-04-04 10:30:00"


//getNextNDays
//获取指定日期向后指定天数的日期，默认取明天, format默认yyyy-mm-dd
getNextNDays({dateStr=new Date(),nDays=1, format})
console.log(getNextNDays('2023-04-11', 3, 'yyyy-mm-dd'));
// "2023-04-14"
console.log(getNextNDays('2023/04/11', 5, 'yyyy/mm/dd'));
// "2023/04/16"
console.log(getNextNDays('2023-04-11 10:30:00', 7, 'yyyy-mm-dd hh:mm:ss'));
// "2023-04-18 10:30:00"


//formatDate
//根据传入的占位符返回格式化后的日期, 默今天,format默认yyyy-MM-dd
formatDate({dateStr=new Date, format=yyyy-MM-dd})

console.log(formatDate('2023-04-11', 'yyyy/MM/dd'));
// "2023/04/11"
console.log(formatDate('2023-04-11', 'yyyy年MM月dd日'));
// "2023年04月11日"
console.log(formatDate('2023/04/11 10:30:00', 'HH时mm分ss秒'));
// "10时30分00秒"
console.log(formatDate('2023-04-11 14:30:00', 'yyyy年M月d日 HH:mm:ss'));
// "2023年4月11日 14:30:00"


//getDayOfWeek
//获取指定日期是星期几,默认取今天是星期几
getDayOfWeek(dateStr = new Date)

console.log(getDayOfWeek('2023-04-11')); // "一"
console.log(getDayOfWeek('2023-04-12')); // "二"
console.log(getDayOfWeek('2023-04-13')); // "三"

//getMonthOfYear
//获取指定日期所在月份,默认取今天是几月
getMonthOfYear(dateStr = new Date)

console.log(getMonthOfYear('2023-04-11')); // 4
console.log(getMonthOfYear('2023-05-01')); // 5
console.log(getMonthOfYear('2023-12-31')); // 12


//getQuarterOfYear
//获取指定日期所在的季度,默认取今天是几季度
getQuarterOfYear(dateStr = new Date)

console.log(getQuarterOfYear('2023-01-01')); // 1
console.log(getQuarterOfYear('2023-04-11')); // 2
console.log(getQuarterOfYear('2023-10-31')); // 4
```
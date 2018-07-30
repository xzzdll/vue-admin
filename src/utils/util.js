/**
 * Created by Administrator on 2017/9/21 0021.
 * 封装常用工具函数,包含对原生基本类型的扩展
 */
export const formatJson = function (filterVal, list) {
  return list.map(v => filterVal.map(j => v[j]));
};

var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
export const util = {
  extend: function () {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0] || {};
    var i = 1;
    var length = arguments.length;
    var deep = false;

    // Handle a deep copy situation
    if (typeof target === 'boolean') {
      deep = target;

      // Skip the boolean and the target
      target = arguments[i] || {};
      i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== 'object' && typeof target !== 'function') {
      target = {};
    }

    // Extend jQuery itself if only one argument is passed
    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name];

          // Prevent never-ending loop
          if (target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (copy.constructor === Object || (copyIsArray = Array.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && Array.isArray(src) ? src : [];
            } else {
              clone = src && src.constructor === Object ? src : {};
            }

            // Never move original objects, clone them
            target[name] = this.extend(deep, clone, copy);

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    // Return the modified object
    return target;
  },
  getCurDate: function () {
    var date = new Date();

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    month = month.toString().length > 1 ? month : '0' + month;
    day = day.toString().length > 1 ? day : '0' + day;
    return {
      year,
      month,
      day
    };
  },
  getCurTime: function () {
    var date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = hours.toString().length > 1 ? hours : '0' + hours;
    minutes = minutes.toString().length > 1 ? minutes : '0' + minutes;
    seconds = seconds.toString().length > 1 ? seconds : '0' + seconds;

    return {
      hours,
      minutes,
      seconds
    };
  },
  getWeek: function () {
    var date = new Date();
    var week = weeks[date.getDay()];
    return {
      week
    };
  },
  getCurDateTimeWeek: function () {
    var date = this.getCurDate();
    var time = this.getCurTime();
    var week = this.getWeek();

    return (
      date.year +
            '-' +
            date.month +
            '-' +
            date.day +
            ' ' +
            time.hours +
            ':' +
            time.minutes +
            ':' +
            time.seconds +
            ' ' +
            week.week
    );
  },
  getCurDateWithOutTimeWeek: function () {
    var date = this.getCurDate();

    return (
      date.year +
            '-' +
            date.month +
            '-' +
            date.day
    );
  },
  initDateTime (iStartNum, iEndNum) {
    iStartNum = iStartNum || 0;
    iEndNum = iEndNum || 0;
    // 初始化日期时间
    var dateObj = new Date();
    var oStartDate = new Date(new Date().setDate(dateObj.getDate() - iStartNum));
    var oEndDate = new Date(new Date().setDate(dateObj.getDate() - iEndNum));
    var sEndDate =
            '' + oEndDate.getFullYear() + this.fixedDouble(oEndDate.getMonth() + 1) + this.fixedDouble(oEndDate.getDate());
    var sStartDate =
            '' +
            oStartDate.getFullYear() +
            this.fixedDouble(oStartDate.getMonth() + 1) +
            this.fixedDouble(oStartDate.getDate());
    return {
      sStartDate: sStartDate,
      sEndDate: sEndDate
    };
  },
  // 时间格式化
  fmtDate (item, type) {
    if (!item) {
      return;
    }

    // noSec: 年月日
    if (type === 'noSec') {
      let sDate = new Date(item.substring(0, 4) + '-' + item.substring(4, 6) + '-' + item.substring(6, 8) + ' 00:00:00');
      return sDate;
    }

    // hasSec：年月日时分秒
    if (type === 'hasSec') {
      let sDate = new Date(
        item.substring(0, 4) +
                '-' +
                item.substring(4, 6) +
                '-' +
                item.substring(6, 8) +
                ' ' +
                item.substring(8, 10) +
                ':' +
                item.substring(10, 12) +
                ':' +
                item.substring(12, 14)
      );
      return sDate;
    }
  },
  fixedDouble (num) {
    return num <= 9 ? '0' + num : num;
  },
  // 验证响应结果
  validateRep (item, data, loading) {
    try {
      if (data.status === false) {
        loading.close();
        // item.$message({
        //   message: data.statusCode + ', ' + data.message,
        //   type: 'error'
        // })
        // 终端线程，不往后执行
        // throw new Error(data.message)
      } else {
        return data;
      }
    } catch (err) {
      if (loading) {
        loading.close();
      }
      return false;
    }
  },
  // 删除左右两端的空格
  trim: function (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  // 处理单号集合
  handleBillcode (val) {
    // 运单编号
    let billCodes = '';
    // 运单编号个数
    let count = 0;

    // 有值
    if (val) {
      // billCode = this.formatStr(val)
      // length = billCode.split(',').length

      // 去掉所有空格
      billCodes = val.replace(/[ ]/g, '');
      // 去掉首尾换行符
      billCodes = billCodes.replace(/(^\n*)|(\n*$)/g, '');
      // 去掉中间的空行
      billCodes = billCodes.replace(/[\n]+/g, '\n');
      // 换行符换成逗号
      billCodes = billCodes.replace(/[\n]/g, ',');
      // 去掉多余的逗号
      billCodes = billCodes.replace(/[,]+/g, ',');
      // 去掉首尾逗号
      billCodes = billCodes.replace(/(^,*)|(,*$)/g, '');
      // 去掉非数字字符
      // billCodes = billCodes.replace(/[^0-9_]/g,'');

      // 个数
      count = billCodes.split(',').length;
    }

    return {
      billCodes: billCodes,
      count: count
    };
  },
  // formatStr(str) {
  //   let reg = /\s+/g
  //   // let reg = /^\s+$/g
  //   return str.replace(reg, ',')
  // },
  isEmptyStr (item) {
    // 处理值为空字符情况
    return item === '' || item === undefined ? null : item;
  },
  // 传入年月，获取月天数
  getMonthDays (year, month) {
    let d = new Date(year, month, 0);
    return d.getDate();
  },
  // 跨月数，时间格式：201801
  getSpanMonths (startDate, endDate) {
    // 开始年份
    let sYear1 = startDate.substr(0, 4);
    // 结束年份
    let eYear = endDate.substr(0, 4);

    // 开始月份
    let sMonth = startDate.substr(4, 2);
    // 结束月份
    let eMonth = endDate.substr(4, 2);

    // 相差月数
    let len = (eYear - sYear1) * 12 + (eMonth - sMonth);
    // 跨月数需要在相差月数上加1
    len += 1;

    // 考虑日部分
    // var day1 = startDate.substr(6, 2)
    // var day2 = endDate.substr(6, 2)
    // var day = day1 - day2
    // if (day > 0) {
    //   len += 1
    // } else if (day < 0) {
    //   len -= 1
    // }

    return len;
  }
};

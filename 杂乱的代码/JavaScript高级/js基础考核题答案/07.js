/**
 * 根据当前时间编写一个函数，做出相应问候语：
 *早上8点~12点 “早上好，欢迎登陆系统”
 *中午 12点~14点 “中午好，该休息了”
 *下午14点~18点 “下午好！欢迎登录系统”
 *晚上19点~0点 “晚上好，该休息了”
 */

function getNow() {
  let date = new Date();
  // 得到时间
  let hours = date.getHours();
  // 测试代码
  // hours = 20;
  if (hours >= 8 && hours < 12) {
    return "早上好，欢迎登陆系统";
  } else if (hours >= 12 && hours < 14) {
    return "中午好，该休息了";
  } else if (hours >= 14 && hours < 18) {
    return "下午好！欢迎登录系统";
  } else if (hours >= 19 && hours < 24) {
    return "晚上好，该休息了";
  } else {
    // 0到8点
    return "该猝死了";
  }
}
let result = getNow();
console.log(result);

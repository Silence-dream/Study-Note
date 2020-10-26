var year = +parseInt(prompt("请输入年份"));
var month = +parseInt(prompt("请输入月份"));
var day = +parseInt(prompt("请输入天数"));
var hour = +parseInt(prompt("请输入小时"));
var minutes = +parseInt(prompt("请输入分钟"));
var seconds = +parseInt(prompt("请输入秒"));

var datetime = new Date(year, month, day, hour, minutes, seconds);


console.log(parseDatetime(datetime));

function parseDatetime(datetime) {

    var date = new Date();

    if (datetime.getSeconds() - date.getSeconds() < 60) {

        return "刚刚";

    } else if (datetime.getMinutes() - date.getMinutes() >= 1) {

        var nowMinutes = parseInt((datetime.getMinutes() - date.getMinutes()));

        return nowMinutes + "分钟之前";

    } else if (datetime.getHours() - date.getHours() >= 1) {

        var nowHour = parseInt((datetime.getHours() - date.getHours()));

        return nowHour + "小时之前";

    } else if (datetime.getDate() - date.getDate() >= 1) {

        var nowDay = parseInt((datetime.getDate() - date.getDate()));

        return nowDay + "天之前";

    } else if (datetime.getDate() - date.getDate() >= 7) {

        var nowWeek = parseInt((datetime.getDate() - date.getDate()) / 7);

        return nowWeek + "周之前";

    } else if (datetime.getMonth() - date.getMonth() >= 1) {

        var nowMonth = parseInt((datetime.getMonth() - date.getMonth()));

        return nowMonth + "月之前";

    } else if (datetime.getFullYear() - date.getFullYear() >= 1) {

        return "很久以前";
    } else if (datetime > date) {

        return "日期不符合要求";
    }
}
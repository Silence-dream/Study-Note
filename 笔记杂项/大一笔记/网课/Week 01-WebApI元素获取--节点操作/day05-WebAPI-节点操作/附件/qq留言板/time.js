function getDateTimeNow() {
    var time = new Date();
    var day = ("0" + time.getDate()).slice(-2)
    var month = ("0" + (time.getMonth() + 1)).slice(-2)
    var hour = ("0" + time.getHours()).slice(-2)
    var minute = ("0" + time.getMinutes()).slice(-2)
    var second = ("0" + time.getSeconds()).slice(-2)
    var today = time.getFullYear() + "-" + (month) + "-" + (day) + " " + (hour) + ":" + (minute) + ":" + second;
    // console.log(today);
    return today;
}
getDateTimeNow();
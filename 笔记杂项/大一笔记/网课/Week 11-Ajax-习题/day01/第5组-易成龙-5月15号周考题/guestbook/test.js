function getTime() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1
    let day = date.getDate();
    let hours = date.getHours();
    let mindate = getMinutes();
    let sec = date.getSeconds();


    let time = `${year}-${month}-${day} ${hours}:${mindate}:${sec}`;
    return time;
}
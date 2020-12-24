// function ajax(type, url, data, callback) {
//     let xhr = new XMLHttpRequest();

//     // 
//     if (type.toUpperCase() == "GET") {
//         url = url + '?' + data;
//         data = null
//     }
//     xhr = open(type, url);

//     xhr.send(data);

//     xhr.onreadystatechange = function (data) {
//         callback(xhr.responseText);
//     }
// }
// // console.log(ajax);
// // console.log(1111);




function ajax2(obj) {
    let type = obj.type;
    let url = obj.url;
    let data = obj.data;
    let success = obj.success;

    let xhr = new XMLHttpRequest();

    // 
    if (type.toUpperCase() == "GET") {
        url = url + '?' + data;
        data = null
    }
    xhr.open(type, url);

    if (type.toUpperCase() == "POST") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    }
    xhr.send(data);

    xhr.onreadystatechange = function (data) {
        if (xhr.status == 200 && xhr.readyState == 4) {
            success(xhr.responseText);
        }
    }
}
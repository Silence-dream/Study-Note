/**
 * 
 * 使用案例
 *       yi.ajax({
        type: 'GET',
        url: 'https://autumnfish.cn/api/hero/simple',
        // 把对象变成name=zs&age=18
        data: {
          name: content,
        },
        success: function (data) {
          console.log(data);
          nickname = data;
          $(".name").html(content)
          $(".title").html(nickname)
        }
      })
 */

let yi = {
  // 把前端的js对象变成key=value&key1=value1的形式
  /**
   * 
   * @param {Object} dataObj 前端给后端传的数据对象
   */
  param: function (dataObj) {
    // 现在是''
    // 未来是 'key=value&key1=value1'

    let dataStr = '';
    for (let k in dataObj) {
      dataStr += k + '=' + dataObj[k] + '&';
    }
    // console.log(dataStr); //name=zs&age=18&
    dataStr = dataStr.slice(0, -1);
    // console.log(dataStr); // name=zs&age=18
    return dataStr;
  },
  /**
   * 
   * @param {Object} options ajax请求的请求方式|请求地址|请求数据|回调函数
   */
  ajax: function (options) {
    // 定义ajax的具体的四个参数
    // 请求方式 如果传参数 那么就是传的 如果发现没有传参数那么就是GET默认值
    let type = options.type || 'GET';
    // 请求地址
    let url = options.url || '';
    // 请求数据
    let data = this.param(options.data || {});
    // 成功时的回调函数
    let success = options.success;

    // 发起ajax请求

    // 1.实例化xhr对象
    let xhr = new XMLHttpRequest();

    // 2.设置请求行 如果是get请求 url+'?'+data 如果不是 就是url
    if (type == 'GET') {
      url = url + '?' + data;
      data = null;
    }
    xhr.open(type, url);

    // 如果是POST那么要设置请求头
    if (type == 'POST') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    // 3.发送请求数据
    xhr.send(data);
    // 4.监听并处理响应
    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        success(xhr.responseText);
      }
    }
  }
}
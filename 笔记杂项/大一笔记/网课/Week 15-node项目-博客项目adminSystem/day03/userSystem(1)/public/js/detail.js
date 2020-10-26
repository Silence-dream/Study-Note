// 入口函数
$(document).ready(function () {

  // 当页面进入的时候，获取文章ID,显示文章详情
  let id = new URLSearchParams(location.search).get('id');
  // console.log(id);
  getDetailData(id);

  // 点击登录按钮 弹出模态框
  $('.details-login').on('click', function () {
    $('#login-modal').modal('show');
  })

})
function getDetailData(id) {
  // $.get(url, param, callback(data));
  // url 请求资源的路径
  // param 请求参数, 注意将请求参数写在url后, 这里填null
  // callback(data) 回调函数, 服务器响应数据后, Ajax引擎(xhr)会自动调用该回调函数,数据还没回来时, 页面不会等待, 而是继续执行, 中断...

  $.get(`/api/detail?id=${id}`, null, function (result) {
    // console.log(result);


    // 1.处理时间
    // 把时间戳 改成 yyyy-mm-dd


    result.data.publishDate = moment(result.data.publishDate).format('YYYY-MM-DD')

    // 2.渲染模板
    let articleStr = template('article_templ', result.data);

    $('.container').prepend(articleStr);

  });

}
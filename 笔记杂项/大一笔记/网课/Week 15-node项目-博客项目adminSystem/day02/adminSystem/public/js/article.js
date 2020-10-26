$(function () {
  // 获取用户第一页数据
  getArticles();
  // 点击按钮,进行分页获取数据
  $('.pagination').on('click', 'li', function () {
    // 判断上一页 和下一页是否被禁用 如果被禁用 不能点击
    if ($(this).hasClass('disabled')) {
      return false;
    }
    // 获取按钮上的页码
    let pagenum = $(this).data('pagenum');
    // console.log(pagenum);
    // 把页码传给服务器
    getArticles(pagenum);

  })
  // 点击删除按钮 删除文章
  $('tbody').on('click', 'i', function () {
    // console.log($(this).data('id'));
    let id = $(this).data('id');
    $.ajax({
      type: 'delete',
      url: '/article/deleteArticle',
      data: {
        id: id
      },
      // 在ajax发送数据之前 调用 只要return false 代码就停止执行
      beforeSend: function () {
        // 如果 return false 以后的这个代码都不会执行
        if (!confirm("您真的要删除该文章吗?")) {
          return false
        }
        // 如果是非return false 那么后面的代码就执行
      },
      // 当ajax请求成功之后 刷新页码
      success: function (result) {
        // console.log(result);
        if (result.code == 200) {
          let pagenum = $('html').data('page');
          getArticles(pagenum);
        }
      },
      // 当ajax完成之后 无论成功还是失败都执行
      // complete: function () {
      //   let pagenum = $('html').data('page');
      //   getArticles(pagenum);
      // }
    })
  })
})

/**
 * 分页获取用户列表
 * @param {*} pagenum 
 * @param {*} pagesize 
 */
function getArticles(pagenum, pagesize) {
  $.ajax({
    type: 'GET',
    url: '/article/findArticles',
    data: {
      pageNum: pagenum || 1,
      pageSize: pagesize || 5
    },
    success: function (result) {
      console.log(result);
      for (let i = 0; i < result.data.records.length; i++) {
        result.data.records[i].publishDate = moment(result.data.records[i].publishDate).format('YYYY-MM-DD')
      }
      let tableStr = template('table_templ', result.data);
      $('tbody').html(tableStr);
      $('html').attr('data-page', result.data.page);
      // // 渲染分页按钮
      let pageStr = template('pagination_templ', result.data);

      $('.pagination').html(pageStr);
    }
  })
}
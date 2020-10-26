$(function () {
  // 获取用户第一页数据
  getUsers();
  // 点击按钮 进行分页
  $('.pagination').on('click', 'li', function () {
    // 判断上一页 和下一页是否被禁用 如果被禁用 不能点击
    if ($(this).hasClass('disabled')) {
      return false;
    }
    // 获取按钮上的页码
    let pagenum = $(this).data('pagenum');
    // console.log(pagenum);
    // 把页码传给服务器
    getUsers(pagenum);

  })
  // 点击删除按钮 显示模态框
  $('tbody').on('click', 'i', function () {
    $('html').attr('data-id', $(this).data('id'))
    $('.confirm-modal').modal('show')
  })
  // 点击删除按钮 删除用户
  $('.delete-user').click(function () {
    let userId = $('html').data('id');
    $.ajax({
      type: 'GET',
      url: '/user/deleteUser',
      data: {
        id: userId
      },
      success: function (result) {
        // console.log(result);
        if (result.code == 200) {
          let pagenum = $('html').data('page');
          // console.log(pagenum);
          // 把页码传给服务器
          $('.confirm-modal').modal('hide')
          getUsers(pagenum);
        }
      }
    })
  })
  // 点击修改按钮 修改用户信息
  // 1)回显信息
  $('tbody').on('click', 'td a', function () {
    // let modifyStr = template('modify_templ', {});
    // $('#modify-modal').html(modifyStr);
    // $('#modify-modal').modal('show');

    // 获取用户id
    let userId = $(this).data('id');
    // 发起ajax请求
    $.ajax({
      type: 'GET',
      url: '/user/findUser',
      data: {
        id: userId
      },
      success: function (result) {
        if (result.code == 200) {
          let modifyStr = template('modify_templ', result.data);
          $('#modify-modal').html(modifyStr);
          $('#modify-modal').modal('show');
        }
      }
    })
  })
  // 2)修改信息
  $('#modify-modal').on('click', '.save-btn', function () {
    let formdata = $('#modify-form').serialize() + '&id=' + $(this).data('id');
    // let formdata = new FormData(document.querySelector('#modify-form'));
    // formdata.append('id', $(this).data('id'))\

    // 请求方式一共12 常用4种(增(post)删(delete)改(put)查(get))  最常用2种
    $.ajax({
      type: 'PUT',
      url: '/user/updateUser',
      data: formdata,
      success: function (result) {
        // console.log(result);
        if (result.code == 200) {
          $('#modify-modal').modal('hide');
          let pagenum = $('html').data('page');
          getUsers(pagenum);
        }
      }
    })
  })
})

/**
 * 分页获取用户列表
 * @param {*} pagenum 
 * @param {*} pagesize 
 */
function getUsers(pagenum, pagesize) {
  $.ajax({
    type: 'GET',
    // /user/findAll 获取所有
    // /user/findOne 获取一个
    url: '/user/findAll',
    data: {
      pageNum: pagenum || 1,
      pageSize: pagesize || 5
    },
    success: function (result) {
      // console.log(result);
      // 渲染用户列表
      let tableStr = template('table_templ', result.data);
      $('tbody').html(tableStr);
      $('html').attr('data-page', result.data.page);
      // 渲染分页按钮
      let pageStr = template('pagination_templ', result.data);

      $('.pagination').html(pageStr);
    }
  })
}
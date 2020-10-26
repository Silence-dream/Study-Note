$(function () {
  // 显示分页数据
  // 刚进入页面 要显示第一页数据
  showPage();
  // 点击分页按钮 显示对应的页码的数据
  $('.pager').on('click', 'li', function () {
    if (!$(this).hasClass('disabled')) {
      let pagenum = $(this).data('pagenum');
      // console.log(pagenum);
      showPage(pagenum)
    }
  })
  // 删除数据
  $('tbody').on('click', '.delete-btn', function () {
    let userId = $(this).data('id');
    // console.log(111);
    $.ajax({
      type: 'DELETE',
      url: '/api/deleteUser',
      data: {
        id: userId
      },
      beforeSend: function () {
        // return false会阻止请求发送
        if (!confirm("您确定要删除这条数据吗?")) {
          return false;
        }
      },
      success: function (result) {
        // console.log(data)
        if (result.code == 200) {
          // showPage();

          showPage($('html').attr('data-pagenum'));
        }
      }
    })
  })
  // 回显数据
  $('tbody').on('click', '.modify-btn', function () {
    // 检测1: 事件委托是否成功
    // console.log(1111);
    // 等后台数据获取成功 再显示模态框
    // $('#update-modal').modal('show')

    // 获取用户id
    let userId = $(this).attr('data-id');
    // console.log(userId);
    $.ajax({
      type: 'POST',
      url: '/api/findOne',
      data: {
        id: userId
      },
      success: function (data) {
        // 检测5: 看看前端是否接收到了后台返回的数据
        // console.log(data);
        if (data.code == 200) {
          $('input[name="username"]').val(data.obj.username);
          $('input[name="password"]').val(data.obj.password);
          $('input[name="age"]').val(data.obj.age);
          $('input[name="email"]').val(data.obj.email);
          $('input[name="userid"]').val(data.obj._id)
          // 官呈达方式
          $('input[name="hobbies"]').val(data.obj.hobbies)
          // 1.获取后台返回的数据 数组 hobbies
          // let aHobbies = data.obj.hobbies;
          // console.log(aHobbies);
          // 2.获取form中的所有的checkbox
          // let aCheckbox = $('#update-modal input[name="hobbies"]');
          // console.log(aCheckbox);
          // aCheckbox.prop('checked', false);
          // aCheckbox.attr('checked', false)
          // 3.使用for循环 来遍历hobbies
          // for (let i = 0; i < aHobbies.length; i++) {
          //   // 4.使用each循环遍历checkbox
          //   // j是下标 checkbox是每个复选框
          //   $.each(aCheckbox, function (j, checkbox) {

          //     // console.log(checkbox);
          //     // console.log(checkbox.value);
          //     // 5.看看hobbies中的值和checkbox中的值是否一样
          //     if (aHobbies[i] == checkbox.value) {
          //       // 6.如果一样 把checkbox的checked设置为true
          //       checkbox.checked = true;
          //     }
          //   })
          // }
          $('#update-modal').modal('show')
        }
      }
    })
  })
  // 修改数据
  $('.save-btn').on('click', function () {
    // console.log(11111);

    let formdata = $('#update-modal form').serialize();
    // console.log(formdata);
    $.ajax({
      type: 'POST',
      url: '/api/updateOne',
      data: formdata,
      success: function (data) {
        // console.log(data);
        if (data.code == 200) {
          $('#update-modal').modal('hide');
          let pagenum = $(this).data('pagenum');
          // console.log(pagenum);
          showPage(pagenum)
        }
      }
    })
  })
})

/**
 * Name: 分页获取数据
 * @param {Number} pageNum 第几页
 * @param {Number} pageSize 一页显示多少条数据
 */
function showPage(pageNum, pageSize) {
  $.ajax({
    // 请求方式
    type: 'GET',
    // 请求地址
    url: '/api/getPage',
    // 请求数据
    data: {
      pageNum: pageNum || 1,
      pageSize: pageSize || 5
    },
    // 成功时的回调函数
    success: function (result) {
      // console.log(result)
      if (result.code == 200) {
        let pageStr = template('pagenation_templ', {
          pageNum: result.data.pageNum,
          pageSize: result.data.pageSize,
          pageTotal: Math.ceil(result.data.dataTotal / result.data.pageSize)
        })
        $('html').attr('data-pagenum', result.data.pageNum)
        $('.pager').html(pageStr);

        let listStr = template('list_templ', result.data);
        // console.log(listStr);
        $('tbody').html(listStr);
      }
    }
  })
}
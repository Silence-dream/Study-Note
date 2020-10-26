$(document).ready(function () {
  // 1.查找数据
  showTable();

  // 2.修改数据
  // 2.1 回显数据
  $('table').on('click', '#modify-btn', function () {
    $('#myModal').modal('show')

    $.ajax({

    })

  })

  // 2.2 提交修改数据
})


function showTable() {
  $.ajax({
    type: 'GET',
    url: '/api/lists',
    data: null,
    success: function (result) {
      console.log(result);
      if (result.code == 200) {
        let htmlStr = template('list_templ', result);
        // console.log(htmlStr);
        $('tbody').html(htmlStr);
      }
    }
  })
}
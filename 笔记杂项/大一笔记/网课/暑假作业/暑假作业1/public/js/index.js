$(function () {
  // 页面载入从数据库获取英雄数据
  $.ajax({
    type: "post",
    url: "/admin/indexHero",
    data: null,
    success: function (response) {
      // console.log(response);
      var heroStr = template("heroTemplate", response);
      $("tbody").empty();
      // console.log(heroStr);
      $("tbody").html(heroStr);
    },
  });
  //删除操作
  $("tbody").on("click", ".btn-danger", function (e) {
    e.preventDefault();

    // 判断是否删除
    let flag = confirm("你真的要删除吗?");
    // 得到要删除的id
    let id = $(this).attr("data-index");
    if (flag == true) {
      $.ajax({
        type: "post",
        url: "/admin/delete",
        data: {
          id: id,
        },
        success: function (response) {
          if (response.code == 200) {
            alert("删除成功");
            location.reload();
          }
        },
      });
    }
  });

  // 点击编辑按钮
  $("#my-table").on("click", ".btn-primary", function () {
    // 得到资料id
    let id = $(this).attr("data-index") - 0;

    // 编辑页面得到
    $.ajax({
      type: "post",
      url: "/admin/userEdit",
      data: {
        id: id,
      },
      success: function (response) {},
    });
  });
});

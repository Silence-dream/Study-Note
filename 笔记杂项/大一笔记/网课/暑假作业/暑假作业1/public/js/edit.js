$(function () {
  $(".btn-save").click(function (e) {
    e.preventDefault();
    // 得到id
    let id = $(this).attr("data-id");
    let userInfo = $(".form-horizontal").serialize();
    $.ajax({
      type: "post",
      url: "/admin/saveEdit",
      data: userInfo + `&id=${id}`,
      success: function (response) {
        if ((response.code = 200)) {
          location.href = "/admin/index";
        }
      },
    });
  });
  // 取消按钮
  $(".btn-cancel").click(function (e) {
    e.preventDefault();
    location.href = "/admin/index";
  });
});

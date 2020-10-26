$(function () {
  $("#login_btn").click(function (e) {
    e.preventDefault();
    let formData = $("form").serialize();
    // console.log($("form"));
    // console.log(formData);
    $.ajax({
      type: "post",
      url: "/admin/login",
      data: formData,
      success: function (response) {
        // 密码正确跳转
        if (response.code == 200) {
          window.location.href = "/admin/posts";
        }
        // 密码错误弹出
        if (response.code == 500) {
          $(".alert-danger").show();
          console.log($(".alert-danger"));
        }
      },
    });
  });
});

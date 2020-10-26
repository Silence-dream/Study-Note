$(function () {
  // 点击按钮保存修改信息
  $("#btnSave").click(function (e) {
    e.preventDefault();
    let formData = $("form").serialize();
    console.log(formData);
    $.ajax({
      type: "post",
      url: "/admin/updateUser",
      data: formData,
      success: function (response) {
        if (response.code == 200) {
          window.location.href = "/admin/UserIndex";
        }
        if (response.code == 500) {
          alert("修改失败");
        }
      },
    });
  });
  // 返回列表
  $("#backid").click(function (e) {
    e.preventDefault();
    window.location.href = "/admin/UserIndex";
  });
});

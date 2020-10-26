$(function () {
  $("#btnSave").click(function (e) {
    e.preventDefault();
    // 得到机构id
    let id = $("body").attr("data-id");
    console.log(id);
    let formData = $("#definewidth").serialize();
    $.ajax({
      type: "post",
      url: "/admin/updateEdit",
      data: formData,
      success: function (response) {
        if (response.code == 200) {
          window.location.href = "/admin/index";
        }
        if (response.code == 500) {
          alert("修改失败");
        }
      },
    });
  });
});

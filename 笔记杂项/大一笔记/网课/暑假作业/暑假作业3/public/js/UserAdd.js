$(function () {
  $("#btnSave").click(function (e) {
    e.preventDefault();
    let formData = $("#form").serialize();
    console.log(formData);
    $.ajax({
      type: "post",
      url: "/admin/updateAdd",
      data: formData,
      success: function (response) {
        if (response.code == 200) {
          location.href = "/admin/UserIndex";
        }
        if (response.code == 500) {
          alert("添加失败");
        }
      },
    });
  });
});

$(function () {
  $("#btnSave").click(function (e) {
    e.preventDefault();
    let formData = $("form").serialize();
    console.log(formData);
    $.ajax({
      type: "post",
      url: "/admin/Nodeadd",
      data: formData,
      success: function (response) {
        // console.log(response);
        if (response.code == 200) {
          location.href = "/admin/index";
        }
        if (response.code == 500) {
          location.reload();
        }
      },
    });
  });
});

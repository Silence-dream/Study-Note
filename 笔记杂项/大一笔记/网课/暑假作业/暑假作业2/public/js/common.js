$(function () {
  $(".fa-sign-out").on("click", function (e) {
    // e.preventDefault();
    // console.log(1111);
    $.ajax({
      type: "get",
      url: "/admin/loggedOut",
      data: {
        isOut: true,
      },
      success: function (response) {
        // console.log(response);
        if (response.code == 200) {
          location.href = "/admin/login";
        }
        if (response.code == 500) {
          alert("退出失败");
        }
      },
    });
  });
});

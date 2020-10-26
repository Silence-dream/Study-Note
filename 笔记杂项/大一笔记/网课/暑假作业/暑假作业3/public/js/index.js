$(function () {
  $("#loggedOut").on("click", function (e) {
    e.preventDefault();

    $.ajax({
      type: "post",
      url: "/admin/loggedOut",
      data: {
        loggedOut: 1,
      },
      success: function (response) {
        if (response.code == 200) {
          location.href = "/admin/login";
        }
      },
    });
  });
});

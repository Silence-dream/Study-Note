// 公共代码
$(function () {
  // 退出登陆
  $("#logoutButton").on("click", function () {
    logout();
  });
});
/**
 *
 * 退出登陆功能
 */
function logout() {
  $.ajax({
    type: "get",
    url: "/admin/logOut",
    data: null,
    dataType: "dataType",
    success: function (response) {
      console.log(response);
      location.href = "/admin/login";
    },
  });
}

// 公共代码
$(function () {
  // #region 退出登陆
  $("#logoutButton").on("click", function () {
    logout();
  });
  //#endregion

  //#region 控制侧边栏显示和隐藏
  $("#navbarButton").on("click", function () {
    console.log(11);
    $(".main , .aside").toggleClass("toggle");
  });
  //#endregion
});

//#region 退出登陆功能
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
//#endregion

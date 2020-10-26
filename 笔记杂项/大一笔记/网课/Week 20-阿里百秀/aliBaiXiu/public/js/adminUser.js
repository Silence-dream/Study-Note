// user用户页面的脚本
$(function () {
  getUser();
  // 添加用户数据
  $(".btn-primary").click(function (e) {
    e.preventDefault();
    let obj = $("form").serialize();
    // console.log(obj);
    $.ajax({
      type: "post",
      url: "/admin/users/addUser",
      data: obj,
      success: function (response) {
        console.log(response);
        if (response.code == 200) {
          getUser();
        }
      },
    });
  });

  function getUser() {
    // 显示用户列表数据
    $.ajax({
      type: "post",
      url: "/admin/users/getUser",
      success: function (response) {
        console.log(response);
        $("#tbody-user").empty();

        for (let i = 0; i < response.length; i++) {
          // 激活状态英文转中文
          // 状态(未激活(unactivated)、已激活(activated)、无权限(forbidden)、禁用(trashed))
          if (response[i].status == "unactivated") {
            response[i].status = "未激活";
          } else if (response[i].status == "activated") {
            response[i].status = "已激活";
          } else if (response[i].status == "forbidden") {
            response[i].status = "无权限";
          } else if (response[i].status == "trashed") {
            response[i].status = "禁用";
          }
          $("#tbody-user").append(`
        <tr>
          <td class="text-center"><input type="checkbox" /></td>
          <td class="text-center">
            <img class="avatar" src="${response[i].avatar}" />
          </td>
          <td>${response[i].email}</td>
          <td>${response[i].slug}</td>
          <td>${response[i].nickname}</td>
          <td>${response[i].status}</td>
          <!-- 状态(未激活(unactivated)、已激活(activated)、无权限(forbidden)、禁用(trashed))' -->
          <td class="text-center">
            <a href="post-add.php"data-userID='${response[i].id}' class="btn btn-default btn-xs">
            编辑
            </a>
            <a href="javascript:;"data-userID='${response[i].id}' class="btn btn-danger btn-xs">
            删除
            </a>
          </td>
        </tr>
        `);
        }
      },
    });
  }
});

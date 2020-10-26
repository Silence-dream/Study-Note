$(function () {
  // 点击跳转添加用户
  $("#addnew").click(function (e) {
    e.preventDefault();
    window.location.href = "/admin/Useradd";
  });
  // 点击删除用户
  $("tbody").on("click", "#UserDelete", function () {
    let id = $(this).attr("data-id");

    $.ajax({
      type: "delete",
      url: "/admin/UserDelete",
      data: { id: id },
      success: function (response) {
        if (response.code == 200) {
          location.reload();
        }
        if (response.code == 500) {
          alert("删除失败");
        }
      },
    });
  });

  // 点击模糊查询用户
  $("#UserQuery").click(function (e) {
    e.preventDefault();
    let formData = $("form").serialize();
    $.ajax({
      type: "get",
      url: "/admin/UserQuery",
      data: formData,
      success: function (response) {
        if (response.code == 200) {
          console.log(response);
          let trStr = template("tbodyDataTemplate", response);
          console.log(trStr);
          $("tbody").html(trStr);
        }
        if (response.code == 500) {
          alert("查询失败");
        }
      },
    });
  });

  // 点击编辑
  $("tbody").on("click", "#UserEdit", function (e) {
    e.preventDefault();
    let id = $(this).attr("data-id");
    console.log(id);

    window.location.href = `/admin/Useredit?id=${id}`;
  });
});

$(function () {
  // 点击跳转添加机构
  $("#addnew").click(function (e) {
    e.preventDefault();
    window.location.href = "/admin/Nodeadd";
  });
  // 点击删除机构
  $("tbody").on("click", ".btnDelete", function () {
    let id = $(this).attr("data-id");
    $.ajax({
      type: "delete",
      url: "/admin/Nodeadd",
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

  // 点击查询机构
  $("#btnQuery").click(function (e) {
    e.preventDefault();
    let formData = $("form").serialize();
    $.ajax({
      type: "post",
      url: "/admin/NodeFindData",
      data: formData,
      success: function (response) {
        if (response.code == 200) {
          // location.reload();
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
  $("tbody").on("click", ".btnEdit", function (e) {
    e.preventDefault();
    let id = $(this).attr("data-id");
    console.log(id);

    window.location.href = `/admin/edit?id=${id}`;
  });
});

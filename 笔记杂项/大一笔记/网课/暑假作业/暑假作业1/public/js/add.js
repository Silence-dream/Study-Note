$(function () {
  $("#addButton").click(function (e) {
    e.preventDefault();
    // 获取添加的数据
    let addHeroData = $("#addHero").serialize();
    // 发起ajax
    $.ajax({
      type: "post",
      url: "/admin/add",
      data: addHeroData,
      success: function (response) {
        // console.log(response);
        // 添加成功
        if (response.code == 200) {
          location.href = "/admin/index";
        }
        if (response.code == 500) {
          alert("添加失败");
        }
      },
    });
  });
});

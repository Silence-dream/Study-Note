$(function () {
  // 载入页码请求数据 渲染页码
  $.ajax({
    type: "post",
    url: "/admin/getPosts",
    data: null,
    success: function (response) {
      // console.log(response);
      let pageStr = template("pageTemplate", response);
      // console.log(pageStr);
      // console.log(response.data.postsData);
      //#region 时间转换
      // 得到文章数据
      let postsData = response.data.postsData;
      for (let i = 0; i < postsData.length; i++) {
        // console.log(postsData[i]);
        for (let j = 0; j < postsData[i].length; j++) {
          // console.log(postsData[i][j].publish_time);
          postsData[i][j].publish_time = moment(
            postsData[i][j].publish_time
          ).format("YYYY-MM-DD");
        }
      }
      //#endregion
      $("#pagination").html(pageStr);
    },
  });

  $("#pagination").on("click", ".pageUp", function (e) {
    // 得到页码
    let pageNumber = $(".pageUp").attr("data-pageNumber");
    // console.log(pageNumber);
    pageButton(pageNumber, 3, function (resutl) {
      // console.log(`object`);
      // console.log(resutl);
      if (resutl.data.pageNow >= resutl.data.pageNumBer.length) {
        e.preventDefault();
        return false;
      }
    });
  });
  // 点击下一页
  $("#pagination").on("click", ".pageDown", function (e) {
    // 得到页码
    let pageNumber = $(".pageDown").attr("data-pageNumber");
    // console.log(pageNumber);
    pageButton(pageNumber, 3, function (resutl) {
      // console.log(`object`);
      // console.log(resutl);
      if (resutl.data.pageNow >= resutl.data.pageNumBer.length) {
        e.preventDefault();
        return false;
      }
    });
  });

  // 点击页码
  $("#pagination").on("click", ".pageYeMa", function () {
    // 得到页码
    let pageNumber = parseInt($(this).attr("data-pagenumber"));
    pageButton(pageNumber);
  });

  // 点击删除文章
  $("#tbody").on("click", "a[href='javascript:;']", function () {
    // 得到要删除的id
    let id = $(this).attr("data-pid");
    // console.log("要删除的id", id);
    // 传输给后台
    $.ajax({
      type: "delete",
      url: "/admin/deletePosts",
      data: { id: id },
      success: function (response) {
        // console.log(response);
        if (response.code == 200) {
          location.reload();
        }
        if (response.code == 500) {
          // location.reload();
          alert("删除失败 ");
        }
      },
    });
  });

  // 模糊查询
  $("#filtrate").on("click", function (e) {
    e.preventDefault();
    let formData = $("#form-inline").serialize();
    console.log(formData);
    $.ajax({
      type: "post",
      url: "/admin/findPosts",
      data: formData,
      success: function (response) {
        // console.log("模糊查询", response);
        // console.log(response);
        if (response.code == 500) {
          alert("你的选择不合法");
          location.reload();
        }
        if (response.code == 200) {
          console.log(response);
          let postsStr = template("findpostsTemplate", response);
          $("#tbody").html(postsStr);
          console.log(postsStr);
        }
      },
    });
  });

  // 点击编辑文章
  $("#tbody").on("click", "a[href='/admin/edit']", function (e) {
    // 得到要删除的id
    let pid = $(this).attr("data-pid");
    $.ajax({
      type: "post",
      url: "/admin/updataPosts",
      data: {
        pid: pid,
      },
      success: function (response) {
        console.log(response);
      },
    });
  });
  // 分页渲染函数
  /**
   *
   * @param {number} pageNow 点击的页码
   * @param {number} pageSize 渲染多少条数据
   * @param {function} callback 回调函数
   */
  function pageButton(pageNow, pageSize, callback) {
    $.ajax({
      type: "post",
      url: "/admin/getPosts",
      data: {
        pageNow: parseInt(pageNow),
        pageSize: parseInt(pageSize) || 3,
      },
      success: function (response) {
        //#region 时间转换
        // 得到文章数据
        let postsData = response.data.postsData;
        for (let i = 0; i < postsData.length; i++) {
          // console.log(postsData[i]);
          for (let j = 0; j < postsData[i].length; j++) {
            // console.log(postsData[i][j].publish_time);
            postsData[i][j].publish_time = moment(
              postsData[i][j].publish_time
            ).format("YYYY-MM-DD");
          }
        }
        //#endregion
        // console.log(response);
        let pageStr = template("pageTemplate", response);
        let postsStr = template("postsTemplate", response);
        // console.log(pageStr);
        // console.log(postsStr);
        $("#pagination").html(pageStr);
        $("#tbody").html(postsStr);
        if (callback) callback(response);
      },
    });
  }
});

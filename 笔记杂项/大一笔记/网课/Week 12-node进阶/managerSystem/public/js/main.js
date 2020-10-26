$(function () {

  // //显示数据
  // showData();

  // 显示分页数据
  showPage();


  // 点击分页按钮

  $(".pager").on("click", "li", function () {
    if (!$(this).hasClass('disabled')) {
      let pagenum = $(this).data('pagenum');
      // console.log(pagenum);
      showPage(pagenum)
    }
  })


  // 删除数据

  $("tbody").on("click", ".btn-danger", function () {
    // console.log($(this).attr("data-id"))
    $.ajax({
      type: "GET",
      url: "/api/delete",
      data: {
        id: $(this).attr("data-id")
      },
      success: function (response) {
        console.log(response)
        showPage()
      }
    });

  });
});


/**
 * 功能:当页面打开的时候显示数据库中的数据
 */

// function showData() {
//   $.ajax({
//     type: "GET",
//     url: "/api/list",
//     data: null,
//     success: function (response) {
//       // console.log(response);
//       if (response.code == 200) {
//         // 使用templat方法
//         let htmlStr = template("list_temp1", {
//           data: response.data
//         })
//         // console.log(htmlStr)
//         $("tbody").html(htmlStr);
//       }
//     }
//   });
// }


function showPage(pageNum, pageSize) {
  $.ajax({
    type: "GET",
    url: "/api/getPage",
    data: {
      pageNum: pageNum || 1,
      pageSize: pageSize || 5
    },
    success: function (response) {

      if (response.code == 200) {

        let pageStr = template("list_temp2", {
          pageNum: response.data.pageNum,
          pageSize: response.data.pageSize,
          pageTotal: Math.ceil(response.data.dataTotal / response.data.pageSize)
        })
        // console.log(pageStr)
        let listStr = template("list_temp1", {
          data: response.data.data
        })

        $("tbody").html(listStr);
        $(".row .pager").html(pageStr);
      }

    }
  });




}
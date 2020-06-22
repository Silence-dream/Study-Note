$(document).ready(function () {

  $("#file").on("change", function () {

    // 得到图片的url
    let imgUrl = URL.createObjectURL($(this)[0].files[0]);
    console.log(imgUrl);
    $("#img").prop("src", imgUrl);
  });
  $("button").on("click", function () {

    // 序列化表格元素
    // let formData = $("#form").serializeArray()

    let formData = new FormData($("#form")[0]);
    // console.log(formData.get("file"));
    $.ajax({
      type: "post",
      url: "/profile",
      data: formData,
      contentType: false,
      processData: false,
      success: function (response) {
        console.log(response);
      }
    });
  });
});
$(function () {
  console.log(1);
  // console.log(formData);
  $("#save").click(function (e) {
    // e.preventDefault();
    console.log(location.search);
    let formData = $("form").serialize();
    $.ajax({
      type: "post",
      url: "/admin/addPosts",
      data: formData,
      success: function (response) {},
    });
  });
});

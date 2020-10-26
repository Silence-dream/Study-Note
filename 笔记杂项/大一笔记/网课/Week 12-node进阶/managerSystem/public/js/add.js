$(function () {
  $('#add-btn').on('click', function () {
    let formData = $('form').serialize()
    console.log(formData);

    $.ajax({
      type: 'POST',
      url: '/api/add',
      data: formData,
      success: function (result) {
        // console.log(result);
        if (result.code == 200) {
          alert(`用户: ${result.data.username}添加成功`);
          location.href = '/'
        }
      }
    })
  })
})
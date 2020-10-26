// 实际上不需要表单插件来进行表单校验
// 1.表单校验插件好用
// 2.阻止默认提交
// 3.前端校验主要的作用是为了提高用户体验(提示用户)
$(function () {
  $("#login-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
      }

    },
    messages: {
      password: {
        required: "密码必须填写",
      },
      email: {
        required: "邮箱必须填写",
        email: "邮箱格式错误"
      }
    },
    // 提交处理
    submitHandler: function (form) {
      // console.log(form);
      let formdata = $(form).serialize();
      // console.log(formdata);

      $.ajax({
        type: 'POST',
        url: '/api/login',
        data: formdata,
        // 成功时的回调
        success: function (result) {
          // console.log(result);
          if (result.code == 200) {
            location.href = "/user"
          }
        },
        // 失败时的回调
        error: function (err) {
          console.log(err);
          // console.log(err.responseJSON);
          if (JSON.parse(err.responseText).code == 400) {
            alert(JSON.parse(err.responseText).msg)
            $(form).find('input').val('');
          }
        }
      })
    }
  });
})
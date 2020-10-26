// 实际上不需要表单插件来进行表单校验
// 1.表单校验插件好用
// 2.阻止默认提交
// 3.前端校验主要的作用是为了提高用户体验(提示用户)
$(function () {
  $("#add-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 6,
        maxlength: 18
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 12
      },
      email: {
        required: true,
        email: true
      },
      role: {
        required: true
      }
    },
    messages: {
      username: {
        required: "用户名必须填写",
        minlength: "用户名在6-18位之间",
        maxlength: "用户名在6-18位之间"
      },
      password: {
        required: "密码必须填写",
        minlength: "用户名在6-12位之间",
        maxlength: "用户名在6-12位之间"
      },
      email: {
        required: "邮箱必须填写",
        email: "邮箱格式不正确"
      },
      role: {
        required: "角色必须选择"
      }

    },
    // 提交处理
    submitHandler: function (form) {
      let formData = $(form).serialize();
      // console.log(data);
      $.ajax({
        type: 'POST',
        url: '/user/addUser',
        data: formData,
        // 发送请求成功 接受到了响应
        success: function (result) {
          // console.log(result);
          if (result.code == 400) {
            $('.title .tips').html(result.msg).addClass('error');
          }

          if (result.code == 200) {
            location.href = '/user'
          }
        }
      })
    }
  });
})
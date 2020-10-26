$(function () {
  // //#region  登陆按钮点击
  // $("#buttonLogin").click(function (e) {
  //   e.preventDefault();
  // });
  // //#endregion

  //#region 表单验证
  $("#userData")
    .bootstrapValidator({
      // 什么时候校验
      live: "enabled",
      // message: "This value is not valid",
      feedbackIcons: {
        //提示图标
        valid: "glyphicon glyphicon-ok",
        invalid: "glyphicon glyphicon-remove",
        validating: "glyphicon glyphicon-refresh",
      },
      // 提交按钮
      submitButtons: "#buttonLogin",
      fields: {
        username: {
          // message: "用户名或密码错误，请重新登录...",
          validators: {
            notEmpty: {
              message: "用户名或密码错误，请重新登录...",
            },
            stringLength: {
              //输入　长度限制　　校验
              min: 5,
              max: 15,
              message: "用户名在5到15之间 ",
            },
            regexp: {
              //正则校验
              regexp: /^[A-Za-z0-9]+$/,
              message: "请输入字母或者数字",
            },
            callback: {
              message: "用户名或密码错误，请重新登录...",
            },
          },
        },
        password: {
          validators: {
            notEmpty: {
              message: "用户名或密码错误，请重新登录...",
            },
            stringLength: {
              //输入　长度限制　　校验
              min: 5,
              max: 15,
              message: "密码在5到15之间 ",
            },
            callback: {
              message: "用户名或密码错误，请重新登录...",
            },
          },
        },
      },
    })
    // 当校验成功后 发起ajax请求
    .on("success.form.bv", function (e) {
      // 为了阻止默认提交
      e.preventDefault();
      // form表单内容
      // const dataForm = $("#userData").serialize();
      var $form = $(e.target);
      // console.log($form);
      // 发起ajax请求
      $.ajax({
        type: "post",
        url: "/admin/login",
        data: $form.serialize(),
        success: function (response) {
          console.log(response);
          //#region  登陆成功
          if (response.code == 200) {
            location.href = "/admin/index";
          }
          //#endregion
          //#region 登陆失败
          if (response.code == 500) {
            $form
              .data("bootstrapValidator")
              .updateStatus("username", "INVALID", "callback");
            $form
              .data("bootstrapValidator")
              .updateStatus("password", "INVALID", "callback");
          }
          //#endregion
        },
      });
    });
  //#endregion
});

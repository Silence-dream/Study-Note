$(function () {

  //  1.当type为file的input内容发生变化的时候 预览图片
  $('input[type=file]').on('change', function () {
    // console.log(1111123123)
    // console.log($(this)[0].files[0]);
    // 预览图片
    let imgSrc = URL.createObjectURL($(this)[0].files[0]);
    $('.img-thumbnail').attr('src', imgSrc);
  })
  // 2.当点击提交按钮的时候 进行表单校验
  $("#article-form").validate({
    rules: {
      title: {
        required: true,
        minlength: 1,
        maxlength: 20
      },
      cover: {
        required: true,
      },
      publishDate: {
        required: true,
      },
      content: {
        required: true,
      }
    },
    messages: {
      title: {
        required: "标题必须填写",
        minlength: "标题必须在1-20个字符之间",
        maxlength: "标题必须在1-20个字符之间",
      },
      cover: {
        required: "封面图片必须选择",
      },
      publishDate: {
        required: "发布日期必须选择",
      },

      content: {
        required: "文章内容必须填写",
      }
    },
    // 提交处理
    submitHandler: function (form) {
      let formdata = new FormData(form)

      // console.log(formdata.get('title'));

      $.ajax({
        type: 'POST',
        url: '/article/add',
        contentType: false,
        processData: false,
        data: formdata,
        success: function (result) {
          // console.log(result);
          if (result.code == 200) {
            location.href = "/article"
          }
        }
      })
    }
  });
})
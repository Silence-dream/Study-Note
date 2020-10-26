$(function () {
  // 当进入页面的时候 回显数据
  let id = new URLSearchParams(location.search).get('articleid');
  // console.log(id);
  getArticle(id);
  // 预览图片
  $('#article-modify-form').on('change', 'input[type=file]', function () {
    // console.log(1111123123)
    // console.log($(this)[0].files[0]);
    // 预览图片
    let imgSrc = URL.createObjectURL($(this)[0].files[0]);
    $('.img-thumbnail').attr('src', imgSrc);
  })
  // 当点击提交按钮的时候，表单校验 发起ajax请求
  $("#article-modify-form").validate({
    rules: {
      title: {
        required: true,
        minlength: 1,
        maxlength: 20
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

      $.ajax({
        type: 'POST',
        url: '/article/updateArticle',
        data: formdata,
        contentType: false,
        processData: false,
        success: function (result) {
          // console.log(result);
          if (result.code == 200) {
            location.href = '/article'
          }
        }
      })

    }
  });
})

function getArticle(id) {
  $.ajax({
    type: 'GET',
    url: '/article/findArticle',
    data: {
      id: id
    },
    success: function (result) {
      // console.log(result);

      result.data.publishDate = moment(result.data.publishDate).format('YYYY-MM-DD')
      // console.log(result.data.publishDate);
      if (result.code == 200) {
        let modifyStr = template('modify_templ', result.data);

        $('#article-modify-form').html(modifyStr);
      }
    }
  })
} 
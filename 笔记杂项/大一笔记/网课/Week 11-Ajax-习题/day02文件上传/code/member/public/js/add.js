$(function () {
  // 预览

  // 1.给图片上传控件添加change事件
  $('#input_avatar').on('change', function () {
    // 2.获取input中的文件对象 xxx.files[0]

    // 3.创建URL.createObjectURL(oInput.files[0])
    //  $('#input_avatar')[0].files[0]
    let imgSrc = URL.createObjectURL($(this)[0].files[0]);
    // console.log(imgSrc);
    // 4.赋值
    $('#avatar').attr('src', imgSrc);
  })

  // ajax请求

  // 1.给Save按钮添加一个点击事件
  $('#btn_add').on('click', function () {
    // 2.把需要的数据都收集好，放到formdata中去
    let formdata = new FormData();

    formdata.append('name', $('#input_name').val());
    formdata.append('bio', $('#input_bio').val());
    formdata.append('avatar', $('#input_avatar')[0].files[0]);
    // 3.发起ajax请求

    $.ajax({
      type: 'POST',
      url: '/api/add',
      data: formdata,
      processData: false,
      // 不要让jquery自动添加content-type
      contentType: false,
      // 成功时的回调函数
      success: function (result) {
        // console.log(result)
        if (result.code == 200) {
          location.href = '/'
        }
      },
      // 失败时的回掉函数
      error: function () {
        alert("用户添加失败")
      }
    })

    // 点击按钮之后 以后的操作就不做了
    // 解决按钮重复点击的问题 操作true 或 false
    return false;
  })


})
$(function () {
  // 当进入页面的时候 回显数据
  let id = new URLSearchParams(location.search).get('articleid');
  // console.log(id);
  getArticle(id);
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
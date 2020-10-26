const marked = require('marked');
const fs = require('fs');

// console.log(marked("### 文章添加"));

fs.readFile('./今日笔记.md', 'utf8', (error, data) => {
  let result = marked(data);

  fs.writeFile('./aa.html', result, (err, data) => {
    console.log(data);
  })
})
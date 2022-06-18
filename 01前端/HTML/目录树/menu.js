// https://www.bilibili.com/video/BV1YT4y167TL

const menuData = [
  {
      "name": "1",
      "children": [
          { "name": "1-1" },
          { "name": "1-2" },
          { "name": "1-3" },
      ]
  },
  {
      "name": "2",
      "children": [
          { "name": "2-1" },
          { "name": "2-2" },
          {
              "name": "3-3",
              "children": [
                  {
                      "name": "3-3-1"
                  }
              ]
          },
      ]
  }
]

function createMenu(data, root) {
  if (data.length) {
      data.forEach(menu => {
          let detailsEle = document.createElement('details');
          let summaryEle = document.createElement('summary');
          summaryEle.innerText = menu.name;
          detailsEle.appendChild(summaryEle);
          root.appendChild(detailsEle);
          if (menu.children?.length) {
              createMenu(menu.children, detailsEle);
          }
      })
  }
}

const menu = document.getElementById('menuBox');
createMenu(menuData, menu);

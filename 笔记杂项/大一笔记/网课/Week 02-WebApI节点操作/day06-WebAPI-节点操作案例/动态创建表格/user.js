const btn = document.querySelector('button');
const box1 = document.querySelector('#box1');
btn.addEventListener("click", () => {
    box1.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>${heads[0]}</th>
              <th>${heads[1]}</th>
              <th>${heads[2]}</th>
              <th>${heads[3]}</th>
              <th>${heads[4]}</th>
              <th>${heads[5]}</th>
              <th>${heads[6]}</th>
            </tr>
          </thead>
          <tbody>
    
          </tbody>
        </table>
        `;
    const tbody = document.querySelector('tbody');
    // console.log(tbody)
    for (let i = 0; i < datas.length; i++) {
        const tr_div = document.createElement('tr');
        // console.log(i)
        tr_div.innerHTML = `
        
          <td>${datas[i].name}</td>
          <td>${datas[i].age}</td>
          <td>${datas[i].gender}</td>
          <td>${datas[i].stuId}</td>
          <td>${datas[i].salary}</td>
          <td>${datas[i].city}</td>
          <td><a href="#">删除</a></td>
        
    `;
        // tbody.insertBefore(tbody, tbody.children[0]);
        tbody.appendChild(tr_div)
        // console.log(tr_div)
    }

    // 获取所有的a标签
    const a = document.querySelectorAll('a');
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function () {
            let flag = confirm("你真的要删除吗");
            if (flag) {
                tbody.removeChild(a[i].parentNode.parentNode);
            }
        })
    }
});
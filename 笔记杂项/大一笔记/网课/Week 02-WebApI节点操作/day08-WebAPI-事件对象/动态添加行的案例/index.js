window.addEventListener("load", function () {
    // - 当点击表格中的"GET"可以删除当前行
    // 获取页面中的所有get
    const table = document.querySelector('table');
    // 获取tbody
    const j_tb = document.querySelector('#j_tb');
    // 每当鼠标移入的时候都要获取所有的get
    // - 注意：当根据数据表格中的添加一行之后，再次点击"GET"这一行还能删除当前行
    table.addEventListener("click", function (e) {
        if (e.target.nodeName == "A") {
            j_tb.removeChild(e.target.parentNode.parentNode);
        }
        console.log(e.target.nodeName);
    })
    // 原来的代码
    // table.addEventListener("mouseenter", function () {
    //     let get = j_tb.querySelectorAll(".get");
    //     for (let i = 0; i < get.length; i++) {
    //         get[i].addEventListener("click", function () {
    //             j_tb.removeChild(this.parentNode.parentNode);
    //             // console.log(this.parentNode.parentNode);
    //         })
    //     }
    // })


    // - 当点击"添加数据"遮罩层和添加数据的文本框都会显示
    // 获取添加数据按钮
    const j_btnAddData = document.querySelector('#j_btnAddData');
    // 获取遮罩层
    const j_mask = document.querySelector('#j_mask');
    // 获取添加数据的文本框
    const j_formAdd = document.querySelector('#j_formAdd');

    j_btnAddData.addEventListener("click", function () {
        j_mask.style.display = "block";
        j_formAdd.style.display = "block";
    })

    // - 当点击文本框对应盒子右上角"X"遮罩层和这个盒子都会隐藏
    // 获取叉
    const j_hideFormAdd = document.querySelector('#j_hideFormAdd');
    j_hideFormAdd.addEventListener("click", function () {
        j_mask.style.display = "none";
        j_formAdd.style.display = "none";
    })

    // - 当在课程文本框和所属学院文本框中都输入内容的时候，点击“添加”按钮，根据数据在表格中创建一行，并且遮罩层和这个盒子都会隐藏

    // 获取添加按钮
    const j_btnAdd = document.querySelector('#j_btnAdd');
    // 获取课程文本框
    const j_txtLesson = document.querySelector('#j_txtLesson');
    // 获取所属学院文本框
    const j_txtBelSch = document.querySelector('#j_txtBelSch');

    j_btnAdd.addEventListener("click", function () {

        let tr = document.createElement("tr");
        tr.innerHTML = `
     <td>${j_txtLesson.value}</td>
      <td>${j_txtBelSch.value}</td>
      <td><a href="javascrip:;" class="get">GET</a></td>
    `;
        console.log(j_txtLesson.value.length);
        console.log(j_txtLesson.value.length);
        // - 当课程文本框或者是所属学院文本框的内容都为空，或者是有一个为空，那么点击"添加"按钮，都不会在表格中创建一行，并且遮罩层和这个盒子都会隐藏
        if (j_txtLesson.value.length != 0 && j_txtBelSch.value.length != 0) {
            j_tb.insertBefore(tr, j_tb.children[0]);
        }

        // 清空课程文本框
        j_txtLesson.value = "";
        j_mask.style.display = "none";
        j_formAdd.style.display = "none";
    })
})
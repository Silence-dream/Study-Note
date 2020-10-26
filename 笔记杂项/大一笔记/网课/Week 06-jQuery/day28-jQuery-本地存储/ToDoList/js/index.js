$(function () {
    load();
    // - 功能1：在表单输入框输入内容，点击”添加”按钮或者点击”enter”键，输入的内容就会添加到”正在进行的任务”列表里面
    // 添加按钮
    // 数组保存传入的数据
    // localStorage.setItem("todolist", "12")
    $(".add").on("click", function () {
        if ($(".txt").val().trim() == "") {
            alert("内容不能为空");
        } else {
            // 得到数据
            let data = getData();
            // console.log(data);
            // 存储数据
            data.push({
                content: $(".txt").val(),
                done: false
            })
            // console.log(data);
            saveData(data);
            load();
        }
    });
    $(".txt").on("keypress", function (e) {
        // 按下回车键
        if (e.keyCode == 13) {
            if ($(".txt").val().trim() == "") {
                alert("内容不能为空");
            } else {
                // 得到数据
                let data = getData();
                // console.log(data);
                // 存储数据
                data.push({
                    content: $(".txt").val(),
                    done: false
                })
                // console.log(data);
                saveData(data);
                load()
            }
        }
    });
    // - 功能2：如果表单的内容为空，点击”添加”按钮或者点击”enter”键的时候会提示”内容不能为空”，空字符串就不会被添加道下面

    //   的”正在进行的任务”列表里面

    // - 功能3: 当点击”正在进行的任务”列表里面的某一项的复选框，选中的那一项列表就会被添加到”已经完成的任务”列表里面，而
    $(".w").on("click", "input", function () {
        // 得到点击的index修改本地存储里面对应的索引
        let index = $(this).attr("data-index");
        let data = getData();
        // console.log(data);
        data[index].done = $(this).prop("checked");
        // 修改完后保存数据
        saveData(data);
        load();
    })
    //   且会从“正在进行的任务”中删除这一项

    // - 当刷新浏览器之后，页面还是保持不变(注：之前的数据不会消失)
    // localStorage.setItem("todolist", "12")

    // 存储数据
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
        // console.log(localStorage.setItem("todolist", JSON.parse(data)));
    }

    // 得到数据
    function getData() {
        // 得到数据
        let data = localStorage.getItem("todolist");
        if (data != null) {
            return JSON.parse(data)
        } else {
            return [];
        }
    }

    // 渲染数据
    function load() {
        // 清空输入框
        $(".txt").val("");
        // 得到数据
        let data = getData();
        // 创建前先清空
        $(".w ul,.w ol").empty();
        // 创建元素
        $(data).each(function (index, element) {
            // console.log(element);
            // 已经完成
            if (element.done) {
                $(".w ul").prepend(`
                <li>
                    <input type="checkbox" data-index="${index}" checked>
                    <span >${element.content}</span>
                </li>
                `);
            } else {
                $(".w ol").prepend(`
                <li>
                    <input type="checkbox" data-index="${index}">
                    <span >${element.content}</span>
                </li>
                `);
            }
        })
    }

});
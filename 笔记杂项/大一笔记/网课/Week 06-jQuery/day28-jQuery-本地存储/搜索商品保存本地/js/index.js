$(function () {
    load();
    // console.log(JSON.parse(getDate()));

    //     - 页面已经给定只需要完成功能，将用户搜索商品的记录保存在本地，形成历史搜索记录
    let arr = [];
    // - 功能1：在输入框中输入内容，如果内容为空，或者输入的都是空格，那么会弹出"请输入搜索内容,内容不能为空"
    $(".record_btn").on("click", function () {
        // 得到输入的内容
        let a = $(".record_input").val().trim();
        // 如果有内容
        if (a) {
            arr.push(a)
            saveDate(JSON.stringify(arr))
            load();
            // console.log(JSON.parse(getDate()));


        } else {
            alert("请输入搜索内容,内容不能为空");
        }
    });

    //   会添加到"搜索历史"里面，具体的格式页面已经给定
    // - 功能3：当点击"清空记录"，"搜索历史"里面的数据就会被清空，并且"清空记录"和"搜索历史"就会隐藏，再次刷新页面看看效
    //   果
    $(".close_whole").on("click", function () {
        localStorage.clear()
        load();
        $(".close_whole,.history").hide();
    });
    // - 功能4：当点击历史记录每行上面的"删除"图标的时候，这一行就会被删除，当历史记录里面的数据都被删除的时候，"清空记录
    //   "和"搜索历史"就会隐藏，再次刷新页面看效果


    $(".history_list").on("click", "img", function () {
        // 得到点击的index
        let index = $(this).parent().index()
        // console.log("点击的索引" + index);
        let date = JSON.parse(getDate());
        // console.log(date);
        // 得到要删除的index
        let dateIndex = date.length - index - 1;
        // console.log("要删除的索引" + dateIndex);
        // console.log(date);

        date.splice(dateIndex, 1)
        saveDate(JSON.stringify(date))
        load();
    });
    // console.log(saveDate());
    // 保存数据
    function saveDate(date) {
        localStorage.setItem("history", date)
    }
    // 得到数据
    function getDate() {
        let date = localStorage.getItem("history");
        // console.log(date);
        if (date != null) {
            return date;
        } else {
            return ""
        }
    }
    // console.log(load());
    // load()
    // 渲染数据
    // console.log(getDate().split(","));


    // console.log(getDate());


    function load() {
        let date = JSON.parse(getDate());
        if (getDate()) {
            // let date = JSON.parse(getDate());
            // - 功能2：当输入框中的内容符合要求的情况下，点击"搜素"按钮，下面的"清空记录"和"搜索历史"就会显示出来，搜素的数据就
            // 清空显示和历史记录显示
            $(".close_whole,.history").show();
            $(".history_list").empty();
            $(date).each(function (index, elment) {
                $(".history_list").prepend(`
        <li>${date[index]} <img src="./img/del.png" alt=""></li>
        `);
            })
            // 清空输入框
            $(".record_input").val("")
        } else {
            $(".record_input").val("")
            $(".history_list").empty();
            $(".close_whole,.history").hide();
        }
        if (date[0] == undefined) {
            $(".record_input").val("")
            $(".history_list").empty();
            $(".close_whole,.history").hide();
        }
    }
});
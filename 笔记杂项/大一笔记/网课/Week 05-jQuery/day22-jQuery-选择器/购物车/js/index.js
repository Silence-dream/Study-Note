$(function () {
    // - 页面已经给定，只需要完成效果，不能随意编辑里面的html和css

    // - 功能1：点击"全选"复选框，下面的4个复选框都会选中，点击取消，下面也都不会被选中
    $("#all").on("click", function () {
        $("input[type=checkbox]").prop("checked", $(this).prop("checked"))

    });
    // - 功能2：点击下面左边的那4个复选框，只有当下面4个复选框全部选中的时候，上面的全选才会被选中，否则不会被选中
    let count = 0;
    $("input[type=checkbox]").on("click", function () {
        let flag = $(this).prop("checked");
        if (flag) {
            count++;
        } else {
            count--;
        }

        // 有几个商品就有几个复选框
        let num = $(".car tbody>tr").length
        if (count == num) {
            $("#all").prop("checked", true);
        } else {
            $("#all").prop("checked", false);
        }


    });
    // - 功能3：点击"商品数量"的"+"号，当前的这个行前面的复选框也被选中，同时中间的数字也会改变，每次增量是1，后面的小计也会跟着变化，
    $(".add").on("click", function () {
        // console.log($($(this).parents("tr").find("input")));
        // 被选中
        $(this).parents("tr").find("input:checkbox").prop("checked", true);
        // 得到当前的数量
        let num = $(this).siblings("input").val();
        num++;
        $(this).siblings("input").val(num);
    });
    // - 功能4：点击"商品数量"的"-"号，当前的这个行前面的复选框也被选中，同时中间的数字也会改变，每次减量是1，后面的小计也会跟着变化，当 数量是1的时候，就不能在减少了
    $(".reduce").on("click", function () {
        // console.log($($(this).parents("tr").find("input")));
        // 被选中
        $(this).parents("tr").find("input:checkbox").prop("checked", true);
        // 得到当前的数量
        let num = $(this).siblings("input").val();
        if (num > 1) {
            num--;
            $(this).siblings("input").val(num);
        }
    });
});
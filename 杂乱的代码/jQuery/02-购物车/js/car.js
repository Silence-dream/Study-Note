$(function () {

    // 1.顶部全选按钮和底部全选按钮
    $(".checkall").change(function () {
        // .子复选框和全选被选中
        $(".j-checkbox , .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            // 让所有的商品添加 check-cart-item 类名
            $(".cart-item").addClass("check-cart-item");
        } else {
            // check-cart-item 移除
            $(".cart-item").removeClass("check-cart-item");
        }

        getAmountSum();
        getPriceum();
    })

    // 2. 如果小复选框被选中的个数等于3 就应该把全选按钮选上，否则全选按钮不选。
    $(".j-checkbox").change(function () {
        // 测试选中了几个复选框
        // console.log($(".j-checkbox:checked").length);
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(" .checkall").prop("checked", true);
        } else {
            $(" .checkall").prop("checked", false);
        }
        // 给复选框的爸爸添加类名
        if ($(this).prop("checked") == true) {
            $(this).parents('.cart-item').addClass("check-cart-item");

        } else {
            $(this).parents('.cart-item').removeClass("check-cart-item");
        }
        getAmountSum();
        getPriceum()
    })

    function getAmountSum() {
        let count = $(".j-checkbox:checked").length;
        // 如果选中了，最下面的商品等于选中的个数
        $(".amount-sum em").html(count);
    }
    // 3.增减商品数量
    // 增
    $(".increment").click(function (e) {
        // 得到文本框里面的商品数量
        let count = $(this).siblings(".itxt").val();
        count++;
        $(this).siblings(".itxt").val(count);


        // 同时修改商品小计
        // 得到小计
        // let sum = $(this).parents(".p-num").siblings('.p-sum')
        // console.log($(this).parents(".p-num").siblings('.p-sum'));
        // 得到单价文本
        let price_text = $(this).parents(".p-num").siblings('.p-price').text();
        // 转换为数字
        let price = Number(price_text.split("￥")[1]);
        // 得到总价
        let sumPrices = Number(price * count).toFixed(2);
        $(this).parents(".p-num").siblings('.p-sum').text("￥" + sumPrices);

        getPriceum();
    });
    // 减
    $(".decrement").click(function (e) {
        // 得到文本框里面的商品数量
        let count = $(this).siblings(".itxt").val();
        // 限制最小的商品数量是 1
        if (count > 1) {
            count--;
        }
        $(this).siblings(".itxt").val(count);


        // 同时修改商品小计
        // 得到小计
        // let sum = $(this).parents(".p-num").siblings('.p-sum')
        // console.log($(this).parents(".p-num").siblings('.p-sum'));
        // 得到单价文本
        let price_text = $(this).parents(".p-num").siblings('.p-price').text();
        // 转换为数字
        let price = Number(price_text.split("￥")[1]);
        // 得到总价
        let sumPrices = Number(price * count).toFixed(2);
        $(this).parents(".p-num").siblings('.p-sum').text("￥" + sumPrices);
    });

    // 4.修改文本框的也改变小计
    $(".itxt").change(function (e) {
        // 得到当前文本框的值value
        let count = $(this).val();
        // 得到单价文本
        let price_text = $(this).parents(".p-num").siblings('.p-price').text();
        // 转换为数字
        let price = Number(price_text.split("￥")[1]);
        // 得到总价
        let sumPrices = Number(price * count).toFixed(2);
        $(this).parents(".p-num").siblings('.p-sum').text("￥" + sumPrices);
    });

    // 5.总计商品和价格

    getPriceum()

    function getPriceum() {
        // 总价
        let sum = 0;
        for (let i = 0; i < $(".j-checkbox:checked").length; i++) {
            // 得到选中每个商品的价格
            // 得到选中的单价
            let price = $(".j-checkbox:checked").eq(i).parents(".p-checkbox").siblings(".p-price").html().split("￥")[1];
            // 得到选中的数量
            let num = $(".j-checkbox:checked").eq(i).parents(".p-checkbox").siblings(".p-num").find(".itxt").val()
            sum += price * num;
        }


        console.log(sum);

        $(".price-sum em").text(sum.toFixed(2));
    }


    // 6.删除商品
    // 商品后面的删除按钮
    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        getPriceum()
    })
    // 删除选中的商品
    $(".remove-batch").click(function (e) {

        $(".j-checkbox:checked").parents(".cart-item").remove();
        getPriceum()
        // $(".j-checkbox").each(function (index, element) {
        //     // console.log($(element).prop("checked"));
        //     if ($(element).prop("checked") == true) {
        //         $(this).parents(".cart-item").remove();
        //     }
        // })
    });
    // 清空购物车
    $(".clear-all").click(function (e) {
        $(".cart-item").remove();
        getPriceum()
    });
})
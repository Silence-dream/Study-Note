$(function () {
    // 1.  实现仿淘宝商城商品图片预览效果(附件):给元素设置样式，可以自己去查css()这个api

    // - 页面已经给定，只需要完成效果，不能随意编辑里面的html和css

    // - 功能1：鼠标经过右边竖着的5个小图片，当前的这个小图片上面会显示一个红色边框，同时左边的大图也在跟着切换


    $(".Xcontent08").on("mouseenter", "img", function () {
        // 得到移入图片的地址
        // console.log(this.src);
        // 清除右边的两小图片的边框
        $(".Xcontent26>div").removeClass("current");
        // 移动到谁谁是红色边框
        $(this).parent().addClass('current').siblings().removeClass("current");
        // 移动到谁 就切换谁的图片
        $(".Xcontent06 img").attr("src", this.src);
    });

    // - 功能2：鼠标点击"颜色"右边的2个小图片，点击的当前这个小图片就会上面有一个红色的边框，同时左边的大图也在跟着切换
    //   ​     注意：当点击小图片的时候，那么之前竖着的5个小图片都是没有红色边框的
    $(".Xcontent26").on("click", "div", function () {
        // 换图片
        // 得到点击图片的地址
        let src = $(this).find("img").attr("src")
        $(".Xcontent06 img").attr("src", src);

        // 点击给边框
        $(this).addClass("current").siblings().removeClass("current");
        // 去掉左边的边框
        $(".Xcontent08>div").removeClass("current");
    });
    // - 功能3：鼠标点击"数量"右边的"-"号的时候，数量就会减少，中间的数值随着也在改变，每次减少的量是1，当中间的数值显示为0的时候，点击 "-"号就不能继续在减了
    // 减号
    $(".Xcontent32").on("click", function () {
        // 得到需要减少的值
        let num = $(this).siblings("form").find(".input").val();
        if (num >= 1) {
            num--;
            $(this).siblings("form").find(".input").val(num);
        }
    })

    // - 功能4: 同理，点击"数量"右边的"+"号的时候，数量就会增加，中间的数值也会随着改变，每次增加的量是1，因为现在不涉及数据库要和库存比 较，所以点击"+"号目前是没有上限的
    $(".Xcontent33").on("click", function () {
        // 得到需要减少的值
        let num = $(this).siblings("form").find(".input").val();
        num++;
        $(this).siblings("form").find(".input").val(num);
    })
});
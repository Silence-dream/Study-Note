$(function () {
    // console.log($(".recommend").offset());
    let flag = true;
    // 到今日推荐显示
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".recommend").offset().top) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }

        // 到谁谁红
        $(".floor>div").each(function (index, element) {
            if (flag) {
                if ($(window).scrollTop() >= $(this).offset().top) {
                    // 得到div对应的index
                    console.log(index);
                    $(".fixedtool li").eq(index).addClass("current").siblings().removeClass("current");
                }
            }
        })
    });
    // 点谁到谁
    $(".fixedtool li").click(function (e) {
        flag = false;
        // 得到被点击li的index
        let lisIndex = $(this).index()
        // 得到对应的跳转模块的高度
        let floorHeight = $(".floor>div").eq(lisIndex).offset().top;
        // 跳转
        $("html,body").stop().animate({
            scrollTop: floorHeight
        }, function () {
            flag = true;
        });
        // 点谁谁红
        $(this).addClass("current").siblings().removeClass("current");
    });

})
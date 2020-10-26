$(document).ready(function () {
    //     - 页面已经给定，只需要写功能，不能随意编辑里面的html和css
    let flag = true;
    // - 功能1: 随着滚动条的滚动，滚动到一定距离，右边的侧边栏就会显示，否则就是隐藏
    $(window).on("scroll", function () {
        // 得到滚动的距离
        let winPx = $(this).scrollTop();
        // console.log($(window).scrollTop());

        // 获得高度
        let hidePx = $(".louceng").offset().top;
        if (winPx >= hidePx) {
            $(".subnav").fadeIn();
        } else {
            $(".subnav").fadeOut();
        }
        // console.log(winPx, hidePx);

        // - 功能3: 随着滚动条的滚动，页面滚动到某一个楼层的时候，右侧的侧边栏对应的就会被选中，添加current这个类名
        $(".louceng>div").each(function (index, element) {
            if (flag) {
                if (winPx >= $(this).offset().top) {
                    $(".subnav>ul>li").eq(index).addClass("current").siblings().removeClass("current");
                }
            }
        })
    });
    // - 功能2：点击侧边栏的"返回"，页面就会回到最开始的位置
    $(".back").on("click", function () {
        $("html,body").stop().animate({
            scrollTop: 0
        });
    });


    $(".subnav>ul").on("click", "li", function () {

        flag = false;
        // 得到点击li的index
        let liIndex = $(this).index();
        console.log(liIndex);
        // 得到要跳转的高度
        let height = $(".louceng>div").eq(liIndex).offset().top
        console.log(height);

        $("html,body").stop().animate({
            scrollTop: height
        }, function () {
            flag = true;
        });
        // 点谁谁红
        $(this).addClass("current").siblings().removeClass("current");

    });

});
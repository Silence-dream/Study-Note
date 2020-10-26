$(function () {
    //  - 功能1：显示小圆点，第一个小圆点是有current这个类名的
    // 有几张图片创建几个li
    $(".slider ul li").each(function (index, element) {
        // console.log(index);
        $("ol").append("<li></li>")
    })
    $("ol li:first").addClass("current")
    // - 功能2：鼠标移动到大盒子上面，左右的箭头就会显示出来，鼠标离开就会隐藏
    $(".slider").hover(function () {
        // over
        $(".arrow").fadeIn();
        // 自动轮播停止
        clearInterval(timer);
        timer = null;
    }, function () {
        // out
        $(".arrow").fadeOut();
        // 自动轮播开始
        timer = setInterval(() => {
            $(".arrow-right").click();
        }, 1000);
    });
    // - 功能3：鼠标经过哪个小圆点上面，这个小圆点的背景色就是红色(current类名已经提供)，同时大图也在跟着切换
    $("ol li").on("mouseenter", function () {
        $(this).addClass("current").siblings().removeClass("current")
        // 得到对应的索引
        let index = $(this).index();
        // 图片淡入淡出
        $(".slider ul li").eq(index).fadeIn().siblings().fadeOut();
    })
    // - 功能4：点击右箭头，图片进行下一张的切换，当切换到最后一张的时候，接着从第一张开始，下面的小圆点也在跟着在切换，对应的背景色变红
    let index = 0;
    $(".arrow-right").on("click", function () {
        // 得到要切换的图片的索引
        $("ol li").each(function (i, element) {
            if ($("ol li").eq(i).hasClass("current")) {
                // console.log(i);
                index = i;
            }
        });
        // 得到图片的数量
        let num = $(".slider ul li").length;
        index++;
        if (index == num) {
            index = 0;
        }
        $(".slider ul li").eq(index).fadeIn().siblings().fadeOut();
        $("ol li").eq(index).addClass("current").siblings().removeClass("current");
    });
    // - 功能5：点击左箭头，图片进行上一张的切换，当切换到第一张的时候，接着从最后一张继续倒着切换，下面的小圆点也在跟着切换，对应的背景色变红
    $(".arrow-left").on("click", function () {
        // 得到要切换的图片的索引
        $("ol li").each(function (i, element) {
            if ($("ol li").eq(i).hasClass("current")) {
                index = i;
                // console.log(index);
            }
        });
        // 得到图片的数量
        let num = $(".slider ul li").length;
        if (index == 0) {
            index = num;
            // console.log(index);
        }
        index--;
        $(".slider ul li").eq(index).fadeIn().siblings().fadeOut();
        $("ol li").eq(index).addClass("current").siblings().removeClass("current");

    });
    // - 功能6： 自动轮播的效果
    let timer = setInterval(() => {
        $(".arrow-right").click();
    }, 1000);
    // - 功能7： 当鼠标移动到大盒子上面的时候，停止自动轮播，鼠标离开，自动轮播继续

    //   注意： 在点你鼠标移动上去自动轮播停止，你再去测试上面那些功能，看上面的效果是否依旧没有问题
});
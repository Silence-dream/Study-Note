$(document).ready(function () {
    $(".leftBox>ul>li").on("mouseenter", function () {
        // -  鼠标在下面的三个小图片上面经过，随着鼠标进入不同的小图，当前的这个小图上面有一个红色的小边框,类名active已经定义好，直接用
        $(this).addClass("active").siblings().removeClass("active");
        // 得到图片索引
        let index = $(this).index() + 1;
        $(".rightBox>img").prop("src", "./img/b" + index + ".jpg");
        // -  三张小图上面的那个大图在跟着切换，右边的大图也在跟着切换
    });
});
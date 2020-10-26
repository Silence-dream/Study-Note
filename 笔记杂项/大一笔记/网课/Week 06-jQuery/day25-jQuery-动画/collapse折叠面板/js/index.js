$(function () {
    $(".item").css("height", $(".item").find('h3').height());
    let flag = true;
    $(".item").on("click", function () {
        if (flag) {
            $(this).find('i').stop().animate({
                rotate: "90deg"
            })
            $(this).stop().animate({
                height: $(this).find("h3").height() + $(this).find("span").height()
            }, function () {
                flag = false;
            })
        } else {
            $(this).find('i').stop().animate({
                rotate: "0"
            })
            $(this).stop().animate({
                height: $(this).find("h3").height()
            }, function () {
                flag = true;
            })
        }
    });
});
var options = ["0,1,2,3,4", "1,2,3,4", "0,2,3,4", "0,1,3,4", "0,1,2,4", "0,1,2,3", "0,1,2", "0,1,3", "0,1,4", "1,2,3", "1,2,4", "2,3,4", "0,1", "0,2", "0,3", "0,4", "1,2", "1,3", "1,4", "2,3", "2,4"]
$("form").each(function () {
    var f = $(this);
    if (f.parent().data("questiontype") == "1") {
        for (var i = 0; i <= 4; i++) {
            $.ajax({
                type: "post",
                url: "/study/ajax-assignment-online_homework_answer",
                data: "studentWorkId=" + f.children().val() + "&answer=" + i + "&online=1",
                async: false,
                dataType: "json",
                success: function (data) {
                    if (data.isRight == 1) {
                        var lis = f.children(".e-q").children().children().children(".e-q-quest").children(".e-a-g").children();
                        $(lis).children().each(function () {
                            if ($(this).data("index") == i + "") {
                                f.children("[name=answer]").val(i)
                                $(this).addClass("checked");
                            }
                        })
                    }
                }
            });
        }
    } else if (f.parent().data("questiontype") == "2") {
        for (var i = 0; i <= options.length; i++) {
            $.ajax({
                type: "post",
                url: "/study/ajax-assignment-online_homework_answer",
                data: "studentWorkId=" + f.children().val() + "&answer=" + options[i] + "&online=1",
                async: false,
                dataType: "json",
                success: function (data) {
                    if (data.isRight == 1) {
                        var lis = f.children(".e-q").children().children().children(".e-q-quest").children(".e-a-g").children();
                        var sp = (options[i] + "").split(",");
                        for (var a = 0; a < sp.length; a++) {
                            $(lis).children().each(function () {
                                //alert($("ul").index($(this)))
                                if ($(this).data("index") == sp[a] + "") {
                                    f.children("[name=answer]").val(i)
                                    $(this).addClass("checked");
                                }
                            })
                        }
                    }
                }
            });
        }
    } else if (f.parent().data("questiontype") == "3") {
        for (var i = 0; i <= 2; i++) {
            $.ajax({
                type: "post",
                url: "/study/ajax-assignment-online_homework_answer",
                data: "studentWorkId=" + f.children().val() + "&answer=" + i + "&online=1",
                async: false,
                dataType: "json",
                success: function (data) {
                    if (data.isRight == 1) {
                        var lis = f.children(".e-q").children().children().children(".e-q-quest").children(".e-a-g").children();
                        $(lis).children().each(function () {
                            if ($(this).data("index") == i + "") {
                                f.children("[name=answer]").val(i)
                                $(this).addClass("checked");
                            }
                        })
                    }
                }
            });
        }
    }
})






document.querySelector('#video_html5_api').playbackRate = 10
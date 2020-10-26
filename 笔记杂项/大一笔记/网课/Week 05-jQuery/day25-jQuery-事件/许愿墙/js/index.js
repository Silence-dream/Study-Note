$(document).ready(function () {
    var list = [{
            nicknane: "拉拉",
            content: "大家今天要好好把后台布局完成大家今天要好好把后台布局完成大家今天要好好把后台布局完成"
        },
        {
            nicknane: "哈哈",
            content: "今天天气不错，风和日丽的"
        },
        {
            nicknane: "秀秀",
            content: "真搞不懂你们地球人，月亮有什么好看的，全是坑，还是对面那哥们好看，"
        },
        {
            nicknane: "萌萌",
            content: "今天你拿苹果支付了么"
        },
        {
            nicknane: "帅帅",
            content: "新的一年，所有的人健康快乐"
        },
        {
            nicknane: "姚姚",
            content: "希望疫情早日过去"
        },
        {
            nicknane: "老杨",
            content: "我在学校等你们来"
        },
        {
            nicknane: "丁丁",
            content: "今天的新校区好美丽，风景无限好"
        }
    ]
    // - 实现许愿墙效果(附件):

    // - 功能1：根据页面中给定的数据，创建许愿签到页面中，(许愿签的模板已经在页面中给定)3
    // 高度
    // let height = ($(window).height() - $("header").height()) + $("header").height();
    let height = $(window).height() - $("header").height();
    console.log(height);

    // 宽度
    let width = $(window).width();
    // console.log(width);



    for (let i = 0; i < list.length; i++) {
        $("main").append(`
    <div class="list">
        <div class="list-top">
            <span>${list[i].nicknane}</span>
            <span>No.00001</span>
        </div>
        <div class="list-center">
            ${list[i].content}
        </div>
        <div class="list-bottom">
            <span>今天${getNowTime().hour}:${getNowTime().minute}</span>
            <span></span>
        </div>
    </div>
        `)
        // - 功能2：每个许愿签的位置是随机产生的
        $(".list").eq(i).css({
            top: parseInt(Math.random() * height + $("header").height()) + "px",
            left: parseInt(Math.random() * (width - $(".list").width())) + "px"
        })
    }
    // console.log($(".list").height());

    // - 功能3：每个许愿签上面的时间(时和分)是和系统当前的时间一样的
    function getNowTime() {
        var date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.date = date.getDate();
        this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        var currentTime = this.year + '-' + this.month + '-' + this.date + ' ' + this.hour + ':' + this.minute + ':' + this.second;
        return {
            year: this.year,
            month: this.month,
            date: this.date,
            hour: this.hour,
            minute: this.minute,
            second: this.second,
            currentTime: currentTime
        };
    }
    // console.log(getNowTime());

    // - 功能4：鼠标移动到每个许愿签上面的"X"的时候，这个”X“的背景图的位置在改变(这个小X是一个精灵图)，鼠标离开恢复原样子
    // console.log($(".list .list-bottom>span:nth-child(2)"));

    $("main").on("mouseenter", ".list .list-bottom>span:nth-child(2)", function () {
        // over
        $(this).css("backgroundPosition", "-40px 0");
    });
    $("main").on("mouseleave", ".list .list-bottom>span:nth-child(2)", function () {
        // over
        $(this).css("backgroundPosition", "0 0");
    });

    // - 功能5: 当鼠标点击每个许愿签上面的"X"的时候，当前这个许愿签就会从页面中消失
    // $(".list .list-bottom>span:nth-child(2)").on("click", function (e) {
    //     $(this).parents('.list').remove();
    //     console.log(e.target);
    // })
    $("main").on("click", ".list .list-bottom>span:nth-child(2)", function (e) {
        $(this).parents('.list').remove();
    })

    // - 功能6：当许愿签堆叠在一起的时候，点击某个许愿签，当前这个许愿签就会在最上面，覆盖住别的许愿签
    $(".list").on("click", function () {
        $(this).css("z-index", "999").siblings().css("z-index", "1");
    })
    // - 功能7：点击”我要许愿“，就会显示遮罩层
    $(".send").on("click", function () {
        $(".mask").show();
    });
    // - 功能8：点击”遮罩层“右上角的"X",这个遮罩层就会隐藏
    $(".mask-title").on("click", ".close", function () {
        $(this).parents(".mask").hide();
    });
    // - 功能9：在遮罩层的第二个输入框，不断的输入内容，上面的"50"这个文字在随着内容的输入在不断的减少，最大长度是50
    $(".mask-wish").on("keypress", "textarea", function () {
        let num = $(".mask-wish i").text();
        if (num > 0) {
            num--;
            $(".mask-wish i").text(num);
        }
        // console.log($(this).val());
    });
    // - 功能10：在遮罩层的2个输入框中输入内容，如果有一个输入框内容为空，或者是输入的都是空格键的话，点击”发布“之后，遮罩层关闭，但是页面中不会添加新的许愿签，如果2个用户都输入了内容，并且不是空格键的话，就会添加一条新的许愿签到页面中，遮罩层关闭，2个输入框的内容都清空
    $(".release").on("click", function () {
        let name = $(".mask-nickname input").val();
        let content = $(".mask-wish textarea").val();
        console.log(content);

        if (name.trim().length == 0) {
            $(".mask").hide();
        } else {
            $("main").append(`
            <div class="list">
                <div class="list-top">
                    <span>${name.trim()}</span>
                    <span>No.00001</span>
                </div>
                <div class="list-center">
                    ${content}
                </div>
                <div class="list-bottom">
                    <span>今天${getNowTime().hour}:${getNowTime().minute}</span>
                    <span></span>
                </div>
            </div>
                `)
            // - 功能2：每个许愿签的位置是随机产生的
            let index = $(".list").index() - 1;
            $(".list").eq(index).css({
                top: parseInt(Math.random() * height + $("header").height()) + "px",
                left: parseInt(Math.random() * (width - $(".list").width())) + "px"
            })
            $(".mask-nickname input").val("");
            $(".mask-wish textarea").val("");
            $(".mask").hide();
        }
    });



    //   注意:当我通过"我要许愿"添加的许愿签，上面的功能都还是没有问题的，点击许愿签上面的"x"的功能还能用
});
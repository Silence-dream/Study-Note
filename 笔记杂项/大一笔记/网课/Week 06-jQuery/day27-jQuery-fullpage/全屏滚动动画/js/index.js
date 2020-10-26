$(document).ready(function () {
    // http://fullpage.81hu.com/ 教程网址
    // 得到当前屏幕的高度
    let k = $(window).height();
    // 控制动画
    let flag = false;
    // 点击next 往下播放一屏幕
    // $.fn.fullpage.moveSectionDown();//向下滚动一页
    $(".next").click(function (event) {
        $.fn.fullpage.moveSectionDown();
    });
    // 初始化fullpage插件
    $('#fullpage').fullpage({ //传入对象写参数
        navigation: true, //是否显示导航，默认为false
        navigationPosition: 'right', //导航小圆点的位置left
        scrollingSpeed: 1200, //滚动时间


        // 回调函数
        // afterLoad: function(anchorLink, index){},
        // anchorLink锚点名称 index是序号
        afterLoad: function (anchorLink, index) {
            if (index == 2 && flag == false) {
                $(".search").show().animate({
                    right: 370
                }, function () {
                    $('.search-words').animate({
                        opacity: "1"
                    }, function () {
                        $(".search").hide(100);
                        // 图片往上走并且缩小
                        $(".search-02-1").show().animate({
                            height: 30,
                            right: 250,
                            bottom: 452
                        }, function () {
                            flag = true; //如果flag=true所有动画执行完毕
                        });
                        // 同时沙发图片变大
                        $(".godds-02").fadeIn().animate({
                            height: 218
                        }, 1000);
                        // 同时白色文字显示
                        $(".words-02").animate({
                            opacity: "1"
                        }, 500)
                    });
                });
            }
        },

        // 刚开始滚动就触发
        // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：
        //index 是离开的“页面”的序号，从1开始计算；
        //nextIndex 是滚动到的“页面”的序号，从1开始计算；
        //direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3 && flag == true) {
                // 第二屏往第三屏滚动的时候沙发显示且往第三屏运动,白色盒子显示
                $(".shirt-02").show().animate({
                    bottom: -(k - 250),
                    width: 207,
                    left: 260
                }, 2000, function () {
                    // $(".img-03").prop("src", "./img/img-01-a.gif");
                    // $(".btn").prop("src", "./img/btn-01-a.gif");

                    $(".img-01-a").animate({
                        opacity: "1"
                    }, function () {
                        $(".btn-01-a").animate({
                            opacity: 1
                        })
                    })
                });
                $(".cover").show();
            }

            if (index == 3 && nextIndex == 4) {
                $(".shirt-02").hide();
                // 沙发的距离 当前屏幕的高度 - 250 + 第三屏的 50
                $(".t1f").show().animate({
                    bottom: -((k - 250) + 50),
                    left: 260
                }, 2000, function () {
                    $(this).hide();
                    $(".car-img").show();
                    // 购物车往右走
                    $(".car").animate({
                        left: "150%"
                        // easeInElastic 为jQuery easing插件的扩展
                    }, 3000, "easeInElastic", function () {
                        // 收货地址显示
                        $(".note").show(function () {
                            $(".note-img").animate({
                                opacity: 1
                            })
                        });
                    })
                    // $(".car").animate({
                    //     left: "60%"
                    // }, 1000, function () {
                    //     $(".car").animate({
                    //         left: "40%"
                    //     }, 1000, function () {
                    //         $(".car").animate({
                    //             left: "55%"
                    //         }, 500, function () {
                    //             $(".car").animate({
                    //                 left: "45%"
                    //             }, 500, function () {
                    //                 $(".car").animate({
                    //                     left: "150%"
                    //                 }, 500)
                    //             })
                    //         })
                    //     })
                    // })
                });
            }
            // 第4屏幕到第5屏幕过渡
            if (index == 4 && nextIndex == 5) {
                // 小手上来
                $(".hand-05").animate({
                    "bottom": 0
                }, 2000, function () {
                    // 鼠标显示
                    $(".mouse-05-a").animate({
                        "opacity": 1
                    });
                    // 沙发从 800 到  70
                    $(".t1f-05").show().animate({
                        "bottom": 70
                    }, 1000, function () {
                        // 单子上走 走完之后， 我们的文字翻转
                        $(".order-05").animate({
                            "bottom": 390
                        }, function () {
                            $(".words-05").addClass("words-05-a");
                            $(".next").fadeIn();
                        });
                    })
                });
            }
            // 第5屏幕到第6屏幕过渡
            if (index == 5 && nextIndex == 6) {
                // 沙发的距离 当前屏幕的高度 减去  box 的 bottom  500
                $(".t1f-05").animate({
                    "bottom": -(k - 500),
                    "left": "40%",
                    "width": 65
                }, 1500, function () {
                    $(".t1f-05").hide();
                });

                $(".box-06").animate({
                    "left": "38%"
                }, 1500, function () {
                    $(this).animate({
                        "bottom": 40
                    }, 500, function () {
                        $(this).hide();

                        // 行走的过程就是 背景移动的过程
                        // 背景jqury 里面改变比较麻烦  backgroundPositionX  x坐标 
                        // 
                        $(".section6").animate({
                            "backgroundPositionX": "100%"
                        }, 4000, function () {
                            // 当背景动画执行完毕  boy 大小复原  
                            $(".boy").animate({
                                "height": 305,
                                "bottom": 116
                            }, 1000, function () {
                                $(this).animate({
                                    "right": 500
                                }, 500, function () {
                                    // 门显示出来 模拟打开门的效果
                                    $(".door").animate({
                                        "opacity": 1
                                    }, 200, function () {
                                        // 之后girl 显示出来
                                        $(".girl").show().animate({
                                            "right": 350,
                                            "height": 306
                                        }, 500, function () {
                                            $(".pop-07").show();
                                            $(".next").fadeIn();
                                        })
                                    });
                                });
                            });
                        });
                        // 光的速度
                        $(".words-06-a").show().animate({
                            "left": "30%"
                        }, 2000, "easeOutElastic");
                        // 
                        $(".pop-06").show();
                    });
                });

            }

            // 第6屏幕到第7屏幕过渡
            if (index == 6 && nextIndex == 7) {
                setTimeout(function () {
                    $(".star").animate({
                        "width": 120
                    }, 500, function () {
                        $(".good-07").show();
                        $(".next").fadeIn();
                    });

                }, 2000);
            }
            // 这是第8屏幕动画

            // $(".beginShoping").mouseenter(function(event) {
            //     $(".btn-08-a").show();
            // }).mouseleave(function(event) {
            //    $(".btn-08-a").hide();
            // });
            // hover 来替代更简洁  以后一个盒子鼠标经过显示离开隐藏  我们就可以用hover和toggle混搭想必也是极好的
            $(".beginShoping").hover(function () {
                $(".btn-08-a").toggle(); //  toggle  显示和隐藏的切换
            });
            // 大手跟随鼠标移动  
            $(document).mousemove(function (event) {
                var x = event.pageX - $(".hand-08").width() / 2; // 获得鼠标在页面中的x坐标
                var y = event.pageY + 10; // 获得鼠标在页面中的y坐标

                // 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449 
                var minY = k - 449;
                // 把 鼠标在页面中的坐标 给  hand 大手 left  top 
                if (y < minY) {
                    y = minY;
                }

                $(".hand-08").css({
                    "left": x,
                    "top": y
                });
            });

            // 当我们点击 再来一次的 时候， 分两步进行
            $(".again").click(function (event) {
                // 1. 返回第1屏幕 
                $.fn.fullpage.moveTo(1);
                // 2. 所有的动画都复原 就是原来没有看过的样子 
                // 核心原理就是  让我们的图片（做动画的元素 清除 行内样式就可以）
                // 所有带有动画的div 盒子 添加 move 类名
                $("img, .move").attr("style", "");
            });

        }


    });

});
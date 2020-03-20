window.addEventListener('load', function () {
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    const focus = document.querySelector('.focus');
    let focusWidth = focus.offsetWidth;
    // console.log(focus);

    const ul = document.querySelector('.focus>ul');
    // console.log(ul);

    // 2. 鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        // 鼠标移入清除自动播放
        clearInterval(timer);
    });
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        // 鼠标移出自动播放
        timer = setInterval(() => {
            arrow_r.click();
        }, 1000);
    });
    // 3.动态生成小圆圈有几张图片就生成几个小圆圈
    // 获取一共有几张图片
    const lis = document.querySelectorAll('.focus>ul>li');
    // 获取创建li元素的父亲ol
    const circle = document.querySelector('.circle');
    // console.log(circle);

    for (let i = 0; i < lis.length; i++) {
        let li = document.createElement("li");
        circle.appendChild(li);
        // 给每个一li天假num自定义属性方便知道谁是谁
        li.dataset.num = i;

        // 4.小圆点的排他思想
        li.addEventListener("click", function () {
            for (let i = 0; i < lis.length; i++) {
                circle.children[i].className = "";
                // console.log(li);
            }
            this.className = "current";
            // 获取num的数值把数据给它防止变乱
            // arrow_r_count控制右侧按钮
            arrow_r_count = Number(this.dataset.num);
            // lis_circle控制小圆点
            lis_circle = Number(this.dataset.num);



            // 5.ul滚动
            // animate(obj, target, function);

            // 移动的距离是图片的宽度*小圆点的索引
            // let focusWidth = focus.offsetWidth;
            animate(ul, -focusWidth * i)
        })
    }
    circle.children[0].className = "current";



    // 6.克隆第一张图片放在ul的最后一个
    // console.log(ul.children);

    ul.appendChild(ul.children[0].cloneNode(true))
    // // 7.右侧按钮滚动
    let arrow_r_count = 0;


    // 8.每次点击右侧按钮小圆点跟着一起动
    // 创建一个变量来变化
    let lis_circle = 0;
    // 添加节流阀，使得多次点击按钮必须等图片运行完才换成下一张
    let flag = true;
    arrow_r.addEventListener("click", function () {
        if (flag) {
            flag = false;
            // 8.start
            // lis_circle = this.dataset.num - 1
            // lis_circle控制小圆点
            lis_circle++;
            if (lis_circle == circle.children.length) {
                lis_circle = 0;
            }
            // 排他算法
            for (let i = 0; i < circle.children.length; i++) {
                circle.children[i].className = "";
            }
            circle.children[lis_circle].className = "current";
            // 8.end
            // circle.children[lis_circle].className = "current";
            // arrow_r_count控制右侧按钮
            if (arrow_r_count == ul.children.length - 1) {
                ul.style.left = 0;
                console.log(ul);
                arrow_r_count = 0;
            }
            arrow_r_count++;
            animate(ul, -focusWidth * arrow_r_count, function () {
                flag = true;
            });
            // console.log(arrow_r_count);
        }
    })


    // 9.左侧按钮

    arrow_l.addEventListener("click", function () {
        if (flag) {
            flag = false;
            // 8.start
            // lis_circle = this.dataset.num - 1
            // lis_circle控制小圆点
            lis_circle--;
            if (lis_circle < 0) {
                lis_circle = circle.children.length - 1;
            }
            // 排他算法
            for (let i = 0; i < circle.children.length; i++) {
                circle.children[i].className = "";
            }
            circle.children[lis_circle].className = "current";
            // 8.end
            // circle.children[lis_circle].className = "current";
            // arrow_r_count控制右侧按钮
            console.log(arrow_r_count);

            if (arrow_r_count == 0) {
                arrow_r_count = ul.children.length - 1;
                ul.style.left = -arrow_r_count * focusWidth + "px";
            }
            arrow_r_count--;
            // arrow_r_count*focusWidth等于移动的距离
            animate(ul, -focusWidth * arrow_r_count, function () {
                flag = true;
            });
            // console.log(arrow_r_count);
        }
    })

    // 10.自动播放轮播图

    let timer = setInterval(() => {
        arrow_r.click();
    }, 1000);


})
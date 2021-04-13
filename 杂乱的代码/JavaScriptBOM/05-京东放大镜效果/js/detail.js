window.addEventListener("load", () => {
    // 1.鼠标移入盒子显示黄色框和大图片
    // 获取鼠标移入的盒子
    let preview_img = document.getElementsByClassName("preview_img")[0];
    // 获取鼠标移入后显示的黄色盒子
    let mask = document.querySelector(".mask");
    // 获取鼠标移入后显示的大图片
    let big = document.querySelector(".big");
    console.log(preview_img);
    console.log(mask);
    console.log(big);
    // 鼠标移入 preview_img 显示 mask and big
    preview_img.addEventListener("mouseover", function () {
        mask.style.display = "block";
        big.style.display = "block";
    })
    // 鼠标移出 preview_img 隐藏 mask and big
    preview_img.addEventListener("mouseout", function () {
        mask.style.display = "none";
        big.style.display = "none";
    })
    // 2.mask跟随鼠标移动
    preview_img.addEventListener("mousemove", function (e) {
        // 2.1获得鼠标在 preview_img 盒子的坐标
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        // 2.2把数值给mask做left和top值,为了让鼠标在mask的中间我们要移动mask
        let maskX = x - mask.offsetWidth / 2;
        let maskY = y - mask.offsetHeight / 2;
        // 防止 mask 可以被移出 preview_img 
        // mask 最大移动距离
        let maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
            maskY = preview_img.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskX + "px";
        mask.style.top = maskY + "px";



        // 3.大图片的移动距离 = maskX移动距离 * bigImg / mask 最大移动距离
        let bigImg = document.querySelector(".bigImg");
        // bigImg 最大移动距离
        let bigMax = bigImg.offsetWidth - big.offsetWidth;
        // bigImg 移动距离,因为正方形所以 x 和 y 一样
        let bigX = maskX * bigMax / maskMax;
        let bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + "px";
        bigImg.style.top = -bigY + "px";
    })



})
window.addEventListener("load", function () {
    // 功能1，点击留言，用户在文本框中输入内容，先判断输入的内容是否为空，如果为空，则弹出”请填写您的留言“

    // 获取发布留言按钮
    const postBt = document.querySelector('#postBt');
    console.log(postBt);

    // 获取文本域
    const transition = document.querySelector('.transition');
    // 获取留言区
    const comment = document.querySelector('#comment');

    postBt.addEventListener("click", function () {
        if (transition.value.length == 0) {
            alert("请填写您的留言");
        } else {
            // 功能2，如果用户输入的内容不为空，那么就会将内容添加下面的留言区域内，
            // 创建元素
            const span = document.createElement("span");
            // console.log(span);
            // span.className = "name";
            span.innerHTML = `
            
                ${shangtian.value}
                <span class="fr">2020-03-13 21:08:55</span>
                <p>
                  <span class="msg">${transition.value}<input id="clear" type="button" value="删除"></span>
                </p>
            
            `;

            comment.insertBefore(span, comment.children[0]);
            transition.value = "";
            // comment.appendChild(span);


            // 功能4：点击留言区域内的”删除“按钮的时候，会将当前的这一行进行删除

            // const name = document.querySelectorAll('.name');

            const clear = document.querySelectorAll('#clear');
            for (let i = 0; i < clear.length; i++) {
                clear[i].onclick = () => {
                    comment.removeChild(clear[i].parentNode.parentNode.parentNode);
                }
            }
        }
    })



    // 功能3：点击清空留言的时候，下面的留言区的内容就会被清空

    // 获取清空按钮
    const clearBt = document.querySelector('#clearBt');
    clearBt.addEventListener("click", function () {
        let flag = confirm("你确定要清空吗？");
        if (flag) {
            comment.innerHTML = "";
        }
    })


    // 功能5：默认用户点击改变，会弹出prompt，请输入您的文字，点击确定，弹出”欢迎你，xxx“,点击确定，新的昵称就会覆盖那些文字
    const shangtian = document.querySelector('#shangtian');
    shangtian.addEventListener("click", function () {
        let text = prompt("请输入您的文字");
        let flag = confirm("欢迎你，" + text);
        if (flag) {
            shangtian.value = text;
        } else if (text == "") {
            shangtian.value = "默认用户点击改变";
        }

    })


})
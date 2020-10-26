$(function () {
    // - 只需要完成功能，页面已经给定,不能随意编辑html和css

    // - 用户在留言框内输入内容，点击发表，就会在留言区域内添加一条留言的内容,并且留言的数量也会增加
    // 记录留言数量
    let count = 0;
    $(".subbtn").on("click", function () {
        // 留言区的内容      
        let content = $(".content").text();
        // - 如果留言框的内容为空，那么弹出“您还没有输入任何内容”，就不会添加空的内容在留言区
        // console.log(content);

        if (content.trim().length != 0) {
            // - 留言的内容格式在“留言区”已经给定，发表留言的格式请根据这个创建
            $(".msgFrame").prepend(`
            <div class="content_1">
            	         <img class="name" src="http://qlogo3.store.qq.com/qzone/1262283870/1262283870/100?1481718124" alt="photo">
            	         <div class="mainInfo">
            		         <div class="userId"><a href="#">zipple</a></div>
            		         <div class="conInfo">
            				       ${content}
            		            </div>
            		         <div class="time">${getNowTime()}</div>
            		    </div>
            `);
            // 留言的数量也会增加
            count++;
        } else {
            alert("您还没有输入任何内容");
        }

        // 点击后清空内容
        $(".content").html("");


        // 留言的数量也会增加
        $(".numofmessage").html("留言(" + count + ")");
    });



    // - 注意:“留言区”的时间是当前的日期时间

    //   ​       每次发表的留言都是在留言区的最上面  
});


// 时间函数封装
function getNowTime() {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.date = date.getDate();
    this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var currentTime = this.year + '-' + this.month + '-' + this.date + ' ' + this.hour + ':' + this.minute + ':' + this.second;
    return currentTime;
}
let that;
class Tab {
    constructor(id) {
        that = this;
        // 得到大盒子
        this.tabsbox = document.querySelector(id);
        // console.log(this.section);
        // 添加按钮
        this.add = this.tabsbox.querySelector(".tabadd");
        // 获取tab标签的父亲
        this.ul = this.tabsbox.querySelector(".fisrstnav ul");
        // 获取tab内容的父亲
        this.tabscon = this.tabsbox.querySelector(".tabscon");

        console.log(this);
        this.init();
    }
    //绑定事件
    init() {
        this.updataNode();
        //tab切换
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].section = i;
            this.lis[i].onclick = this.toggle;
            // 删除按钮绑定点击事件
            this.remove[i].onclick = this.deleteTab;
            this.spans[i].ondblclick = this.editTab;
            this.section[i].ondblclick = this.editTab;
        }
        // 添加按钮
        this.add.onclick = this.addTab;

    }
    // 更新节点获取
    updataNode() {
        // 得到tab标签
        this.lis = document.querySelectorAll(".fisrstnav li");
        // 得到span
        this.spans = document.querySelectorAll(".fisrstnav li span:first-child");
        // console.log(this.lis);
        // 得到tab内容标签
        this.section = document.querySelectorAll(".tabscon section");
        // 得到删除按钮
        this.remove = this.ul.querySelectorAll(".icon-guanbi");
    }
    //切换功能
    toggle() {
        that.clearName();
        // console.log(this.index);
        this.className = "liactive";
        that.section[this.index].className = "conactive";
        // console.log(that.section);
    }
    clearName() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.section[i].className = "";
        }
    }
    //添加功能
    addTab() {
        that.clearName();
        let math = Math.random();
        let li = `<li class="liactive"><span>新标签</span><span class="iconfont icon-guanbi"></span></li>`;
        let section = `<section class="conactive">${math}</section>`;
        that.ul.insertAdjacentHTML("beforeend", li);
        that.tabscon.insertAdjacentHTML("beforeend", section);
        // console.log(that.tabscon);
        that.init();
    }
    //删除功能
    deleteTab(e) {
        e.stopPropagation();
        // 得到点击的索引
        let cIndex = this.parentNode.index;
        // 标签删除
        this.parentNode.remove()
        // 标签内容删除
        that.section[cIndex].remove()
        // 初始化
        that.init();
        // 如果点击的有.liactive这个类就不执行下面的代码
        // console.log(this.parentNode)
        if (document.querySelector(".liactive")) return false;
        // 点击删除让前一个标签选中
        that.lis[cIndex - 1] && that.lis[cIndex - 1].click();
    }
    //修改功能
    editTab(e) {
        e.stopPropagation()
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // console.log(this)
        // console.dir(this)
        // if (this.tagName == "SPAN" || this.tagName == "SECTION") {
        // 得到span里面的文字
        let spanText = this.innerHTML;
        this.innerHTML = `<input type="text" value='${spanText}'/>`;
        // 选中input
        let input = this.children[0];
        input.select();
        // 失去焦点把input的内容给span
        input.onblur = function () {
            // console.log(1)
            // console.log(input.value)
            this.parentNode.innerHTML = input.value;
        }
        input.onkeyup = function (e) {
            if (e.keyCode == 13) {
                input.blur();
            }
        }
        input.ondblclick = function (e) {
            e.stopPropagation();
            input.blur();
        }
        // }



    }
}

new Tab("#tab");
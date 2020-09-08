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
        }
        // 添加按钮
        this.add.onclick = this.addTab;
    }
    // 更新节点获取
    updataNode() {
        // 得到tab标签
        this.lis = document.querySelectorAll(".fisrstnav li");
        // console.log(this.lis);
        // 得到tab内容标签
        this.section = document.querySelectorAll(".tabscon section");
    }
    //切换功能
    toggle() {
        that.clearName();
        console.log(this.index);
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
    delete() {}
    //修改功能
    edit() {}
}

new Tab("#tab");
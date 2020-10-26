let that;
class Tab {
    constructor(id) {
        that = this;
        // 获取元素
        this.tab = document.querySelector(id);
        // 得到ul
        this.ul = this.tab.querySelector(".fisrstnav ul");
        // 得到tabscon
        this.tabscon = this.tab.querySelector(".tabscon");
        // console.log(this.lis)
        console.log(that);
        this.tabadd = this.tab.querySelector(".tabadd");
        // 初始化绑定事件
        this.init();
    }

    // 绑定事件
    init() {
        this.updateNode();
        // 添加按钮
        this.tabadd.onclick = this.addTab;
        for (let i = 0; i < this.lis.length; i++) {
            // 给索引
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            // 关闭按钮
            this.delete[i].onclick = this.deleteTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    updateNode() {
        // 得到lis
        this.lis = this.tab.querySelectorAll(".fisrstnav ul li");
        // 得到sections
        this.sections = this.tab.querySelectorAll(".tabscon section");
        this.delete = this.tab.querySelectorAll(".fisrstnav .icon-guanbi");
        this.spans = this.tab.querySelectorAll(".fisrstnav li span:first-child");
    }
    // 情况classname
    clearName() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = "";
            this.sections[i].className = "";
        }
    }
    // tab切换功能
    toggleTab() {
        that.init();
        that.clearName();
        this.className = "liactive";
        that.sections[this.index].className = "conactive";
    }

    // 添加功能
    addTab() {
        that.init();
        that.clearName();
        // console.log(1)
        let li = `<li class="liactive"><span>新标签</span><span class="iconfont icon-guanbi"></span></li>`;
        // console.log(that.ul)
        that.ul.insertAdjacentHTML("beforeend", li);
        let section = `<section class="conactive">${Math.random()}</section>`;
        that.tabscon.insertAdjacentHTML("beforeend", section);
    }

    // 删除功能
    deleteTab(e) {
        e.stopPropagation()
        // console.log(this.parentNode)
        // 删除this的父亲li
        this.parentNode.remove();
        // 删除索引
        let index = this.parentNode.index;
        console.log(that.sections[index])
        that.sections[index].remove();
        // 删除之后让前一个选中

        that.lis[index - 1] && that.lis[index - 1].click();

    }

    editTab() {
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // console.log(this)
        // 得到双击的内容
        let text = this.innerHTML;
        // 双击
        this.innerHTML = `<input type="text" value='${text}'/>`;

        // 得到input 
        let input = this.children[0];
        input.onblur = function () {
            this.parentNode.innerHTML = input.value;
        }
        input.onkeyup = function (e) {
            if (e.keyCode == 13) {
                input.blur();
            }
        }
    }
}

new Tab("#tab");
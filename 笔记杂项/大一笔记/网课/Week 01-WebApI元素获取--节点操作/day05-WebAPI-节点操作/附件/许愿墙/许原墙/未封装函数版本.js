    //模拟数据
    var messages = [{
            "id": 1,
            "name": "mahu",
            "content": "今天你拿苹果支付了么",
            "time": "2016-02-17 00:00:00"
        },
        {
            "id": 2,
            "name": "haha",
            "content": "今天天气不错，风和日丽的",
            "time": "2016-02-18 12:40:00"
        },
        {
            "id": 3,
            "name": "jjjj",
            "content": "常要说的事儿是乐生于苦",
            "time": "2016-03-18 12:40:00"
        },
        {
            "id": 4,
            "name": "9.8的妹纸",
            "content": "把朋友家厕所拉堵了 不敢出去 掏了半小时了都",
            "time": "2016-03-18 12:40:00"
        },
        {
            "id": 5,
            "name": "雷锋ii.",
            "content": "元宵节快乐",
            "time": "2016-02-22 12:40:00"
        },
        {
            "id": 6,
            "name": "哎呦哥哥.",
            "content": "据说今晚央视的元宵晚会导演和春晚导演是同一个人，真是躲得过初一，躲不过十五。",
            "time": "2016-02-22 01:30:00"
        },
        {
            "id": 7,
            "name": "没猴哥，不春晚",
            "content": "班主任:“小明，你都十二岁了，还是三年级，不觉得羞愧吗”？。小明:“一点也不觉得，老师你都四十多岁了，不也是年年在三年级混日子吗？羞愧的应该是你”。老师:……",
            "time": "2016-02-22 01:30:00"
        },
        {
            "id": 8,
            "name": "哎呦杰杰.",
            "content": "真搞不懂你们地球人，月亮有什么好看的，全是坑，还是对面那哥们好看，",
            "time": "2016-02-22 01:30:00"
        },
    ];

    // 功能一：根据给定的数据，在页面中创建对应的许愿签，(页面中已经给定一个许愿签的格式，参照那个格式创建许愿签)，参照完之后将页面的这个许愿签删除了

    // 获取元素cotent在这个元素的里面创建node
    const content = document.querySelector('#content');

    // 创建一个class是tip1的div
    let div = document.createElement("div");
    content.insertBefore(div, content.children[0]);
    // 获取这个div
    const tip1 = content.children[0];
    // 给这个div添加属性
    tip1.className = "tip1";
    tip1.id = "tip7";
    // 随机位置
    tip1.style.top = parseInt(Math.random() * 446) + "px";
    tip1.style.left = parseInt(Math.random() * 773) + "px";

    // 在class是tip1的div里面创建一个class是tip_h的div
    let div1 = document.createElement("div");
    tip1.appendChild(div1);
    // 获取这个div
    const tip_h = tip1.children[0];
    // 添加属性
    tip_h.className = "tip_h";
    tip_h.title = "双击关闭纸条";

    //在class是tip_h的div里面创建一个class是num的div  
    let div2 = document.createElement("div");
    tip_h.appendChild(div2);
    // 获取这个div
    const num = tip_h.children[0];
    // 添加属性
    num.className = "num";
    // 填充对象id和time
    num.innerHTML = "第[" + messages[0]["id"] + "]条 " + messages[0]["time"];

    //在class是tip_h的div里面创建一个class是close的div  
    let div3 = document.createElement("div");
    tip_h.appendChild(div3);
    // 获取这个div
    const closeC = tip_h.children[1];
    // 添加属性
    closeC.className = "close";
    closeC.title = "关闭纸条";
    closeC.innerHTML = "x";


    //在class是tip_h的div里面创建一个class是clr的div  
    let div4 = document.createElement("div");
    tip_h.appendChild(div4);
    // 获取这个div
    const tip_h_clr = tip_h.children[2];
    tip_h_clr.className = "clr";
    /* tip_h结束 */



    // 在class是tip1的div里面创建一个class是tip_c的div
    let div5 = document.createElement("div");
    tip1.appendChild(div5);
    // 获取这个元素
    const tip_c = tip1.children[1];
    tip_c.className = "tip_c";
    // 填充对象content
    tip_c.innerHTML = messages[0]["content"];
    /* tip_c结束 */


    // 在class是tip1的div里面创建一个class是tip_f的div
    let div6 = document.createElement("div");
    tip1.appendChild(div6);
    // 获取这个元素
    const tip_f = tip1.children[2];
    tip_f.className = "tip_f";


    // 在class是tip_f的div里面创建一个class是icon的div
    let div7 = document.createElement("div");
    tip_f.appendChild(div7);
    // 获取这个元素
    const icon = tip_f.children[0];
    icon.className = "icon";

    // 在class是icon的div里面创建一个img
    let img = document.createElement("img");
    icon.appendChild(img);
    // 获取这个元素
    const icon_img = icon.children[0];
    icon_img.src = "images/bpic_1.gif";
    icon_img.alt = "";
    icon_img.title = "";

    // 在class是tip_f的div里面创建一个class是name的div
    let div8 = document.createElement("div");
    tip_f.appendChild(div8);
    // 获取这个元素
    const name = tip_f.children[1];
    name.className = "name";
    // 填充对象name
    name.innerHTML = messages[0]["name"];

    //在class是tip_f的div里面创建一个class是clr的div  
    let div9 = document.createElement("div");
    tip_f.appendChild(div9);
    // 获取这个div
    const tip_f_clr = tip_f.children[2];
    tip_f_clr.className = "clr";
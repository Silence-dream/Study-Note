window.onload = function () {
  let vm = Vue.createApp({});

  let cart_title_template = {
    props: ["uname"],
    template: `
      <div class="title">{{uname}}的商品</div>
      `,
  };
  let cart_list_template = {
    props: ["list"],

    template: `
    <div>
        <div class="item" v-for="(item,value) in list" :key="item.id">
        <img :src="item.img" />
        <div class="name">{{item.name}}</div>
        <div class="change">
            <a href="">－</a>
            <input type="text" class="num" :value="item.num"/>
            <a href="">＋</a>
        </div>
        <div class="del" @click="del(item.id)">×</div>
        </div>
    </div>
      `,
    methods: {
      del(id) {
        this.$emit("delete", id);
      },
    },
  };
  let cart_total_template = {
    props: ["list"],
    computed: {
      /**
       *返回总价
       */
      sumTotal() {
        //保存list数据
        let list = this.list;
        let sum = 0;

        for (let i = 0; i < list.length; i++) {
          sum += list[i].price * list[i].num;
        }
        return sum;
      },
    },
    template: `
    <div class="total">
        <span>总价：{{sumTotal}}</span>
        <button>结算</button>
    </div>
    `,
  };

  vm.component("cart", {
    data() {
      return {
        uname: "张三",
        list: [
          {
            id: 1,
            name: "TCL彩电",
            price: 1000,
            num: 1,
            img: "img/a.jpg",
          },
          {
            id: 2,
            name: "机顶盒",
            price: 1000,
            num: 1,
            img: "img/b.jpg",
          },
          {
            id: 3,
            name: "海尔冰箱",
            price: 1000,
            num: 1,
            img: "img/c.jpg",
          },
          {
            id: 4,
            name: "小米手机",
            price: 1000,
            num: 1,
            img: "img/d.jpg",
          },
          {
            id: 5,
            name: "PPTV电视",
            price: 1000,
            num: 2,
            img: "img/e.jpg",
          },
        ],
      };
    },
    methods: {
      /**
       * 删除方法
       * @param {number}  id
       */
      delNode(id) {
        let index = this.list.findIndex((ele) => {
          return ele.id == id;
        });
        this.list.splice(index, 1);
      },
    },
    template: `
    <div class="cart">
      <cart-title :uname="uname"></cart-title>
      <cart-list :list="list" @delete="delNode"></cart-list>
      <cart-total :list=list></cart-total>
    </div>`,
    components: {
      "cart-title": cart_title_template,
      "cart-list": cart_list_template,
      "cart-total": cart_total_template,
    },
  });

  vm.mount("#app");
};

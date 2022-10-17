<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              :checked="isChecked"
              @click="allChecked"
              readonly
            />
            <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <!-- <tbody> -->
      <List
        :goodList="goodList"
        @dChecked="dChecked"
        @updateNum="updateNum"
        @removeItem="removeItem"
      ></List>
      <!-- </tbody> -->
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{ total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import List from "./components/List.vue";

export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
      isChecked: false,
    };
  },
  methods: {
    // 数量更新
    updateNum(obj) {
      // 加
      if (obj.type === "+") {
        this.goodList.forEach(function (item) {
          if (item.name == obj.name) {
            item.num++;
          }
        });
      }
      // 减
      if (obj.type === "-") {
        this.goodList.forEach(function (item) {
          if (item.name == obj.name) {
            if (item.num <= 0) return;
            item.num--;
          }
        });
      }
    },
    // 全选
    allChecked() {
      this.isChecked = !this.isChecked;
      for (let index = 0; index < this.goodList.length; index++) {
        this.goodList[index].checked = this.isChecked;
      }
    },
    // 单选
    dChecked(name) {
      // 单选判断
      this.goodList.forEach(function (item) {
        if (item.name == name) {
          item.checked = !item.checked;
        }
      });
      // 全选判断   true的数量===length 全选上
      let count = 0;
      this.goodList.forEach(function (item) {
        if (item.checked == true) {
          count++;
        }
      });
      if (count === this.goodList.length) {
        this.isChecked = true;
      } else {
        this.isChecked = false;
      }
    },
    // 删除
    removeItem(name) {
      this.goodList.forEach((item, index) => {
        if (item.name === name) {
          this.goodList.splice(index, 1);
        }
      });
    },
  },
  components: {
    List,
  },
  computed: {
    total: function () {
      let total = 0;
      this.goodList.forEach(function (item) {
        total += item.price * item.num;
      });
      return total;
    },
  },
};
</script>

<style></style>

<template>
  <div class="todo">
    <!-- 输入框及搜索按钮 -->
    <div class="todo-header">
      <!-- 输入框-->
      <input type="text" placeholder="请输入任务" v-model="task" />
      <!-- 按钮 -->
      <button @click="addTask">添加事项</button>
    </div>
    <!-- 列表 -->
    <ul class="todo-main">
      <li
        v-for="(item, index) in filterList"
        :key="item.id"
        :data-index="index"
      >
        <input
          type="checkbox"
          :checked="item.done"
          @change="updateTask(item.id)"
        />
        <span>{{ item.info }}</span>
        <!-- <a href="" @click.prevent="delTask(item.id)">删除</a> -->

        <a href="" @click.prevent="deleteData(item.id)">删除</a>
      </li>
      <!-- <li>
        <input type="checkbox" /> <span>标记静态内容，并区分动态内容</span>
        <a href="">删除</a>
      </li>
      <li>
        <input type="checkbox" /> <span>标记静态内容，并区分动态内容</span>
        <a href="">删除</a>
      </li> -->
    </ul>
    <!-- 底部菜单 -->
    <div class="todo-footer">
      <p>{{ surplus }}条剩余</p>
      <div class="todo-footer-button">
        <!-- all 全部  undone 未完成  done 已完成 -->
        <button
          :class="viewkey == 'all' ? 'primary' : ''"
          @click="changeKey('all')"
        >
          全&nbsp;&nbsp;部
        </button>
        <button
          :class="viewkey == 'undone' ? 'primary' : ''"
          @click="changeKey('undone')"
        >
          未完成
        </button>
        <button
          :class="viewkey == 'done' ? 'primary' : ''"
          @click="changeKey('done')"
        >
          已完成
        </button>
      </div>
      <a href="" @click.prevent="cleanData">清除已完成</a>
    </div>
  </div>
</template>

<script>
// 引入vuex中的map开头的方法
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      task: ""
    };
  },
  // 当页面打开,对页面数据进行初始化
  created() {
    this.$store.dispatch("getData");
  },
  methods: {
    // 映射mutations中的方法
    ...mapMutations(["deleteData", "cleanData", "changeKey"]),
    // 添加任务
    addTask() {
      // 如果task的值为空 不能进行调用vuex中的方法
      if (!this.task.trim()) {
        alert("请输入您的待办事务");
        return;
      }
      // 如果不为空 可以调用
      this.$store.commit("createData", this.task);
      this.task = "";
    },

    // 删除任务
    // delTask(id) {
    //   this.$store.commit("deleteData", id);
    // }

    // 改变任务状态
    updateTask(id) {
      // console.log(id);
      // console.log(event);
      let param = {
        id: id,
        status: event.target.checked
      };

      // console.log(param)
      this.$store.commit("updateData", param);
    }

    // 改变任务分类
    // changeTask(cate){
    //   this.$store.commit("changeKey",cate)
    // }
  },
  // 计算属性
  computed: {
    // 获取list数据
    ...mapState(["list", "viewkey"]),
    // 获取未完成的任务的个数
    ...mapGetters(["surplus", "filterList"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.todo {
  margin: 0 auto;
  margin-top: 20px;
  width: 500px;
  min-height: 500px;
  box-sizing: border-box;
}

.todo-header {
  position: relative;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.todo-header input {
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 5px;
  border-radius: 3px;
  vertical-align: text-bottom;
}

.todo-header button {
  border: none;
  outline: none;
  position: absolute;
  right: -100px;
  top: -2px;
  border-radius: 3px;
  width: 80px;
  height: 30px;
  background-color: rgb(64, 145, 247);
  line-height: 30px;
  color: #fff;
}

.todo-main {
  list-style: none;
  margin: 0;
  padding: 0;

  margin-top: 10px;
  border: 1px solid #ccc;
  line-height: 20px;
  text-align: left;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.todo-main li {
  border-top: 1px solid #ccc;
  padding: 10px 15px;
}

.todo-main li:first-child {
  border: none;
}
.todo-main li input {
  position: relative;
  top: 1px;
  margin-right: 5px;
}
.todo-main li a {
  float: right;
}
.todo-footer {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-top: none;
  height: 50px;
  overflow: hidden;
}

.todo-footer p {
  line-height: 50px;
}

.todo-footer-button button {
  border: none;
  margin-top: 10px;
  line-height: 24px;
  padding: 0 15px;
  padding-top: 2px;
  background-color: #fff;
  color: #333;
}

.todo-footer-button button:focus {
  outline: none;
  border-color: transparent;
  box-shadow: none;
}

.todo-footer-button button:first-child {
  border: 1px solid #ccc;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.todo-footer-button button:nth-child(2) {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  vertical-align: top;
}
.todo-footer-button button:last-child {
  border: 1px solid #ccc;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.todo-footer-button button.primary {
  background-color: rgb(69, 146, 239);
  color: #fff;
}

.todo-footer a {
  line-height: 50px;
}
</style>

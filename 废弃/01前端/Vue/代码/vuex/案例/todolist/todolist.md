# day14-ToDoLists

## 初始化项目

### 1.创建并初始化项目

```shell
  vue create todolist
```

### 2.配置vuex

2.1 store/index.js

```js
// 引入vuex
import { createStore } from "vuex";
export default createStore({
  state() {
    return {};
  },
  // 只有mutations能动state
  mutations: {
  },
  actions: {
  },
  getters: {
  }
});

```

2.2 main.js

```js
import { createApp } from "vue";

import App from "./App.vue";
import store from "./store";

createApp(App)
  .use(store)
  .mount("#app");
```

### 3.配置axios

3.1 store/index.js

```js
import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state() {
    return {};
  },
  // 只有mutations能动state
  mutations: {
  },
  actions: {
  },
  getters: {
  }
});

```

### 4.配置ant-design-vue

4.1 安装ant-design-vue包

```shell
npm install ant-design-vue@next --save
```

4.2 配置ant-design-vue包(src/main.js)

```js
import { createApp } from "vue";
// 引入包
import Antd from "ant-design-vue";
// 引入样式文件
import "ant-design-vue/dist/antd.css";

import App from "./App.vue";
import store from "./store";


createApp(App)
  .use(store)
  // 挂载包
  .use(Antd)
  .mount("#app");
```

## 展示任务

### 1.把list.json放到public文件夹中

### 2.在actions中声明GetData方法用来请求数据

```js
 // 通过异步axios获取数据
    async getData(context) {
      // 使用axios请求list.json数据
      let res = await axios.get("/list.json");
      // 调用mutation中的方法对数据进行修改
      context.commit("initData", res);
    }
```

### 3.在mutations声明init方法

```js
 // 载荷 payload
    // 初始化数据
    initData(state, payload) {
      // 把state中的数据进行修改
      state.list = payload.data;
    }
```

### 4.在state中声明数据

```js
 state() {
    return {
      list: []
    };
  },
```
### 5.在computed计算属性中进行映射
```js
<script>
// 引入vuex中的map开头的方法
import {mapState} from "vuex";

export default {
  // 当页面打开,对页面数据进行初始化
  created() {
    this.$store.dispatch("getData");
  },
  // 计算属性
  computed: {
    // 获取list数据
    ...mapState(['list'])
  }
};
</script>
```
### 6.在App.vue组件中渲染数据

```html
 <li v-for="(item, index) in list" :key="item.id" :data-index="index">
        <input
          type="checkbox"
          :checked="item.done"
          @change="updateTask(item.id, $event)"
        />
        <span>{{ item.info }}</span>
        <a href="" @click.prevent="delTask(item.id)">删除</a>
      </li>
```



## 添加任务

### 1.在mutations中声明createData方法

```js
   // 添加数据
    createData(state, payload){
      state.list.push({
        id: new Date().valueOf(),
        info: payload,
        done: false
      })
    }
```

### 2.在methods中声明addTask方法

```js
   // 添加任务
    addTask(){
      // 如果task的值为空 不能进行调用vuex中的方法
      if (!(this.task.trim())) {
        alert("请输入您的待办事务");
        return ;
      }
      // 如果不为空 可以调用
      this.$store.commit("createData", this.task);
      this.task = "";
    }
```

### 3.在输入框中进行双向绑定task值

3.1 在模板中

```html
<input type="text" placeholder="请输入任务" v-model="task" />
```

3.2 在数据中

```js
  data() {
    return {
      task: ""
    };
  },
```

### 4.当点击页面上的添加事项按钮的时候，把输入的任务添加进去

```html
 <!-- 输入框及搜索按钮 -->
    <div class="todo-header">
      <!-- 输入框-->
      <input type="text" placeholder="请输入任务" v-model="task" />
      <!-- 按钮 -->
      <button @click="addTask">添加事项</button>
    </div>
```

## 删除任务

### 1.在mutation中声明deleteData方法

```js
// 删除数据
    deleteData(state, payload) {
      let index = state.list.findIndex(item => item.id == payload);
      if (index != -1) {
        state.list.splice(index, 1);
      }
    },
```

### 2.在methods中定义delTask方法用来触发deleteData方法

```js
 // 删除任务
    delTask(id) {
      this.$store.commit("deleteData", id);
    },
```

### 3.当我们点击每项后面的删除按钮的时候 调用delTask方法并传id

```html
  <a href="" @click.prevent="delTask(item.id)">删除</a>
```

## 改变任务状态

### 1.mutations中声明updateData

```js
 // 更新数据(更新任务状态)
    updateData(state, payload) {
      let index = state.list.findIndex(item => item.id == payload.id);
      if (index != -1) {
        state.list[index].done = payload.status;
      }
    },
```

### 2.在methods中声明updateTask

```js

 // 改变任务状态
    updateTask(id, $event) {
      let param = {
        id: id,
        status: $event.target.checked
      };
      this.$store.commit("updateData", param);
    },

```

### 3.当input的状态发生变化时，传递checked和id

```html
<input
  type="checkbox"
  :checked="item.done"
  @change="updateTask(item.id, $event)"
/>
```

## 剩余项统计

### 1.在getters中声明 surplus方法选出未完成的

```js
 surplus(state){
      // 挑出属性done为false的对象 添加到data这个数组中
      let data = state.list.filter(item=>item.done == false);
      // 返回数组的长度
      return data.length;
    }
```

### 2.在computed属性中进行映射

```js
   // 计算属性
  computed: {
    // 获取未完成的任务的个数
    ...mapGetters(["surplus"])
  }
```

### 3.在模板中使用

```html
<p>{{surplus}}条剩余</p>
```

## 清除已完成任务

### 1.在mutations中定义cleanData方法

```js
// 清除数据(清除已完成数据)
    cleanData(state) {
      state.list = state.list.filter(item => item.done === false);
    },
```

### 2.在methods中定义cleanTask方法

```js
 // 清除已完成任务
    cleanTask() {
      this.$store.commit("cleanData");
    },
```

### 3.点击清除已完成按钮调用cleanTask方法

```html
      <a href="" @click.prevent="cleanTask">清除已完成</a>
```

## 点击选项卡切换事项

### 1.在state中定义viewkey作为分类关键字

```js
state() {
    return {
      list: [],
      viewKey: "all"
    };
  },
```

### 2.computed中把viewkey映射到组件中

```js
 computed: {
    ...mapState(["viewKey"]),
  }
```

### 3.根据分类关键字让对应的button选中

```html
      <div class="todo-footer-button">
        <button
          :class="viewKey === 'all' ? 'primary' : ''"
          >
          全&nbsp;&nbsp;部
        </button>
        <button
          :class="viewKey === 'undone' ? 'primary' : ''"
        >
          未完成
        </button>
        <button
          :class="viewKey === 'done' ? 'primary' : ''"
        >
          已完成
        </button>
      </div>
```

### 4.当点击三个按钮其中之一，调用ChangeTask

```html
<div class="todo-footer">
      <p>{{ census }}条剩余</p>
      <div class="todo-footer-button">
        <button
          :class="viewKey === 'all' ? 'primary' : ''"
          @click="changeTask('all')"
        >
          全&nbsp;&nbsp;部
        </button>
        <button
          :class="viewKey === 'undone' ? 'primary' : ''"
          @click="changeTask('undone')"
        >
          未完成
        </button>
        <button
          :class="viewKey === 'done' ? 'primary' : ''"
          @click="changeTask('done')"
        >
          已完成
        </button>
      </div>
```

### 5.调用changeTask方法，把分类关键字传给changeKey

```js
// 切换选项卡
    changeTask(key) {
      this.$store.commit("changeKey", key);
    }
```

### 6.通过changekey方法改变state中的viewkey为传来的关键字

```js
// 切换任务分类
    changeKey(state, key) {
      state.viewKey = key;
    }
```

### 7.在getters中定义filterList来过滤各种任务

```js
 getters: {
    census: state => {
      let data = state.list.filter(x => x.done === false);
      return data.length;
    },
    filterList(state) {
      if (state.viewKey === "all") {
        return state.list;
      }
      if (state.viewKey === "undone") {
        return state.list.filter(x => x.done === false);
      }
      if (state.viewKey === "done") {
        return state.list.filter(x => x.done === true);
      }
    }
  }
```

### 8.把模板中的列表变成filterList

```html
 <!-- 列表 -->
    <ul class="todo-main">
      <li v-for="(item, index) in filterList" :key="item.id" :data-index="index">
        <input
          type="checkbox"
          :checked="item.done"
          @change="updateTask(item.id, $event)"
        />
        <span>{{ item.info }}</span>
        <a href="" @click.prevent="delTask(item.id)">删除</a>
      </li>
    </ul>
```
<template>
  <h3>用户管理页面</h3>
  <table>
    <thead>
      <th>编号</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>操作</th>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td><a href="" @click.prevent="handleRouter(item.id)">详情</a></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      list: [
        { id: 1, name: "张三", age: 10 },
        { id: 2, name: "李四", age: 20 },
        { id: 3, name: "王五", age: 30 },
        { id: 4, name: "赵六", age: 40 }
      ]
    };
  },
  methods: {
    handleRouter(id) {
      console.log(id);
      this.$router.push("/userInfo/" + id);
    }
  }
};
</script>

<style></style>

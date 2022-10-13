<template>
  <tbody>
    <tr v-for="item in goodList" :key="item.name">
      <td>
        <input
          type="checkbox"
          :checked="item.checked"
          @click="dChecked(item.name)"
        />
      </td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>
        <input
          type="button"
          value="-"
          @click="
            updateNum({
              type: '-',
              name: item.name,
            })
          "
        />
        {{ item.num }}
        <input
          type="button"
          value="+"
          @click="
            updateNum({
              type: '+',
              name: item.name,
            })
          "
        />
      </td>
      <td>{{ item.price * item.num }}</td>
      <td>
        <button @click="removeItem(item.name)">删除</button>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: ["goodList"],
  methods: {
    updateNum(obj) {
      this.$emit("updateNum", obj);
    },
    dChecked(name) {
      this.$emit("dChecked", name);
    },
    removeItem(name) {
      this.$emit("removeItem", name);
    },
  },
};
</script>

<style></style>

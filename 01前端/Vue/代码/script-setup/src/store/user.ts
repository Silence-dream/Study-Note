import {
  defineStore
} from 'pinia';

export const useStore= defineStore("user", {
  state: () => ({
    usename: "张三"
  })
})
import vue from "vue";

export default function (context,inject) {
  // 注入 vue 原型
  vue.prototype.$test = "这里是test"
  inject('myServer',() => {
    return "这里是 server"
  })
  console.log("插件执行了")
}


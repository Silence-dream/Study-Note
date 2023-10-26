import {
  isFunction
} from "./utils"
import {
  observe
} from './observe';
// 初始化数据
export default function initState(vm) {
  // 得到数据
  let options = vm.$options
  // console.log(options)
  // 我们先处理 data 里面的数据
  if (options.data) {
    // 为什么不直接传递 data?
    // 因为在 initData 函数中还要使用到 vm, 所以此处传 vm 而不是直接传递 data
    initData(vm)
  }
}


function initData(vm) {
  // 获取 data 中的数据
  let data = vm.$options.data
  // 判断 data 是否是函数 如果是函数直接调用获取对象，如果 data 是对象直接使用。
  // data = isFunction(data) ? data() : data
  // 使用 call 来改变 this 指向，使得 this 指向 vm 而不是 window
  data = isFunction(data) ? data.call(vm) : data

  // 现在我们获得了数据来开始 劫持数据
  observe(data);
  console.log(data)
}
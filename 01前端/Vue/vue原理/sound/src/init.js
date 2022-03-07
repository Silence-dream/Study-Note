import initState from "./initState";

// 初始化混入  拆分代码为了更好的维护
export default function initMixin(options) {
  options.prototype._init = function (options) {
    // this  指向实例 TinyVue
    // 把数据挂载到实例上方便调用
    // 初始化数据, 即进行数据劫持, 在 options 参数中有 data、computed 等参数都表示数据, 都需要被劫持, 为方便代码维护, 我们要此项工作写入单独的方法, 该方法的名字叫  initState
    this.$options = options;
    // 数据劫持 数据初始化
    initState(this)
  }
}
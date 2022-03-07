import initMixin from './init';
// 构造函数
function TinyVue(options) {
  this._init(options);
}

// 初始化混入
initMixin(TinyVue)

export default TinyVue;
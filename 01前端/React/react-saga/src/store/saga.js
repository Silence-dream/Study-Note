// 导入redux-saga
import { takeEvery, takeLatest, put } from 'redux-saga/effects'
import { GET_SCRECT } from './constants'
import { saveScrect } from "./action"


// 发请求的 action
// 保存数据 action
function* getData() {
  const data = yield fetch("http://localhost:8080/getdata").then(res => {
    console.log(res);
    return res.json()
  }).then((data) => data.quotation);

  // console.log(data);
  // 保存数据呢？
  // dipatch
  yield put(saveScrect(data));
}










// 假设有三次连续的请求 且每个请求耗时2秒
// takeEvery
// 所有的请求都能完整的发送并且接收到数据
// takeLatest
// 只发送最新的请求,三次请求耗时都很短，那么三次都可以成功 
// takeLatest有随机性


// 拦截anction 需要创建 generate函数(生成器函数)
export default function* mySaga() {
  // console.log("我是saga文件")

  // 你要拦截那种类型的Action action中有没有type属性
  // 使用takeEvery方法 判断是哪种类型的Action，如果是这种类型
  // 那么就拦截 拦截之后干什么事情就触发什么方法
  // takeEvery(Action类型, 请求方法)
  yield takeEvery(GET_SCRECT, getData)
}

// 导入reducer 执行数据更新操作的
import reducer from "./reducer"
import saga from './saga'
// 引入redux，创建store
import { createStore, applyMiddleware, compose } from "redux";
// 创建sagaMiddleWara的工厂函数
import createSagaMiddleware from "redux-saga";
// 使用工厂函数来创建 中间件
const sagaMiddleware = createSagaMiddleware();
// 把sagaMiddleware注册到redux
const storeEnhance = applyMiddleware(sagaMiddleware);

// trace 是否允许追踪
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 通过createStore创建store
const store = createStore(reducer, composeEnhancers(storeEnhance));
// 导入saga文件

sagaMiddleware.run(saga)
// 导出store
export default store;
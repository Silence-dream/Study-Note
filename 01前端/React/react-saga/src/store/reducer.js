
// 初始化数据
const initialState = {
  screct: "234asdfuiofsdafjew4euisdf000"
}


// 创建reducer函数
const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "SAVE_SCRECT":
      return {
        screct: action.screct
      }
    default:
      return state;
  }

}


export default reducer;
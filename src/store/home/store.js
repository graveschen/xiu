// 纯函数 --- 没有随机数，---- 输入确定输出一定确定
const reducer = (state = {
  list: [],
  bannerdata: []
}, action) => {
  const { type, data } = action; // type表示你要做的事行为，data就是传递过来的数据
  switch (type) {
    // 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
    case 'CHANGE_BANNER_DATA':
      // state.bannerdata = data
      // return state
      return {
        list: state.list,
        bannerdata: data
      }
    case 'CHANGE_LIST_DATA':
      return {
        list: data,
        bannerdata: state.bannerdata
      }
    default:
      return state;
  }
}

export default reducer;
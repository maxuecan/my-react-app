import { CountState } from '../state.js'
import { CountActions } from './action.js'

const defaultState: CountState = {
    count: 0,
    str: '测试',
    bol: false,
    n_arr: [],
    n1_arr: [],
    str_arr: [],
    str1_arr: [],
    bol_arr: [],
    bol1_arr: [],
    tuple1: [0, '', false, [], [], [], [], [], []],
    color: 1,
    obj: {},
}

export default function countReducer(
    preState: CountState = defaultState, 
    action: CountActions,
): CountState {
  // 从action对象中获取：type,data
  const { type, payload } = action;
  // 根据type决定加工数据
  switch (type) {
    // 加
    case "increment":
      return {
        ...preState,
        count: preState.count + payload,
      };
    //  减
    case "decrement":
      return {
        ...preState,
        count: preState.count - payload
      };
    default:
      return preState;
  }
}

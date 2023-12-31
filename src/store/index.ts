/*
 * @Author: 苟培烜 3541037829@qq.com
 * @Date: 2023-10-12 22:20:51
 * @LastEditors: 苟培烜 3541037829@qq.com
 * @LastEditTime: 2023-10-12 22:21:05
 * @FilePath: \temp-nav-site\src\store\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'redux';

const initialState = {
  counter: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
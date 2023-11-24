// 1. rootReducer를 만들 것이고 -> reducer를 합칠거야
// modules 밑에는 여러 파일들이 반환하는 값
// 현재 : todos, counter, users

import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from '../modules/todos';

const rootReducer = combineReducers({
  todos,
});
// 2. 이걸 이용해서 store를 만들것이다(Main)
const store = createStore(rootReducer);

export default store;



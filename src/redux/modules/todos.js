
 import uuidv4 from "react-uuid";

// 1. action items
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";
// 2. action creators
export const addTodo = (payload) => {  // 저장 역활 export를 쓰는 이유:addTodo를 Component나 pages에서 사용
  return {
    action: ADD_TODO,
    payload,
  };
};
export const  removeTodo = (payload) => {
return {
  action : REMOVE_TODO,
  payload,
};
};
export const switchTodo = (payload) =>{
return {
  action : SWITCH_TODO,
  payload,
};
};
// 3. initial State => reducer를 구성할때
const initialState = [  //   initialState는 useSelector 로 검색이 되야함 
  {
    id:uuidv4(),
    title: "제목1",
    body: "내용1",
    isDone: false,
  },
  {
    id:uuidv4(),
    title: "제목1",
    body: "내용1",
    isDone: true,
  },
  {
    id:uuidv4(),
    title: "제목1",
    body: "내용1",
    isDone: false,
  },
];
// 4. reducer를 만들 것
// 리듀서  
const todos = (state = initialState, action) => {  // action 객체는 type과 payload가 담겨져있음
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]; // todos.js의 newTodo로 들어감
    case REMOVE_TODO:
      return state.filter(item => item.id !== action.payload); 
    case SWITCH_TODO:
      return state.map(item => {
        if(item.id === action.payload){
          return {...item, isDone: !item.isDone};   //isDone을 반대로 바꿔줌
        } else {
          return item;
        }
      }); 
    default:
      return state;
  }
};
// 5. reducer를 export 

export default todos;

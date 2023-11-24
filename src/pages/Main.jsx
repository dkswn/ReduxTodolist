// 메인 페이지 
import React from "react";
import Header from '../Components/Header';
import Input from "../Components/Input";
import TodoList from "../Components/TodoList";




const Main = () => {
  return <>
  <Header />
    <Input/>
    <TodoList isActive = {true}/> 
    <TodoList isActive = {false}/>
    </>;
}

export default Main;

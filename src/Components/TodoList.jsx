import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeTodo, switchTodo } from '../redux/modules/todos';
import {  useNavigate } from 'react-router-dom';

function TodoList({isActive}) {  // props로 isActive로 전달받음 
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const todos = useSelector((state)=>state.todos);
    console.log("todos", todos);
    return <StyledListBox>
        <h4>{isActive ? "해야할 일 🥲 " : "완료된 일 😘" } </h4> 
        {
            todos.filter(item => item.isDone === !isActive) // item의 isDone이 isActive와 다를 경우 
            .map(item=>{
                return (<StyledTodoBox key={todos.id}>
                 <h4>{item.title}</h4>
                    <p>{item.body}</p>
                    {/* <p>{item.isDone.toString()}</p> */}
                    <button onClick = {()=>{
                            dispatch({
                                type: switchTodo, // action creator
                                payload: item.id,
                            })
                    }}>완료</button>
                    <button onClick={()=>{
                        dispatch({
                            type: removeTodo,
                            payload:item.id,
                        })
                    }}>삭제</button>
                    <button onClick={()=>Navigate("/detail:id")}>상세보기</button>
                </StyledTodoBox>
        
                )
            })
        }
    </StyledListBox>
}

export default TodoList ;

const StyledListBox = styled.div`
    background-color: beige;
    padding: 20px;
`;

const StyledTodoBox = styled.div`
    background-color:brown ;
    color: white;
    padding: 10px;
    margin: 5px;
`;
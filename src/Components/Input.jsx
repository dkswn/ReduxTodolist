import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos"; // 1.action creator를 임포트
import { v4 as uuidv4} from "uuid";

function Input () {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const dispatch = useDispatch();

    const SubmitButtonHandler = (e) =>{  
        e.preventDefault();
        // action creators 의 객체 생성 
        const newTodo = [{
            id: uuidv4(),
            title,
             body,
            isDone: false,
        }];
        // action creators 를 인자에 넣고 action creators의 인자를 생성 
        dispatch(addTodo(newTodo)); // todos에 잇는 ADD_TODO의 리턴이 들어감(newTodo안에)
    };
    const OnchangetitleButtonListener = (event) =>{
        setTitle(event.target.value);
    };
    const OnchangeBodyButtonListener = (event) => {
        setBody(event.target.value);
    };
    return  <StyledInputBox>
        <form onSubmit={SubmitButtonHandler}>
            <input  value={title}  onChange={OnchangetitleButtonListener} type="text"/>
            <input  value={body}  onChange={OnchangeBodyButtonListener} type="text"/>
            <button type="submit">
                등록하기
            </button>
            </form>
        </StyledInputBox>
    
}

export default Input;

const StyledInputBox = styled.div`
    background-color: aqua;
    padding: 20px;
`;
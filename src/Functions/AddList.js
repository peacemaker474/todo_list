import React, { useContext } from 'react';
import styled from 'styled-components';
import {ListContext} from '../Components/App';

// 스타일 영역
const Form = styled.form`
    text-align: center;
    margin-bottom: 20px;
    height: 10%;
`;
const Input = styled.input`
    all:unset;
    width: 80%;
    height: 60%;
    margin-top: 10px;
    border: 1px solid aqua;
    border-radius: 5px;
`;

const AddList = () => {
    const {toDoList, setToDoList} = useContext(ListContext);

    const handleSaveData = (event) => {
        event.preventDefault();
        // 기존의 concat을 활용했으나, spread로 간결하게 했음.
        const newData = [...toDoList, {
            id: Date.now(),
            text: event.target[0].value,
        }]
        setToDoList(newData);
        event.target[0].value = "";
        
    }
    return (
        <>
            <Form onSubmit={handleSaveData}>
                <Input name="list" placeholder="할일을 입력해주세요." />
            </Form>
        </>
    )
};

export default AddList;
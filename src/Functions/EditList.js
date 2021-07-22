import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListContext } from '../Components/App';

const Title = styled.h2`
    font-size: 22px;
    text-align: center;
    margin-top: 30px;
`;

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

const EditList = () => {
    const {toDoList, setToDoList, editList, setModalEdit} = useContext(ListContext);

    const handleEditList = (event) => {
        event.preventDefault();
        const copyData = [...toDoList];
        const editData = copyData.map(item => {
            if(item.id === editList.id) {
                item.text = event.target[0].value;
            }
            return item
        })
        setToDoList(editData);
        setModalEdit(false)
        
    }

    return (
        <>
            <Title>수정</Title>
            <Form onSubmit={handleEditList}>
                <Input name="list" defaultValue={editList.text} />
            </Form>
        </>
    )
}

export default EditList;
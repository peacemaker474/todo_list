import React, { useState } from 'react';
import styled from 'styled-components';
import ToDoList from '../Functions/ToDoList';
import AddList from '../Functions/AddList';
import EditList from '../Functions/EditList';
import FnToDoList from '../Functions/FnToDoList';

// 스타일 영역
const Main = styled.main`
    width: 500px;
    height: 500px;
    margin: 50px auto;
    border: 1px solid black;
    border-radius: 10px;
`;

const Title = styled.h1`
    width: 100%;
    height: 20%;
    font-size: 36px;
    text-align: center;
    line-height: 100px;
`;

const MainUI = () => {
    const [modalEdit, setModalEdit] = useState(false);
    return (
        <Main>
            <Title>MY TODO LIST</Title>
            <AddList />
            <ToDoList modalEdit={modalEdit} setModalEdit={setModalEdit} />
            {modalEdit ? <EditList setModalEdit={setModalEdit} /> : null}
            <FnToDoList />
        </Main>
    )
}

export default MainUI;
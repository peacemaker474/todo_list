import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListContext } from '../Components/App';

const List = styled.ul`
    width: 80%;
    margin: 0 auto;
`;
const Lists = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;
const BtnBox = styled.div`
`;

const ShowList = () => {
    const {toDoList, setToDoList, modalEdit, setModalEdit, setEditList} = useContext(ListContext);

    const handleEditList = (event) => {
        setEditList(null);
        setModalEdit(!modalEdit);
        const {target : {
            parentNode : {
                parentNode
            }
        }} = event;
        const copyData = [...toDoList];
        const editData = copyData.filter(item => item.id === parseInt(parentNode.id));
        setEditList(...editData);
    }

    const handleDeleteList = (event) => {
        const {target : {
            parentNode : {
                parentNode
            }
        }} = event;
        const copyData = [...toDoList];
        const deleteData = copyData.filter(item => item.id !== parseInt(parentNode.id));
        setToDoList(deleteData);
    }
    return (
        <>
            <List>
            {toDoList && toDoList.map(item =>
                <Lists key={item.id} id={item.id}>
                    <span>{item.text}</span>
                    <BtnBox>
                        <button onClick={handleDeleteList}>삭제</button>
                        <button onClick={handleEditList}>수정</button>
                    </BtnBox>
                </Lists>
            )}
            </List>
        </>
    )
}

export default ShowList;
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
const Text = styled.span`
    text-decoration: line-through;
    color: rgba(10, 10, 10, 0.4);
`;
const BtnBox = styled.div`
`;

const FnToDoList = () => {
    const {fnToDoList, setFnToDoList} = useContext(ListContext);
    const handleDeleteList = (event) => {
        const {target : {
            parentNode : {
                parentNode
            }
        }} = event;
        const copyData = [...fnToDoList];
        const deleteData = copyData.filter(item => item.id !== parseInt(parentNode.id));
        setFnToDoList(deleteData);
    }
    return (
        <>
            <List>
            {fnToDoList && fnToDoList.map(item =>
                <Lists key={item.id} id={item.id}>
                    <Text>{item.text}</Text>
                    <BtnBox>
                        <button onClick={handleDeleteList}>삭제</button>
                    </BtnBox>
                </Lists>
            )}
            </List>
        </>
    )
}

export default FnToDoList;
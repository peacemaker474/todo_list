import React, {useState} from 'react';
import styled from 'styled-components';
import AddModal from './AddModal';

const LayerTodo = styled.section`
    width: 90%;
    height: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-gap: 1.3rem;
`;

const LayerDays = styled.div`
    width: 80%;
    height: 80%;
    border: 3px solid #33322e;
    border-radius: 15px;
    box-shadow: 12px 12px 0px #33322e;
    background-color:rgba(249,243,229, 1);
    &:last-child {
        background-color: #D0F4F0;
    };
    position: relative;
`;

const DaysTitle = styled.h3`
    font-size: 2.1rem;
    font-weight: bold;
    width:100%;
    height:25%;
    padding: 15px 0 0 10px;
    border-bottom: 3px solid #33322e;
`;

const AddButton = styled.button`
    all: unset;
    width: 25px;
    height: 25px;
    font-size: 2.1rem;
    border: 1px solid rgba(10, 10, 10, .35);
    border-radius: 50%;
    text-align: center;
    padding: 2px 0 0 2px;
    position: absolute;
    bottom: 2%;
    right: 2%;
`;

const Lists = styled.ul`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
`;

const TodoList = styled.li`
    width: 90%;
    font-size: 1.2rem;
    margin: 0px auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
`;

const ToDo = styled.span`
    font-size: 1.2rem;
    width: 90%;
    padding: 8px 0;
`;

const DeleteBtn = styled.button`
    all: unset;
    width: 5%;
    height: 5%;
    padding: 8px 0;
`;

const TodoDays = () => {
    const [addModal, setAddModal] = useState(true);
    const [todoList, setTodoList] = useState(
        [
            {
                id: 0,
                day: "Monday",
                list: [],
            }, 
            {
                id: 1,
                day: "Tuesday",
                list: [],
            },
            {
                id: 2,
                day: "Wednesday",
                list: [],
            },
            {
                id: 3,
                day: "Thursday",
                list: [],
            }, 
            {
                id: 4,
                day: "Friday",
                list: [],
            }, 
            {
                id: 5,
                day: "Saturday",
                list: [],
            }, 
            {
                id: 6,
                day: "Sunday",
                list: [],
            },
            {
                id: 7,
                day: "Notes",
                list: [],
            }
        ]
    );

    return (
        <LayerTodo>
            {todoList.map(item => (
                <LayerDays key={item.id}>
                    <DaysTitle> {item.day} </DaysTitle>
                    <Lists>
                        {item.list && item.list.map(date => (
                            <>
                                <TodoList id={item.day}> 
                                    <ToDo> {date} </ToDo>
                                    <DeleteBtn type="button" > ❌ </DeleteBtn>
                                </TodoList>
                            </>
                        ))}
                    </Lists>
                    {addModal ? 
                        <AddButton type="button"> ➕ </AddButton> 
                        : <AddModal /> 
                    }
                </LayerDays>
            ))}
        </LayerTodo>
    )
}

export default TodoDays;
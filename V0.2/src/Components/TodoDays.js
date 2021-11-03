import React, {useState} from 'react';
import styled from 'styled-components';

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

const ModalForm = styled.form`
    width: 100%;
    height: 10%;
    position: absolute;
    bottom: 2%;
    left: 4%;
`;

const ModalInput = styled.input`
    all: unset;
    width: 90%;
    height: 100%;
    font-size: 1.4rem;
    padding-left: 5px;
`;

const Test = styled.ul`
    width: 100%;
    height: 10%;
`;

const TestLi = styled.li`

`;

const ModalComponent = ({onSubmit, id}) => (
    <ModalForm id={id} onSubmit={onSubmit}>
        <ModalInput placeholder="할일을 입력하세요" type="text" />
    </ModalForm>
)

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

    const handleAddToDoList = evt => {
        setAddModal(!addModal);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        todoList.forEach(item => {
            if (item.day === evt.target.id) {
                item.list.push(evt.target.lastChild.value);
            }
        });
        setAddModal(true);
    }

    return (
        <LayerTodo>
            {todoList.map(item => (
                <LayerDays key={item.id}>
                    <DaysTitle> {item.day} </DaysTitle>
                    <Test>
                        {item.list && item.list.map(date => (
                            <TestLi> {date} </TestLi>
                        ))}
                    </Test>
                    {addModal ? <AddButton id={item.day} type="button" onClick={handleAddToDoList}> ➕ </AddButton> : <ModalComponent id={item.day} onSubmit={onSubmit}/> }
                </LayerDays>
            ))}
        </LayerTodo>
    )
}

export default TodoDays;
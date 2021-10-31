import React from 'react';
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
    }
`;

const DaysTitle = styled.h3`
    font-size: 2.1rem;
    font-weight: bold;
    width:100%;
    height:25%;
    padding: 15px 0 0 10px;
    border-bottom: 3px solid #33322e;
`;

const TodoDays = () => {
    const daysList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Notes"];

    return (
        <LayerTodo>
            {daysList.map(item => (
                <LayerDays>
                    <DaysTitle> {item} </DaysTitle>
                </LayerDays>
            ))}
        </LayerTodo>
    )
}

export default TodoDays;
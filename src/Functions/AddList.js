import React, { useContext } from 'react';
import {ListContext} from '../Components/App';

const AddList = () => {
    const {toDoList, setToDoList} = useContext(ListContext);

    const handleSaveData = (event) => {
        event.preventDefault();
        const newData = toDoList.concat({
            id: Date.now(),
            text: event.target[0].value,
        });
        setToDoList(newData);
        event.target[0].value = "";
        
    }
    return (
        <>
            <form onSubmit={handleSaveData}>
                <input name="list" placeholder="할일을 입력해주세요." />
            </form>
        </>
    )
};

export default AddList;
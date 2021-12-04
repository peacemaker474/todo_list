import React, { useState } from "react";

function ToDoList () {
    const [toDo, setToDo] = useState("");

    const onChange = (evt:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = evt;
        setToDo(value);
    }

    const onSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(toDo);
        setToDo("");
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} placeholder="Write a to do" value={toDo}/>
                <button> Add </button>
            </form>
        </>
    )
}

export default ToDoList;
import { isEmpty } from 'lodash';
import React, { useContext, useEffect } from 'react';
import { ListContext, LIST_NAME } from './App';

const ShowList = () => {
    const {toDoList, setToDoList} = useContext(ListContext);

    useEffect(() => {
        const requestList = window.localStorage.getItem(LIST_NAME);
        console.log(requestList, 2);
        if(isEmpty(requestList)) {
          const parserList = JSON.parse(requestList);
          setToDoList(parserList);
        }
      }, []);

    const handleDeleteList = ({target : {parentNode}}) => {
        const copyData = [...toDoList];
        const deleteData = copyData.filter(item => item.id !== parseInt(parentNode.id));
        setToDoList(deleteData);
    }
    return (
        <>
            <ul>
            {toDoList && toDoList.map(item =>
                <li key={item.id} id={item.id}>
                    <span>{item.text}</span>
                    <button onClick={handleDeleteList}>삭제하기</button>
                </li>
            )}
            </ul>
        </>
    )
}

export default ShowList;
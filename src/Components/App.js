import React, {useState, createContext, useEffect} from 'react';
import isEmpty from 'lodash';
import ShowList from './ShowList';
import AddList from '../Functions/AddList';

export const ListContext = createContext("");
export const LIST_NAME = "할일";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const store = {toDoList, setToDoList};

  useEffect(() => {
    const requestList = window.localStorage.getItem(LIST_NAME);
    if(isEmpty(requestList)) {
      const parserList = requestList !== null ? JSON.parse(requestList) : [...toDoList];
      setToDoList(parserList);
    }
  }, []);
  
  useEffect(() => {
    if(isEmpty(toDoList)){
      window.localStorage.setItem(LIST_NAME, JSON.stringify(toDoList));
    } else if(toDoList.length === 0){
      window.localStorage.setItem(LIST_NAME, JSON.stringify(toDoList));
    }
}, [toDoList]);
  
  return (
    <div className="App">
      <ListContext.Provider value={store}>
        <ShowList />
        <AddList />
      </ListContext.Provider>
    </div>
  );
}

export default App;

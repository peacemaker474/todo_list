import React, {useState, createContext, useEffect} from 'react';
import isEmpty from 'lodash';
import GlobalStyle from './GlobalStyles';
import MainUI from './MainUI';

// 할일 목록은 주요 데이터기 때문에, App에서 관리한다.
// Context API 및 useContext를 이용하여, 데이터 전달
export const ListContext = createContext("");
const LIST_NAME = "할일목록";
const LIST_FNNAME = "완료목록";

// 컴포넌트
function App() {
  const [toDoList, setToDoList] = useState([]);
  const [fnToDoList, setFnToDoList] = useState([]);
 // MainUI에서 설정하는 것도 나쁘지 않다.
  const [editList, setEditList] = useState();
  const store = {
    toDoList, 
    setToDoList, 
    editList, 
    setEditList,
    fnToDoList,
    setFnToDoList
  };

  // 첫 렌더링 시에만 로컬 스토리지에서 데이터를 받아온다. 힐일목록과 완료목록
  useEffect(() => {
    const requestList = window.localStorage.getItem(LIST_NAME);
    // requestList가 "null" 값으로 받아와서, 조건부로 받아왔다. => 오류 수정 필요
    if(isEmpty(requestList)) {
      const parserList = requestList !== null ? JSON.parse(requestList) : [...toDoList];
      setToDoList(parserList);
    }
  }, []);

  useEffect(() => {
    const requestList = window.localStorage.getItem(LIST_FNNAME);
    // requestList가 "null" 값으로 받아와서, 조건부로 받아왔다. => 오류 수정 필요
    if(isEmpty(requestList)) {
      const parserList = requestList !== null ? JSON.parse(requestList) : [...fnToDoList];
      setFnToDoList(parserList);
    }
  }, []);

  // 할일을 추가하거나, 삭제할 시 렌더링이 필요하여, deps로 할일목록과 완료목록을 넘겨줬다.
  useEffect(() => {
    if(isEmpty(toDoList)){
      window.localStorage.setItem(LIST_NAME, JSON.stringify(toDoList));
    } else if(toDoList.length === 0){
      window.localStorage.setItem(LIST_NAME, JSON.stringify(toDoList));
    }
}, [toDoList]);

  useEffect(() => {
    if(fnToDoList !== null) {
      window.localStorage.setItem(LIST_FNNAME, JSON.stringify(fnToDoList));
    }
  }, [fnToDoList]);
  
  return (
    <div className="App">
      <GlobalStyle />
      <ListContext.Provider value={store}>
        <MainUI />
      </ListContext.Provider>
    </div>
  );
}

export default App;

import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, IToDo, toDoState } from "../atoms";

const Button = styled.button`
    all: unset;
    &:not(:last-child) {
        margin-right: 5px;
    }
`;

function ToDo ({text, category, id}: IToDo) {
    const setToDoList = useSetRecoilState(toDoState);
    // const onClick = (newCategory: IToDo["category"]) => () =>  {
    //     console.log(evt, newCategory);
    // }
    const onClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: {name}
        } = evt;
        setToDoList((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            const newToDo = {text, id, category: name as any};
            if (category === Categories.DELETE) {
                const deleteToDo = oldToDos.filter(todo => todo.id !== id);
                return [...deleteToDo];
            }
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        })
    }

    return (
        <li> 
            <span> {text} </span>
            {category !== Categories.TO_DO && <Button name={Categories.TO_DO} onClick={onClick}> 📜 </Button>}
            {category !== Categories.DOING && <Button name={Categories.DOING} onClick={onClick}> ⏩ </Button>}
            {category !== Categories.DONE && <Button name={Categories.DONE} onClick={onClick}> ✅ </Button>}
            {category !== Categories.DELETE && <Button name={Categories.DELETE} onClick={onClick}> ❌ </Button>}
        </li>
    )
}

export default ToDo;
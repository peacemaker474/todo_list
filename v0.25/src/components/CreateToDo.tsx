import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo () {
    const category = useRecoilValue(categoryState);
    const setToDoList = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const handleValid = ({ toDo }:IForm) => {
        setToDoList(oldToDos => [
            { id: Date.now(), text: toDo, category }, 
            ...oldToDos
        ]);
        setValue("toDo", "");
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("toDo", {
                    required: "Please write a To Do",
                })}
                placeholder="Write a to do"
            />
            <button> Add </button>
        </form>
    );
}

export default CreateToDo;
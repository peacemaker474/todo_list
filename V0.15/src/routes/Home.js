import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import { actionCreators } from '../store';

const Home = ({ toDos, addToDo }) => {
    const [text, setText] = useState("");

    const onChange = evt => {
        setText(evt.target.value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1> To Do </h1>
            <form onSubmit={onSubmit} >
                <input type="text" placeholder="Write To do" value={text} onChange={onChange} />
                <button> Add </button>
            </form>
            <ul>
                {toDos.map(toDo => (
                    <ToDoList {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    )
};

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { toDos: state }
}

const mapDispatchToProps = dispatch => {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
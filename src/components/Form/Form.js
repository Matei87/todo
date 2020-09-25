import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../../context/TaskContext';
import './Form.css';
import { v4 as uuid } from 'uuid';

const Form = () => {
    const [task, setTask] = useState({
        text: '',
        id: ''
    });
    const { text } = task;
    const { tasks, addTask, current, editTask, clearInput, clearInputList } = useContext(TaskContext);
    const taskContext = useContext(TaskContext);
    useEffect(() => {
        if (current !== null) {
            setTask(current);
            //console.log(current);
        } else {
            setTask({ text: '', id: '' })
        }
        //console.log(current)
    }, [taskContext, current])

    const onchange = (e) => {
        setTask({ ...task, text: e.target.value, id: uuid() });
    }
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    })
    const onsubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addTask(task);
        } else {
            editTask({ ...task, id: current.id });
            setTask(current);
        }
        clearInput();
    }
    //console.log(current);
    return (
        <form onSubmit={onsubmit}>
            <input type="text" className="form-control" value={text} onChange={onchange} required />
            <div>
                <button type="submit" className="btn">{current ? 'Edit' : 'Submit'}</button>
                <button type="submit" className="btn" onClick={() => clearInputList()}>Clear</button>
            </div>
        </form>
    )
}

export default Form;
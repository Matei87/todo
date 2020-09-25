import React, { useContext } from 'react';
import { TiPencil, TiTrash } from "react-icons/ti";
import { TaskContext } from "../../context/TaskContext";
import './Task.css';


const Task = ({ task }) => {
    const { deleteTask, setCurrent } = useContext(TaskContext);
    //console.log(task);

    return (
        <li><h5>{task.text}</h5><TiPencil onClick={() => setCurrent(task)} />
            <TiTrash onClick={() => deleteTask(task.id)} /></li>
    )
}

export default Task;
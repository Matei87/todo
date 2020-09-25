import React, { useContext } from 'react';
import { TaskContext } from "../../context/TaskContext";
import Task from '../Task/Task';

const Tasks = () => {
    const { tasks } = useContext(TaskContext);
    //console.log(tasks)
    return (
        <>
            { tasks ? <>
                <ul>
                    {
                        tasks.map(task => {
                            return <Task task={task} key={task.id} />;
                        })
                    }
                </ul> </> : ''}
        </>
    )
}

export default Tasks;

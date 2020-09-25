import React, { useReducer } from 'react';
import { TaskContext } from './TaskContext';
import { TaskReducer } from './TaskReducer';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_CURRENT_TODO, CLEAR_TODO, CLEAR_TODOS } from './types';

//create Task Component aka TaskState
export const TaskState = (props) => {
    const tasksInitial = localStorage.getItem('tasks');
    const initialState = {
        tasks: JSON.parse(tasksInitial) || [],
        current: null
    };

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    //add a Task action
    const addTask = (task) => {
        dispatch({ type: ADD_TODO, payload: task })
    }
    //delete a Task action
    const deleteTask = (id) => {
        dispatch({ type: DELETE_TODO, payload: id })
    }
    //edit a task action
    const editTask = (task) => {
        dispatch({ type: EDIT_TODO, payload: task })
    }
    //set task to current action
    const setCurrent = (task) => {
        dispatch({ type: SET_CURRENT_TODO, payload: task })
    }
    //clear input action
    const clearInput = (task) => {
        dispatch({ type: CLEAR_TODO })
    }
    //clear input list action
    const clearInputList = (task) => {
        dispatch({ type: CLEAR_TODOS })
    }
    //console.log(state, dispatch)
    return (
        <TaskContext.Provider
            value={
                {
                    tasks: state.tasks,
                    current: state.current,
                    addTask,
                    deleteTask,
                    editTask,
                    setCurrent,
                    clearInput,
                    clearInputList

                }
            }
        >
            {props.children}
        </TaskContext.Provider >
    )
}
import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_CURRENT_TODO, CLEAR_TODO, CLEAR_TODOS } from './types';


//create reducer actions by type or the TASKREDUCER
export const TaskReducer = (state, action) => {
    //console.log(state, action);
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            };
        case DELETE_TODO:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case EDIT_TODO:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            };
        case SET_CURRENT_TODO:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_TODO:
            return {
                ...state,
                current: null
            };
        case CLEAR_TODOS:
            return {
                ...state,
                tasks: []
            };
        default:
            return state;
    }
}
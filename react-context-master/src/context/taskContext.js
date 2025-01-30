

import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'


const taskReducer = (state,action) =>{
    switch (action.type){
        case "ADD_TASK":
            const id = Math.random()*100
            let task ={...action.payload,id}
            return {...state,taskList:[...state.taskList,task]}
        case "DELETE_TASK":
           let list = state.taskList.filter((task)=>task.id !== action.payload.id)
            return {...state,taskList:list}
        case "UPDATE_TASK":
            let updateTask = state.taskList.map((task)=> task.id === action.payload.id ? action.payload : task )
            return {...state,taskList:[...updateTask]}
        case "READ_TASK":
            return state.taskList
        case "SET_SELECTED":
            return {...state,selectedTask:{...action.payload}}
        case "GET_SELECTED":
            return state.selectedTask
        default:
            return state

    }
}


export const TaskContext = createContext()


const TaskContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(taskReducer,
        {taskList: [],
        selectedTask: {}
    })
    return (

            <TaskContext.Provider value={{state,dispatch}}>
                {children}
            </TaskContext.Provider>
    
    )
}

export default TaskContextProvider




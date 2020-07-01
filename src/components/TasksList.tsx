import * as React from 'react';

import {Task} from "../types/taskType";
import {ActionType} from "../types/stateType";
import {useContext} from "react";
import {ContextApp} from "./App";

const TasksList: React.FC = () => {

    const {state, changeState} = useContext(ContextApp);

    const removeTask = (taskForRemoving: Task) => {
        changeState({type: ActionType.Remove, payload: taskForRemoving})
    }
    const toggleReadiness = (taskForChange: Task) => {
        changeState({type: ActionType.Toggle, payload: taskForChange})
    }

    return (
        <>
            <ul>
                {state.tasks.map((task,i)=>(
                    <li key={i} className={task.isDone ? 'ready' : null}>
                        <label>
                            <input type="checkbox" onChange={()=>toggleReadiness(task)} checked={task.isDone}/>
                        </label>
                        <div className="task-name">
                            {task.name}
                        </div>
                        <button className='remove-button' onClick={()=>removeTask(task)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default TasksList;

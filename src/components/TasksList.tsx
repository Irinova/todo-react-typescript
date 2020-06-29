import * as React from 'react';

import {Task, Tasks} from "../types/taskType";

interface Props {
    tasks: Tasks;
    removeTask: (taskForRemoving: Task) => void;
    toggleReadiness: (taskForChange: Task) => void;
}

const TasksList: React.FC<Props> = ({tasks, removeTask, toggleReadiness}) => {
    return (
        <>
            <ul>
                {tasks.map((task,i)=>(
                    <li key={i} className={task.isDone ? 'ready' : null}>
                        <label>
                            <input type="checkbox" onChange={()=>toggleReadiness(task)} checked={task.isDone}/>
                        </label>
                        {task.name}
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

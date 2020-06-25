import * as React from 'react';

import {Tasks} from "../types/taskType";

interface Props {
    tasks: Tasks;
}

const TasksList: React.FC<Props> = ({tasks}) => {
    return (
        <>
            <ul>
                {tasks.map(task=>(
                    <li>
                        {task.name}
                    </li>
                ))}
            </ul>
        </>
    )
};

export default TasksList;

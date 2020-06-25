import * as React from 'react';
import {useState} from "react";

import NewTask from "./NewTask";
import TasksList from "./TasksList";

import {Task} from "../types/taskType";


const App = () => {
    const [newTask, editTask] = useState<string>('');
    const [tasks, setTasks] = useState<Array<Task>>([]);

    const addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        editTask(event.target.value);
    }

    return (
        <>
            <div>
                <NewTask
                    task={newTask}
                    addTask={addTask}
                    changeTask={changeTask}
                />
                <TasksList tasks={tasks} />
            </div>
        </>
    )
}

export default App;

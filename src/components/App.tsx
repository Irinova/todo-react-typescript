import * as React from 'react';
import {useState} from "react";

import NewTask from "./NewTask";
import TasksList from "./TasksList";

import {TaskName, Tasks} from "../types/taskType";


const App = () => {
    const [newTaskName, setTaskName] = useState<TaskName>('');
    const [tasks, setTasks] = useState<Tasks>([]);

    const addTask = (event: React.FormEvent<HTMLFormElement>, task: TaskName) => {
        event.preventDefault();
        setTasks([...tasks, {
            name: task,
            isDone: false
        }]);
        setTaskName('');
    }

    const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(event.target.value);
    }

    return (
        <>
            <div>
                <NewTask
                    taskName={newTaskName}
                    addTask={addTask}
                    changeTask={changeTask}
                />
                <TasksList
                    tasks={tasks}
                />
            </div>
        </>
    )
}

export default App;

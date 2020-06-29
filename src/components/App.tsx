import * as React from 'react';
import {useState} from "react";

import NewTask from "./NewTask";
import TasksList from "./TasksList";

import {TaskName, Task, Tasks} from "../types/taskType";


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

    const removeTask = (taskForRemoving: Task) => {
        setTasks(previousTasks => (
            [...previousTasks.filter(task => task.name !== taskForRemoving.name)]
        ))
    }
    const toggleReadiness = (taskForChange: Task) => {
        setTasks(previousTasks => (
            [...previousTasks.map((task) => (task !== taskForChange ? task : {...task, isDone: !task.isDone}))]
        ))
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
                    removeTask={removeTask}
                    toggleReadiness={toggleReadiness}
                />
            </div>
        </>
    )
}

export default App;

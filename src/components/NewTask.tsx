import * as React from 'react';

interface Props {
    changeTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addTask: (event: React.FormEvent<HTMLFormElement>) => void;
    task: string;
}

const NewTask: React.FC<Props> = ({task, addTask, changeTask}) => {
    return (
        <>
            <form onSubmit={(event)=>addTask(event)}>
                <input type='text' onChange={(event)=>changeTask(event)} value={task}/>
                <button type="submit">Add a task</button>
            </form>
        </>
    )
};

export default NewTask;

import {todoReducer} from "../reducers/todoReducer";
import {ActionType, Action, State} from "../types/stateType";
import {Task} from "../types/taskType";

describe('todoReducer',()=>{
    it('returns new state for "Add" type', () => {
        const initialState: State = {newTask: '', tasks: []};
        const updateAction: Action = {type: ActionType.Add, payload: 'new task'};
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({newTask: '', tasks: [{name: 'new task', isDone: false}]});
    });

    it('returns new state for "Remove" type', () => {
        const task: Task = {name: 'new task', isDone: false}
        const initialState: State = {newTask: '', tasks: [task]};
        const updateAction: Action = {type: ActionType.Remove, payload: task};
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({newTask: '', tasks: []});
    });

    it('returns new state for "Toggle" type', () => {
        const task: Task = {name: 'new task', isDone: false}
        const initialState: State = {newTask: '', tasks: [task]};
        const updateAction: Action = {type: ActionType.Toggle, payload: task};
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({newTask: '', tasks: [{name: 'new task', isDone: true}]});
    });

    it('returns new state for "Change" type', () => {
        const initialState: State = {newTask: '', tasks: []};
        const updateAction: Action = {type: ActionType.Change, payload: 'new task'};
        const updatedState = todoReducer(initialState, updateAction);
        expect(updatedState).toEqual({newTask: 'new task', tasks: []});
    });
})


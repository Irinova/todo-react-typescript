import * as React from 'react';
import {ContextApp} from "../components/App";

import {shallow} from "enzyme";
import {render} from "@testing-library/react";
import {renderHook } from '@testing-library/react-hooks';

import {useReducer} from "react";
import {todoReducer} from "../reducers/todoReducer";

import TasksList from "../components/TasksList";

describe('<TasksList />',() => {

    const testState = {
        newTask: '',
        tasks: [{name: 'test', isDone: false}, {name: 'test2', isDone: false}]
    }

    const { result } = renderHook(()=> useReducer(todoReducer, testState));
    const [state, changeState] = result.current;

    const wrapper =
        <ContextApp.Provider value={{state, changeState}}>
            <TasksList/>
        </ContextApp.Provider>;

    it('renders the component without changes', () => {
        const component = shallow(wrapper);
        expect(component).toMatchSnapshot();
    });

    it('should render right input value', () => {
        const {container} = render(wrapper);
        expect(container.querySelectorAll('li')).toHaveLength(testState.tasks.length);
    });

})

import * as React from 'react';
import {ContextApp} from "../components/App";

import {shallow} from "enzyme";
import {render} from "@testing-library/react";
import {renderHook } from '@testing-library/react-hooks';

import {useReducer} from "react";
import {todoReducer} from "../reducers/todoReducer";

import NewTask from "../components/NewTask";

describe('<NewTask />',() => {

    const testState = {
        newTask: 'new task',
        tasks: []
    }
    const { result } = renderHook(()=> useReducer(todoReducer, testState));
    const [state, changeState] = result.current;

    const wrapper =
        <ContextApp.Provider value={{state, changeState}}>
            <NewTask/>
         </ContextApp.Provider>;

    it('renders the component without changes', () => {
        const component = shallow(wrapper);
        expect(component).toMatchSnapshot();
    });

    it('should render right input value', () => {
        const {container} = render(wrapper);
        expect(container.querySelector('input').getAttribute('value')).toEqual(testState.newTask);
    });

})

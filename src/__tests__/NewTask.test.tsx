import * as React from 'react';
import {ContextApp} from "../components/App";
import {shallow} from "enzyme";
import {render, fireEvent, wait } from "@testing-library/react";
import {renderHook } from '@testing-library/react-hooks';

import {createContext, useReducer} from "react";
import {todoReducer} from "../reducers/todoReducer";

import NewTask from "../components/NewTask";
import {State, ContextState} from "../types/stateType";

describe('<NewTask />',() => {

    const testState: State = {
        newTask: 'new task',
        tasks: []
    }

    const { result } = renderHook(()=> useReducer(todoReducer, testState));
    const [state, changeState] = result.current;

    const ContextState: ContextState = {
        state,
        changeState
    };

    const wrapper =
        <ContextApp.Provider value={ContextState}>
            <NewTask/>
         </ContextApp.Provider>;

    it('renders the component without changes', () => {
        const component = shallow(wrapper);
        expect(component).toMatchSnapshot();
    });

    it('should render right input value',  async () => {
        const {container } = render(wrapper);
        expect(container.querySelector('input').getAttribute('value')).toEqual(testState.newTask);
        fireEvent.change(container.querySelector('input'), { target: { value: '23' } })
        await wait(() => {
            expect(container.querySelector('input').getAttribute('value')).toEqual('');
        });
    });

})

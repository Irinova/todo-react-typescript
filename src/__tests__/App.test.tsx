import * as React from 'react';
import {shallow} from 'enzyme';

import App from "../components/App";
import {fireEvent, render, waitFor, cleanup} from "@testing-library/react";
import {act} from "@testing-library/react-hooks";

describe('<App />', () => {

    afterEach(cleanup);

    it('renders the component without changes', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });

    it("renders the heading", () => {
        const result = shallow(<App />).contains(<h1>React + TypeScript</h1>);
        expect(result).toBeTruthy();
    });

    it('should render right input value',  async () => {
        const { container } = render(<App/>);
        expect(container.querySelector('input').getAttribute('value')).toEqual('');
        act(()=>{
            fireEvent.change(container.querySelector('input'), {
                target: {
                    value: 'test'
                },
            })
        })
        await waitFor(() => {
            expect(container.querySelector('input').getAttribute('value')).toEqual('test');
        });
        act(()=>{
            fireEvent.click(container.querySelector('button'))
        })
        await waitFor(() => {
            expect(container.querySelector('input').getAttribute('value')).toEqual('');
        });
    });
})



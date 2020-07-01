import * as React from 'react';
import {shallow} from 'enzyme';

import App from "../components/App";

describe('<App />', () => {
    it('renders the component without changes', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
    it("renders the heading", () => {
        const result = shallow(<App />).contains(<h1>React + TypeScript</h1>);
        expect(result).toBeTruthy();
    });
})



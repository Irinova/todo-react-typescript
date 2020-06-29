import * as React from 'react';
import { shallow } from 'enzyme';

import App from "../src/components/App";

describe('<App />', () => {
    test('renders the component', () => {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
    it("renders the heading", () => {
        const result = shallow(<App />).contains(<h1>React + TypeScript</h1>);
        expect(result).toBeTruthy();
    });
})



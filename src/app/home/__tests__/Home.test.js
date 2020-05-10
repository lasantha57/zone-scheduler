import React from 'react';
import { shallow } from 'enzyme';
import App from '../Home';

describe('<Home />', () => {

    it('Home renders without crashing', () => {
        shallow(<App />);
    });
});
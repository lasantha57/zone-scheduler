import React from 'react';
import { shallow } from 'enzyme';
import App from '../ScheduleList';

describe('<ScheduleList />', () => {

    it('ScheduleList renders without crashing', () => {
        shallow(<App />);
    });
});
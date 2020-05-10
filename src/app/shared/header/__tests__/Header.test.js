
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Navigation';

describe('<Header />', () => {

    let wrapped = shallow(<Header />);

    it('should render a nav link', () => {
        expect(wrapped.find('.nav').length).toEqual(1);
    });

});
import React from 'react';
import { shallow } from 'enzyme';
import NerdyCheckBox from './NerdyCheckBox';

describe('Nerdy checkbox', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NerdyCheckBox />);
    expect(wrapper).toMatchSnapshot();
  });
});

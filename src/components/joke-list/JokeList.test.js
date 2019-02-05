import React from 'react';
import { shallow } from 'enzyme';
import JokeList from './JokeList';

describe('<JokeList />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<JokeList />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has correct state', () => {
    const wrapper = shallow(<JokeList />);
    wrapper.setState({ allJokes: true });
    expect(wrapper.state('allJokes')).toEqual(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import userInfo from './userInfo';

describe('Form component', () => {
  it('renders App', () => {
    const wrapper = shallow(<userInfo userName="Morriden" followers={1} following={2} link="url string" />);
    expect(wrapper).toMatchSnapshot();
  });
});

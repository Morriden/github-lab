import React from 'react';
import { shallow } from 'enzyme';
import ListOfRepos from './ListOfRepos';

describe('Form component', () => {
  it('renders App', () => {
    const wrapper = shallow(<ListOfRepos repos={['imatitle1', 'imatitle2', 'imatitle3']} />);
    expect(wrapper).toMatchSnapshot();
  });
});

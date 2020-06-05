import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toExist();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});

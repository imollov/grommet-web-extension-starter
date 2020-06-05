import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../Layout';

describe('Layout Component', () => {
  const children = <div>Test</div>;

  it('smoke test', () => {
    const wrapper = shallow(<Layout>{children}</Layout>);

    expect(wrapper).toExist();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Layout>{children}</Layout>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should contain children', () => {
    const wrapper = shallow(<Layout>{children}</Layout>);

    expect(wrapper.containsMatchingElement(children)).toBe(true);
  });
});

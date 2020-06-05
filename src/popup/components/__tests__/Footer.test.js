import React from 'react';
import { shallow, mount } from 'enzyme';

import Footer from '../Footer';

describe('Footer Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toExist();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call webextension API', () => {
    const wrapper = mount(<Footer />);

    const link = wrapper.findWhere(
      el => el.text() === 'Docs' && el.type() === 'a',
    );
    link.simulate('click');

    expect(global.browser.tabs.create).toHaveBeenCalled();
  });
});

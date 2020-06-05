import React from 'react';
import { shallow, mount } from 'enzyme';

import Content from '../Content';

describe('Content Component', () => {
  it('smoke test', () => {
    const wrapper = shallow(<Content />);

    expect(wrapper).toExist();
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Content />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call webextension API', () => {
    const wrapper = mount(<Content />);

    const link = wrapper.findWhere(
      el => el.text() === 'Message Background' && el.type() === 'button',
    );
    link.simulate('click');

    expect(global.browser.runtime.sendMessage).toHaveBeenCalled();
  });
});

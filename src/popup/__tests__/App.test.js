import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';

describe('Popup app container', () => {
  it('smoke test', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toExist();
  });

  it('should match snapshot', () => {
    const wrapper = mount(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});

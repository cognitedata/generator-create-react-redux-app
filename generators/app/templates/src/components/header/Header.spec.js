import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from './Header';


describe('Header', () => {
  it('Renders without exploding', () => {
    const wrapper = mount(
      <Header />
    );
    expect(wrapper).toHaveLength(1);
  });
});

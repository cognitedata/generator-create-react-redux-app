import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  it('Renders without exploding', () => {
    const wrapper = mount(
      <Counter
        increment={() => {}}
        incrementIfOdd={() => {}}
        decrement={() => {}}
        counter={0}
      />
    );
    expect(wrapper).toHaveLength(1);
  });
});

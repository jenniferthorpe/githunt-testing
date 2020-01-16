import React from 'react';
import Loader from './index';

describe('Loader', () => {
  it('Renders loader', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper.exists('.loading-indicator')).to.equal(true);
    expect(wrapper.exists('Solar')).to.equal(true);
  })
})

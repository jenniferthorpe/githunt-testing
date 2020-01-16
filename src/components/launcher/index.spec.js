import React from 'react';
import Launcher from './index';

describe('Launcher', () => {
  it('Renders loading text', () => {
    const wrapper = shallow(<Launcher />)
    expect(wrapper.find('Logo')).to.have.length(1)
    expect(wrapper.exists('h4')).to.equal(true);
    expect(wrapper.exists('p')).to.equal(true);
  })
})

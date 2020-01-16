import Fork from './fork'
import React from 'react';

describe('Fork SVG', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Fork />)

    expect(wrapper).to.matchSnapshot();
  })
})
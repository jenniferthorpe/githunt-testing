import Issue from './issue'
import React from 'react';

describe('Issue SVG', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Issue />)

    expect(wrapper).to.matchSnapshot();
  })
})
import React from 'react';
import AppRoutes from './index';
import FeedContainer from '../containers/feed';

describe('AppRoutes', () => {
  it('Returns routers', () => {
    const wrapper = shallow(<AppRoutes />);
    expect(wrapper.find('MemoryRouter')).to.have.length(1);
    expect(wrapper.find('Switch')).to.have.length(1);
    expect(wrapper.find('Route').props()).to.have.property('path')
    expect(wrapper.find('Route').props().component).to.equal(FeedContainer)
  })
})
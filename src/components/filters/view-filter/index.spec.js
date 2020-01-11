import React from 'react';
import ViewFilter from './index';

describe('ViewFilter', () => {

  it('updates to grid', () => {
    const fakeUpdateViewType = sinon.fake();
    const wrapper = shallow(<ViewFilter updateViewType={fakeUpdateViewType} />)
    wrapper.find('button').at(0).simulate('click');
    sinon.assert.calledOnce(fakeUpdateViewType)
    sinon.assert.calledWith(fakeUpdateViewType.firstCall, 'grid')
  })

  it('updates to list', () => {
    const fakeUpdateViewType = sinon.fake();
    const wrapper = shallow(<ViewFilter updateViewType={fakeUpdateViewType} />)
    wrapper.find('button').at(1).simulate('click');
    sinon.assert.calledOnce(fakeUpdateViewType)
    sinon.assert.calledWith(fakeUpdateViewType.firstCall, 'list')
  })

  it('renders options', () => {
    const wrapper = shallow(<ViewFilter />)
    expect(wrapper.find('div').at(0).hasClass('view-type-wrap')).to.equal(true)
    expect(wrapper.find('div').at(1).hasClass('view-type')).to.equal(true)
    expect(wrapper.find('i').at(0).hasClass('fa fa-table')).to.equal(true)
    expect(wrapper.find('i').at(1).hasClass('fa fa-list')).to.equal(true)
  })

})
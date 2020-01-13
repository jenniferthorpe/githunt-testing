import React from 'react';
import ViewFilter from './index';

describe('ViewFilter', () => {

  let props, wrapper, fakeUpdateViewType;

  beforeEach(() => {

    fakeUpdateViewType = sinon.fake();

    props = {
      updateViewType: fakeUpdateViewType,
      selectedViewType: 'list'
    }

    wrapper = shallow(<ViewFilter {...props}></ViewFilter>)

    return {
      props,
      wrapper
    }
  }
  )

  it('Changes to grid', () => {
    wrapper.find('button').at(0).simulate('click');
    sinon.assert.calledOnce(fakeUpdateViewType)
    sinon.assert.calledWith(fakeUpdateViewType.firstCall, 'grid')
  })

  it('Changes to list', () => {
    wrapper.find('button').at(1).simulate('click');
    sinon.assert.calledOnce(fakeUpdateViewType)
    sinon.assert.calledWith(fakeUpdateViewType.firstCall, 'list')
  })

  it('renders options', () => {
    expect(wrapper.find('div')).to.have.length(2)
    expect(wrapper.find('i')).to.have.length(2)

    const grid = wrapper.find('button').at(0);
    expect(grid.text()).to.equal('Grid');
    const list = wrapper.find('button').at(1);
    expect(list.text()).to.equal('List');

    expect(wrapper.find('button').at(1).hasClass('active')).to.equal(true)
    wrapper.setProps({ selectedViewType: 'grid' })
    expect(wrapper.find('button').at(0).hasClass('active')).to.equal(true)
  })

})
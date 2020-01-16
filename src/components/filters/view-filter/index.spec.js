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

  it('renders wrapping elements', () => {
    expect(wrapper.find('div')).to.have.length(2)
    expect(wrapper.find('i')).to.have.length(2)
  })

  it('renders buttons', () => {
    expect(wrapper.find('button').at(0).text()).to.equal('Grid');
    expect(wrapper.find('button').at(1).text()).to.equal('List');

    expect(wrapper.find('button').at(1).hasClass('active')).to.equal(true)
    wrapper.setProps({ selectedViewType: 'grid' })
    expect(wrapper.find('button').at(0).hasClass('active')).to.equal(true)
  })

})
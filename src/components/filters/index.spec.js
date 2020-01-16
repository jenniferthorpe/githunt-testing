import React from 'react';
import Filters from './index'

describe('Filters', () => {

  let props, wrapper, fakeUpdateLanguage, fakeUpdateDateJump, fakeUpdateViewType;

  beforeEach(() => {

    fakeUpdateLanguage = sinon.fake();
    fakeUpdateDateJump = sinon.fake();
    fakeUpdateViewType = sinon.fake();

    props = {
      updateDateJump: fakeUpdateDateJump,
      updateViewType: fakeUpdateViewType,
      selectedViewType: '',
      selectedDateJump: ''
    }

    wrapper = shallow(<Filters {...props}></Filters>)

    return {
      props,
      wrapper
    }
  }
  )

  it('Renders 3 filter options', () => {
    expect(wrapper.find('div')).to.have.length(3)
    expect(wrapper.find('DateJumpFilter').props()).to.have.property('updateDateJump')
    expect(wrapper.find('DateJumpFilter').props()).to.have.property('selectedDateJump')
    expect(wrapper.find('ViewFilter').props()).to.have.property('selectedViewType')
    expect(wrapper.find('ViewFilter').props()).to.have.property('updateViewType')
  })

  it('Passes props to child components', () => {
    expect(wrapper.find('DateJumpFilter').props().updateDateJump).to.be.a('function');
    expect(wrapper.find('DateJumpFilter').props().selectedDateJump).to.equal('');
    expect(wrapper.find('ViewFilter').props().selectedViewType).to.equal('');
    expect(wrapper.find('ViewFilter').props().updateViewType).to.be.a('function');
  })
})
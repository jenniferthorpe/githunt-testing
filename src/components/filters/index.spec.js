import React from 'react';
import Filters from './index'

describe('Filters', () => {

  let props, wrapper, fakeUpdateLanguage, fakeUpdateDateJump, fakeUpdateViewType;

  beforeEach(() => {

    fakeUpdateLanguage = sinon.fake();
    fakeUpdateDateJump = sinon.fake();
    fakeUpdateViewType = sinon.fake();

    props = {
      updateLanguage: fakeUpdateLanguage,
      updateDateJump: fakeUpdateDateJump,
      updateViewType: fakeUpdateViewType,
      selectedLanguage: '',
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
    expect(wrapper.find('div')).to.have.length(4)
    expect(wrapper.find('LanguageFilter').props()).to.have.property('selectedLanguage')
    expect(wrapper.find('LanguageFilter').props()).to.have.property('updateLanguage')
    expect(wrapper.find('DateJumpFilter').props()).to.have.property('updateDateJump')
    expect(wrapper.find('DateJumpFilter').props()).to.have.property('selectedDateJump')
    expect(wrapper.find('ViewFilter').props()).to.have.property('selectedViewType')
    expect(wrapper.find('ViewFilter').props()).to.have.property('updateViewType')
  })

  it('Passes props to child components', () => {
    expect(wrapper.find('LanguageFilter').props().selectedLanguage).to.equal('');
    expect(wrapper.find('LanguageFilter').props().updateLanguage).to.be.a('function');
    expect(wrapper.find('DateJumpFilter').props().updateDateJump).to.be.a('function');
    expect(wrapper.find('DateJumpFilter').props().selectedDateJump).to.equal('');
    expect(wrapper.find('ViewFilter').props().selectedViewType).to.equal('');
    expect(wrapper.find('ViewFilter').props().updateViewType).to.be.a('function');
  })
})
import React from 'react';
import DateJumpFilter from './index';

describe('DateJumpFilter', () => {
  let props, wrapper, fakeUpdateDateJump;

  beforeEach(() => {
    fakeUpdateDateJump = sinon.fake();

    props = {
      updateDateJump: fakeUpdateDateJump,
      selectedDateJump: 'week'
    }

    wrapper = shallow(<DateJumpFilter {...props} />)

    return {
      props,
      wrapper
    }
  }
  )

  it('Calls prop updateDateJump', () => {
    wrapper.instance().updateDateJump('year');
    sinon.assert.calledOnce(fakeUpdateDateJump)
  })

  it('Returns and DO NOT call prop updateDateJump', () => {
    wrapper.instance().updateDateJump('week');
    sinon.assert.notCalled(fakeUpdateDateJump)
  })

  it('Menue default close and toggles', () => {
    expect(wrapper.state().dropdownOpen).to.equal(false);
    wrapper.instance().toggle();
    expect(wrapper.state().dropdownOpen).to.equal(true);
  })

  it('Returns selectedDateJump', () => {
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Weekly');
    wrapper.setProps({ selectedDateJump: 'day' })
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Daily');
    wrapper.setProps({ selectedDateJump: 'month' })
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Monthly');
    wrapper.setProps({ selectedDateJump: 'year' })
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Yearly');
    wrapper.setProps({ selectedDateJump: '' })
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Weekly');
  })

  it('renders all options', () => {
    expect(wrapper.find('DropdownItem')).to.have.lengthOf(4);
  })


})
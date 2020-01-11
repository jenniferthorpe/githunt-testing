import React from 'react';
import DateJumpFilter from './index';

describe('DateJumpFilter', () => {
  it('Calls prop updateDateJump', () => {
    const fakeUpdateDateJump = sinon.fake();
    const wrapper = shallow(<DateJumpFilter selectedDateJump="week" updateDateJump={fakeUpdateDateJump} />);
    wrapper.instance().updateDateJump('year');
    sinon.assert.calledOnce(fakeUpdateDateJump)
  })

  it('Returns and DO NOT call prop updateDateJump', () => {
    const fakeUpdateDateJump = sinon.fake();
    const wrapper = shallow(<DateJumpFilter selectedDateJump="week" updateDateJump={fakeUpdateDateJump} />);
    wrapper.instance().updateDateJump('week');
    sinon.assert.notCalled(fakeUpdateDateJump)
  })

  it('Menue default close and toggles', () => {
    const wrapper = shallow(<DateJumpFilter />);
    expect(wrapper.state().dropdownOpen).to.equal(false);
    wrapper.instance().toggle();
    expect(wrapper.state().dropdownOpen).to.equal(true);
  })

  it('Returns selectedDateJump', () => {
    const wrapper = shallow(<DateJumpFilter />);
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Weekly');
    wrapper.setProps({ selectedDateJump: 'day' })
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Daily');
    wrapper.setProps({ selectedDateJump: 'month' })
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Monthly');
    wrapper.setProps({ selectedDateJump: 'year' })
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Yearly');
    wrapper.setProps({ selectedDateJump: 'week' })
    expect(wrapper.instance().getSelectedDateJump()).to.equal('Weekly');
  })

  it('renders all options', () => {
    const wrapper = shallow(<DateJumpFilter />);
    expect(wrapper.find('DropdownItem')).to.have.lengthOf(4);
  })


})
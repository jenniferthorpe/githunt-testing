import 'jsdom-global/register'
import React from 'react';
import DateJumpFilter from './index';
import Enzyme from 'enzyme';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe('DateJumpFilter', () => {
  //   it('Changes on new choice', () => {
  //     const wrapper = mount(<DateJumpFilter updateDateJump={() => { }} />);
  //     wrapper.find('DropdownItem').at(0).simulate('click');

  //   })

  it('returns opposite', () => {
    const wrapper = shallow(<DateJumpFilter />);
    expect(wrapper.state().dropdownOpen).to.equal(false);
    wrapper.instance().toggle();
    expect(wrapper.state().dropdownOpen).to.equal(true);
  })

  it('Returns selectedDateJump', () => {
    const wrapper = mount(<DateJumpFilter />);
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

})
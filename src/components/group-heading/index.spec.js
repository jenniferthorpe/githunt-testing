import React from 'react';
import GroupHeading from './index'
import MockDate from 'mockdate'

describe('GroupHeading', () => {

  let props, wrapper;

  before(() => {

    props = {
      start: '2000-01-01T00:00:00+01:00',
      end: '2000-01-01T00:00:00+01:00',
      dateJump: 'day'
    }

  })

  afterEach(() => {
    MockDate.reset();
  })

  it('Calls getTitle once on render', () => {
    const getTitleSpy = sinon.spy(GroupHeading.prototype, 'getTitle')
    wrapper = shallow(<GroupHeading {...props}></GroupHeading>)
    sinon.assert.calledOnce(getTitleSpy)
    getTitleSpy.restore();
  })

  it('Renders elements', () => {
    wrapper = shallow(<GroupHeading {...props}></GroupHeading>)
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('h4')).to.have.length(1);
    expect(wrapper.find('span')).to.have.length(2);
  })

  it('Renders text: Today/Yesterday', () => {
    MockDate.set('2000-01-01');
    wrapper = shallow(<GroupHeading {...props}></GroupHeading>)
    expect(wrapper.instance().getTitle()).to.equal('Today')

    MockDate.set('2000-01-02');
    wrapper = shallow(<GroupHeading {...props}></GroupHeading>)
    expect(wrapper.instance().getTitle()).to.equal('Yesterday')
  })

  it('Renders text: Last year', () => {
    MockDate.set('2001-01-01');
    wrapper.setProps({
      dateJump: 'year'
    })
    expect(wrapper.instance().getTitle()).to.equal('Last year')
  })

  it('Renders text: This week', () => {
    MockDate.set('2001-01-01');
    wrapper.setProps({
      start: '2000-12-25T00:00:00+01:00',
      dateJump: 'week'
    })
    expect(wrapper.instance().getTitle()).to.equal('This week')
  })

  it('Renders text: Last week', () => {
    MockDate.set('2001-01-01');
    wrapper.setProps({
      start: '2000-12-18T00:00:00+01:00',
      dateJump: 'week'
    })
    expect(wrapper.instance().getTitle()).to.equal('Last week')
  })

  it('Calls getSubtitle once on render', () => {
    const getSubtitleSpy = sinon.spy(GroupHeading.prototype, 'getSubtitle')
    wrapper = shallow(<GroupHeading {...props}></GroupHeading>)
    sinon.assert.calledOnce(getSubtitleSpy)
    getSubtitleSpy.restore()
  })

  it('Has no end date', () => {
    wrapper.setProps({
      start: '2020-01-05T00:00:00+01:00',
      end: '2020-01-05T00:00:00+01:00',
      dateJump: 'week'
    })
    expect(wrapper.instance().getSubtitle()).to.equal('January 5, 2020')

    wrapper.setProps({
      start: '2020-01-05T00:00:00+01:00',
      end: '2020-01-10T00:00:00+01:00',
      dateJump: 'day'
    })
    expect(wrapper.instance().getSubtitle()).to.equal('January 5, 2020')
  })

  it('Has end date', () => {
    wrapper.setProps({
      start: '2020-01-05T00:00:00+01:00',
      end: '2020-01-10T00:00:00+01:00',
      dateJump: 'week'
    })

    expect(wrapper.instance().getSubtitle()).to.equal('January 5, 2020 – January 10, 2020')
  })



})
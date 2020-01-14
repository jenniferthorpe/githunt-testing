import React from 'react';
import GroupHeading from './index'


describe('GroupHeading', () => {

  let props, wrapper;

  before(() => {

    props = {
      start: '2020-01-14T00:00:00+01:00',
      end: '2020-01-14T00:00:00+01:00',
      dateJump: 'day'
    }

    wrapper = shallow(<GroupHeading {...props}></GroupHeading>)

  })

  it('Calls getTitle once on render', () => {
    const getTitleSpy = sinon.spy(GroupHeading.prototype, 'getTitle')
    wrapper = shallow(<GroupHeading {...props}></GroupHeading>)
    sinon.assert.calledOnce(getTitleSpy)
  })

  it('Renders elements', () => {
    expect(wrapper.find('div')).to.have.length(1);
    expect(wrapper.find('h4')).to.have.length(1);
    expect(wrapper.find('span')).to.have.length(2);
  })

  it('Renders text: Today/Yesterday', () => {
    expect(wrapper.instance().getTitle()).to.equal('Today')
    wrapper.setProps({
      start: '2020-01-13T00:00:00+01:00',
    })
    expect(wrapper.instance().getTitle()).to.equal('Yesterday')
  })

  it('Renders text: Last year', () => {
    wrapper.setProps({
      start: '2019-01-14T00:00:00+01:00',
      dateJump: 'year'
    })
    expect(wrapper.instance().getTitle()).to.equal('Last year')
  })

  it('Renders text: This week', () => {
    wrapper.setProps({
      start: '2020-01-08T00:00:00+01:00',
      dateJump: 'week'
    })
    expect(wrapper.instance().getTitle()).to.equal('This week')
  })

  it('Renders text: Last week', () => {
    wrapper.setProps({
      start: '2020-01-01T00:00:00+01:00',
      dateJump: 'week'
    })
    expect(wrapper.instance().getTitle()).to.equal('Last week')
  })


  it('Calls getSubtitle once on render', () => {
    const getSubtitleSpy = sinon.spy(GroupHeading.prototype, 'getSubtitle')
    wrapper = shallow(<GroupHeading {...props}></GroupHeading>)
    sinon.assert.calledOnce(getSubtitleSpy)
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
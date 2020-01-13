import React from 'react';
import Alert from './index';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

describe('Alert', () => {
  let props, wrapper;

  before(() => {
    props = {
      type: ''
    }

    wrapper = mount(<Alert {...props}>Prop children</Alert>)

    return {
      props,
      wrapper
    }
  }
  )

  it('Includes prop children', () => {
    expect(wrapper.contains('Prop children')).to.equal(true);
  })

  it('Contains required props', () => {
    expect(wrapper.props()).to.have.property('type');
  })
})
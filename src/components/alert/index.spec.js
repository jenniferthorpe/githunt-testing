import React from 'react';
import Alert from './index';

describe('Alert', () => {
  it('Renders alert with children when passes in', () => {
    const wrapper = shallow((
      <Alert type={'text'}>
        Hejsan
    </Alert>
    ))
    expect(wrapper.contains('Hejsan')).to.equal(true);
  })

  it('Contains required props', () => {
    const wrapper = mount(<Alert type={'text'}></Alert>);
    expect(wrapper.props()).to.have.property('type');
  })
})
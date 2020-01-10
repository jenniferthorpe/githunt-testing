import React from 'react';
import ViewFilter from './index';
import Enzyme from 'enzyme';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

// describe('ViewFilter', () => {

//   //HERE - test action/reducer also

//   it('renders view filter option', () => {
//     const wrapper = mount(<ViewFilter></ViewFilter>)

//   })

//   it('updates prop selectedViewType', () => {

//   })
// })
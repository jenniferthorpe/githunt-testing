import 'jsdom-global/register'
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

global.mount = mount;
global.shallow = shallow;
global.render = render;
global.expect = expect;
global.Enzyme = Enzyme;
global.sinon = sinon;


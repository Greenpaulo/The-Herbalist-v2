import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

it('expect to render Login component', () => {
  expect(shallow(<Login />)).toMatchSnapshot()
})

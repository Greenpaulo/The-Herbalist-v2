import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

it('expect to render Landing component', () => {
  expect(shallow(<Landing />)).toMatchSnapshot()
})

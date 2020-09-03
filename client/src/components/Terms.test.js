import React from 'react';
import { shallow } from 'enzyme';
import Terms from './Terms';

it('expect to render Terms component', () => {
  expect(shallow(<Terms />)).toMatchSnapshot()
})

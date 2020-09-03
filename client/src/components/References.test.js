import React from 'react';
import { shallow } from 'enzyme';
import References from './References';

it('expect to render References component', () => {
  expect(shallow(<References />)).toMatchSnapshot()
})

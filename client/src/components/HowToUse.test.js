import React from 'react';
import { shallow } from 'enzyme';
import HowToUse from './HowToUse';

it('expect to render HowToUse component', () => {
  expect(shallow(<HowToUse />)).toMatchSnapshot()
})

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should match the snapshot with all correct data', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toMatchSnapshot();
});

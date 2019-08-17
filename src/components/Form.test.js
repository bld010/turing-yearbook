import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

it('should match the snapshot', () => {
  const wrapper = shallow(<Form />)

  expect(wrapper).toMatchSnapshot();
})

//Test each input contenteditable

//Test each input onChange firing handleChange

//Test button click firing handleAddNewStudent

//Test handleChange
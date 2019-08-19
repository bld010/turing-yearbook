import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

it('should match the snapshot with all correct data passed in', () => {
  const person = {id: 8, name: 'Robbie', quote: 'Cool.', superlative: 'Most Likely to Be Accused of Murder', photo: './robbie.jpg'};
  const wrapper = shallow(<Person key={person.name} cohortType="staff" updatePople={jest.fn()} deletePerson={jest.fn()} person={person} />)

  expect(wrapper).toMatchSnapshot();
})


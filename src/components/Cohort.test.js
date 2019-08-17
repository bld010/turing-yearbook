import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';
import people from '../data/yearbook-data'

it('should match the snapshot with all correct data', () => {
  const wrapper = shallow(<Cohort people={people.staff} cohortType="staff" deletePerson={jest.fn()} updatePeople={jest.fn()}/>)

  expect(wrapper).toMatchSnapshot();
});


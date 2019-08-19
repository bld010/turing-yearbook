import React from './node_modules/react';
import { shallow } from './node_modules/enzyme';
import Cohort from './Cohort';
import people from '../../data/yearbook-data'

it('should match the snapshot with all correct data', () => {
  const wrapper = shallow(<Cohort people={people.staff} cohortType="staff" deletePerson={jest.fn()} updatePeople={jest.fn()}/>)

  expect(wrapper).toMatchSnapshot();
});


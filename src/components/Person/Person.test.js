import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

let wrapper = null;
let instance = null;
let person = {id: 8, name: 'Robbie', quote: 'Cool.', superlative: 'Most Likely to Be Accused of Murder', photo: './robbie.jpg'};

describe('Person', () => {
  beforeEach(() => {
    wrapper = shallow(<Person key={person.name} cohortType="staff" updatePople={jest.fn()} deletePerson={jest.fn()} person={person} />)

    instance = wrapper.instance();
  })
  it('should match the snapshot with all correct data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('Editing Contents', () => {
    it('should fire handleCompletedChange when user clicks away after editing', () => {
      const mockHandleCompletedChange = jest.fn();
      instance.handleCompletedChange = mockHandleCompletedChange;
      instance.setState({updatePeople: jest.fn()})
      wrapper.find('#name').simulate('blur')
      expect(mockHandleCompletedChange).toHaveBeenCalled();
    })
  })

  it('should fire deletePerson when x is clicked',() => {
    let mockDeletePerson = jest.fn();
    instance.state.deletePerson = mockDeletePerson;
    wrapper.find('button').simulate('click');
    expect(mockDeletePerson).toHaveBeenCalled();
  })
})



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
  
    it('should update state when name is edited', () => {
      const mockEvent = { target: {
        id: 'name', 
        innerText: 'Robert J.'
      }}
      wrapper.find('#name').simulate('keyUp', mockEvent);
      expect(instance.state.name).toEqual('Robert J.')
    });

    it('should update state when quote is edited', () => {
      const mockEvent = { target: {
        id: 'quote', 
        innerText: 'Yolo?'
      }}
      wrapper.find('#quote').simulate('keyUp', mockEvent);
      expect(instance.state.quote).toEqual('Yolo?')
    });

    it('should update state when superlative is edited', () => {
      const mockEvent = { target: {
        id: 'superlative', 
        innerText: 'Most Likely To Wear Birkenstocks'
      }}

      wrapper.find('#superlative').simulate('keyUp', mockEvent);
      expect(instance.state.superlative).toEqual('Most Likely To Wear Birkenstocks')
    })

    it('should fire handleCompletedChange when user clicks away after editing', () => {
      const mockHandleCompletedChange = jest.fn();
      instance.setState({handleCompletedChange: mockHandleCompletedChange});
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



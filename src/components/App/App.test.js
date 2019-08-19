import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper = null;
let instance = null;

describe('App', () => {
  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  })
  it('should match the snapshot with all correct data', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to add a new student', () => {
    const mockStudent = {
      id: 99, 
      name: 'Travis', 
      quote: 'I\'m not full of lies.', 
      superlative: 'Most Likely to Pretend He Doesn\'t Rap',
      photo: './travis.jpg',
      cohortType: 'student'
    }
    instance.addNewStudent(mockStudent)
    
    const expected = instance.state.students.includes(mockStudent);
  
    expect(expected).toEqual(true)

  })

  it('should be able to delete a person', () => {
    const mockPerson = {id: 13, name: 'Jeff', quote: '::thoughtful nonsense::', superlative: 'Most Likely to Tell a Dad Joke', photo: 'https://i.ytimg.com/vi/DhqzMc_LXgQ/maxresdefault.jpg'};

    instance.deletePerson(13, 'staff');

    const expected = instance.state.staff.includes(mockPerson)

    expect(expected).toEqual(false);
    
  })
  it('should update state when the content is edited', () => {
    const mockOriginalPerson = {id: 13, name: 'Jeff', quote: '::thoughtful nonsense::', superlative: 'Most Likely to Tell a Dad Joke', photo: 'https://i.ytimg.com/vi/DhqzMc_LXgQ/maxresdefault.jpg'};
    const mockChangedPerson = {id: 13, name: 'Jeff Casimir', quote: '::thoughtful nonsense::', superlative: 'Most Likely to Take Up More Than Allotted Time', photo: 'https://i.ytimg.com/vi/DhqzMc_LXgQ/maxresdefault.jpg', cohortType: 'staff'};
    const mockChangedPersonObject = {id: 13, name: 'Jeff Casimir', quote: '::thoughtful nonsense::', superlative: 'Most Likely to Take Up More Than Allotted Time', photo: 'https://i.ytimg.com/vi/DhqzMc_LXgQ/maxresdefault.jpg'};
    
    instance.updatePeople(mockChangedPerson)
    
    const expected = instance.state.staff.find(person => person.id === 13)
    const isOriginalPersonInState = instance.state.staff.includes(mockOriginalPerson)

    expect(expected).toEqual(mockChangedPersonObject);
    expect(isOriginalPersonInState).toEqual(false);
  })
})

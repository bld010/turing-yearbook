import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import './Form.css';

describe('Form', ()=> {



  
  it('should match the snapshot', () => {
    const wrapper = shallow(<Form />)
  
    expect(wrapper).toMatchSnapshot();
  })
  
  //How to do this without spies?
  
  it('should fire handleChange to update state when name is edited', () => {
    const wrapper = shallow(<Form />);
     
    let nameInput = wrapper.find('input[name="name"]');
    
    nameInput.simulate('change', { target: { name: 'name', value: 'Brianna'}});
  
    expect(wrapper.instance().state.name).toEqual('Brianna');
  })
  
  it('should fire handleChange to update state when quote is edited', () => {
    const wrapper = shallow(<Form />);
     
    let nameInput = wrapper.find('input[name="quote"]');
    
    nameInput.simulate('change', { target: { name: 'quote', value: 'Yolo'}});
  
    expect(wrapper.instance().state.quote).toEqual('Yolo');
  })
  
  it('should fire handleChange to update state when superlative is edited', () => {
    const wrapper = shallow(<Form />);
     
    let nameInput = wrapper.find('input[name="superlative"]');
    
    nameInput.simulate('change', { target: { name: 'superlative', value: 'Most likely to tell David to calm down'}});
  
    expect(wrapper.instance().state.superlative).toEqual('Most likely to tell David to calm down');
  
  })

  it('should fire handleAddNewStudent when button is clicked', () => {
    const wrapper = shallow(<Form />)
    const mockHandleAddNewStudent = jest.fn();
    

    wrapper.find('button').simulate('click')

    
  })
})


//Test button click firing handleAddNewStudent


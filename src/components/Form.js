import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      photo: 'https://placekitten.com/200/300'
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleAddNewStudent = (e) => {
    e.preventDefault();
    this.props.addNewStudent(this.state);
    this.setState({
      name: '',
      quote: '',
      superlative: ''
    })
  }

  render() {
    return(
      <form class="Form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="quote"
          placeholder="Quote"
          value={this.state.quote}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="superlative"
          placeholder="Superlative"
          value={this.state.superlative}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddNewStudent}>Add Student</button>
      </form>
    ) 
  }
}


export default Form;
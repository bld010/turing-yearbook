import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import Form from './Form.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addNewStudent = (newStudent) => {
    this.setState({
      students: [...this.state.students, newStudent]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
          <Form addNewStudent={this.addNewStudent} />
        </header>
        <div>
          <h2>Staff</h2>
          <Cohort people={this.state.staff} />
        </div>
        <div>
          <h2>Students</h2>
          <Cohort people={this.state.students} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import Form from './Form.js';
import './App.css';
import './Cohort.css'

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

  deletePerson = (id, cohortType) => {
    let updatedArray = this.state[cohortType].filter(person => person.id !== id)
    console.log(updatedArray)
    this.setState({
      [cohortType]: updatedArray
    })
  } 

  updatePeople = (changedPerson) => {
    let updatedPerson = this.state[changedPerson.cohortType].find(person => person.id === changedPerson.id);
    let index = this.state[changedPerson.cohortType].indexOf(updatedPerson);
    let updatedArray = this.state[changedPerson.cohortType].slice();
    let changedPersonObject = {
      id: changedPerson.id, 
      name: changedPerson.name, 
      quote: changedPerson.quote, 
      superlative: changedPerson.superlative, 
      photo: changedPerson.photo}
    updatedArray.splice(index, 1, changedPersonObject);
    this.setState({
      [changedPerson.cohortType]: updatedArray
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
          <Form addNewStudent={this.addNewStudent} />
        </header>
        <div className="Cohort">
          <h2>Staff</h2>
          <Cohort people={this.state.staff} cohortType="staff" deletePerson={this.deletePerson} updatePeople={this.updatePeople} />
        </div>
        <div className="Cohort">
          <h2>Students</h2>
          <Cohort people={this.state.students} cohortType="students" deletePerson={this.deletePerson} updatePeople={this.updatePeople} />
        </div>
      </div>
    );
  }
}

export default App;

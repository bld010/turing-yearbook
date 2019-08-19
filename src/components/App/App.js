import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import Form from '../Form/Form.js';
import './App.css';
import '../Cohort/Cohort.css'

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
          <h1>TuringBook</h1>
        </header>
        <main>
          <section className="sidebar">
            <Form addNewStudent={this.addNewStudent} />
          </section>
          <section className="people">
              <Cohort people={this.state.staff} cohortType="staff" deletePerson={this.deletePerson} updatePeople={this.updatePeople} /> 
              <Cohort people={this.state.students} cohortType="students" deletePerson={this.deletePerson} updatePeople={this.updatePeople} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;

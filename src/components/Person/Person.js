import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  constructor({ person, cohortType, deletePerson, updatePeople}) {
    super()
    this.state = {
      name: person.name,
      id: person.id,
      quote: person.quote,
      superlative: person.superlative,
      photo: person.photo,
      cohortType: cohortType, 
      deletePerson: deletePerson,
      updatePeople: updatePeople,
      handleCompletedChange: () => {this.state.updatePeople(this.state)}
    }
  }

handleEdits(e, partToUpdate) {
  this.setState({[e.target.id]: e.target.innerText})
}
  
render() {
  return (
    <div className={this.state.cohortType + " Person"}>
      <div>
        <button onClick={() => this.state.deletePerson(this.state.id, this.state.cohortType)}>x</button>
      </div>
      <img src= {this.state.photo} alt="Person"></img>
      <h3 
        id="name" 
        contentEditable="true"
        suppressContentEditableWarning={true}
        onKeyUp={(e) => this.handleEdits(e, 'name')}
        onBlur={this.state.handleCompletedChange}>
        {this.state.name}
      </h3>
      <div className="quote">
        <img src={ require('./conversation.svg') } alt="quote bubble"></img>
        <p 
          id="quote" 
          contentEditable="true"
          suppressContentEditableWarning={true}
          onKeyUp={e => this.handleEdits(e, 'quote')}
          onBlur={this.state.handleCompletedChange}>
          "{this.state.quote}"
        </p>
      </div>
      <div className="superlative">
        <img src={ require('./medal.svg') } alt="medal icon"></img>
        <h4 
          id="superlative" 
          contentEditable="true"
          suppressContentEditableWarning={true}
          onKeyUp={e => this.handleEdits(e, 'superlative')}
          onBlur={this.state.handleCompletedChange}>
          {this.state.superlative}
        </h4>
      </div>
    </div>
  )
}
}
export default Person;

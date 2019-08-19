import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  constructor({ person, cohortType, deletePerson}) {
    super({ person, cohortType, deletePerson})
    this.state = {
      name: person.name,
      id: person.id,
      quote: person.quote,
      superlative: person.superlative,
      photo: person.photo,
      cohortType: cohortType, 
      deletePerson: deletePerson
    }
  }

handleEdits(e, partToUpdate) {
  this.setState({[e.target.id]: e.target.innerText})
}

handleCompletedChange = () => {
  this.props.updatePeople(this.state)
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
        onBlur={this.handleCompletedChange}>
        {this.state.name}
      </h3>
      <div className="quote">
        <img src={ require('./conversation.svg') } alt="quote bubble"></img>
        <p 
          id="quote" 
          contentEditable="true"
          suppressContentEditableWarning={true}
          onKeyUp={e => this.handleEdits(e)}
          onBlur={this.handleCompletedChange}>
          "{this.state.quote}"
        </p>
      </div>
      <div className="superlative">
        <img src={ require('./medal.svg') } alt="medal icon"></img>
        <h4 
          id="superlative" 
          contentEditable="true"
          suppressContentEditableWarning={true}
          onKeyUp={this.handleEdits}
          onBlur={this.handleCompletedChange}>
          {this.state.superlative}
        </h4>
      </div>
    </div>
  )
}
}
export default Person;

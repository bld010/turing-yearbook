import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.person.name,
      id: props.person.id,
      quote: props.person.quote,
      superlative: props.person.superlative,
      photo: props.person.photo,
      cohortType: props.cohortType, 
      deletePerson: props.deletePerson,
      updatePeople: props.updatePeople
    };
  }


handleCompletedChange = (e) => {
  this.setState({[e.target.id]: e.target.innerText});
  this.state.updatePeople(this.state);
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
        onBlur={this.handleCompletedChange}>
        {this.state.name}
      </h3>
      <div className="quote">
        <img src={ require('./conversation.svg') } alt="quote bubble"></img>
        <p 
          id="quote" 
          contentEditable="true"
          suppressContentEditableWarning={true}
          onBlur={this.handleCompletedChange}>
          {this.state.quote}
        </p>
      </div>
      <div className="superlative">
        <img src={ require('./medal.svg') } alt="medal icon"></img>
        <h4 
          id="superlative" 
          contentEditable="true"
          suppressContentEditableWarning={true}
          onBlur={this.handleCompletedChange}>
          {this.state.superlative}
        </h4>
      </div>
    </div>
  )
}
}
export default Person;

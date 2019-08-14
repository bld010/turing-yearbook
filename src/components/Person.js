import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.person.name,
      id: this.props.person.id,
      quote: this.props.person.quote,
      superlative: this.props.person.superlative,
      photo: this.props.person.photo,
      updatePeople: this.props.updatePeople,
      cohortType: this.props.cohortType
    }
  }

handleEdits(e, partToUpdate) {
  
  this.setState({[partToUpdate]: e.target.innerText})
}

handleCompletedChange = () => {
  this.state.updatePeople(this.state)
}
  
render() {
  return (
    <div className="Person">
      <img src= {this.state.photo} alt="Person"></img>
      <h3 
        name="name" 
        contentEditable="true"
        onKeyUp={(e) => this.handleEdits(e, 'name')}
        onBlur={this.handleCompletedChange}>
        {this.state.name}
      </h3>
      <p 
        name="quote" 
        contentEditable="true"
        onKeyUp={e => this.handleEdits(e)}
        onBlur={this.handleCompletedChange}>
        "{this.state.quote}"
      </p>
      <h4 
        name="superlative" 
        contentEditable="true"
        onKeyUp={this.handleEdits}
        onBlur={this.handleCompletedChange}>
        {this.state.superlative}
      </h4>
    </div>
  )
}
}
export default Person;

import React from 'react';
import './Person.css';

const Person = ({ person }) => {
  return (
    <div className="Person">
      <img src={person.photo} alt="Person"></img>
      <h3>{person.name}</h3>
      <p>"{person.quote}"</p>
      <h4>{person.superlative}</h4>
    </div>
  )
}
export default Person;

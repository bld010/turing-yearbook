import React from 'react';
import './Person.css';

const Person = ({ staffMember }) => {
  return (
    <div className="Person">
      <img src={staffMember.photo} alt="Person"></img>
      <h3>{staffMember.name}</h3>
      <p>"{staffMember.quote}"</p>
      <h4>{staffMember.superlative}</h4>
    </div>
  )
}
export default Person;

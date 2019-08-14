import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({ people }) => {
  return (
    <div className="Cohort">
      {people.map(person => <Person key={person.name}  person={person} />)}
    </div>
  )
  
}

export default Cohort;

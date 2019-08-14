import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({ people, updatePeople, cohortType, deletePerson }) => {
  return (
    <div className="Cohort">
      {people.map(person => {
      return <Person 
        key={person.name}  
        cohortType={cohortType} 
        updatePeople={updatePeople}
        deletePerson={deletePerson}
        person={person} />
      })}
    </div>
  )
  
}

export default Cohort;

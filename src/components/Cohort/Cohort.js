import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({ people, updatePeople, cohortType, deletePerson }) => {
  return (
    <section className="Cohort">
      <h2>{cohortType}</h2>
      <div className={cohortType + " Cohort"} >
        {people.map(person => {
        return <Person 
          key={person.name}  
          cohortType={cohortType} 
          updatePeople={updatePeople}
          deletePerson={deletePerson}
          person={person} />
        })}
      </div>
    </section>
  )
  
}

export default Cohort;

import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  return (
    <div className="Cohort">
      {props.staff.map(staffMember => {
         return <Person key={staffMember.name}  staffMember={staffMember}/>
      })}
    </div>
  )
  
}

export default Cohort;

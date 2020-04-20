import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className='person'>
      <input type='text' onChange={props.change} value={props.name}/>
      <h2 onClick={props.click}> {props.name} is of {props.age} years and learning components since {Math.floor(Math.random() *360)} years</h2>
      <p>{props.children}</p>
    </div>
  );
};

export default person;

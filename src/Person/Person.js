import React from 'react';

const person = (props) => {
  return (
    <div>
      <input type='text' onChange={props.change} value={props.name}/>
      <h2 onClick={props.click}> {props.name} is of {props.age} years and learning components since {Math.floor(Math.random() *360)} years</h2>
      <p>{props.children}</p>
    </div>
  );
};

export default person;

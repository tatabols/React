import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className='Person'>
      <p>I'm {props.name} and I'm {props.age} years old!</p>
      <p>I'm a children text <strong>{props.children}</strong></p>
      <input type='text' onChange={props.changed}/>  
    </div>
  )
}

export default Person;
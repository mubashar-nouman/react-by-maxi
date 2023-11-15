import React from 'react'
import './Person.css'

export default function Person(props) {
  return (
    <div className='Person'>

      <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p>
      <button onClick={props.click}>Delete This Person's </button>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  )
}

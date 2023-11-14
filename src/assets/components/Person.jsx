import React from 'react'

export default function Person(props) {
  return (
    <div>
      <p>I am {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
    </div>
  )
}

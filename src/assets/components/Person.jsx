import React, { Component } from 'react'

export default class Person extends Component {
  render() {
    return (
      <div>
        <p>I am a {this.props.name} and age is {this.props.age}</p>
      </div>
    )
  }
}

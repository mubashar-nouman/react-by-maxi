import React, { Component } from "react";
import Person from "./assets/components/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "jhs", name: "Mubashar", age: 22 },
      { id: "js", name: "Umar", age: 23 },
      { id: "jh", name: "Rehan", age: 21 },
      { id: "hs", name: "Musham", age: 24 },
    ],
    showPersons: false,
  };

  namChangeHandler = (event) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // Create a copy of the original persons array
    const persons = [...this.state.persons];

    // Remove the person at the specified index
    persons.splice(personIndex, 1);

    // Update the state with the new persons array
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            const classes = [];
            if (this.state.persons.length <= 2) {
              classes.push("red");
            }
            if (this.state.persons.length <= 1) {
              classes.push("bold");
            }
            return (
              <div className="App">
                <h1>Hello</h1>
                <p className={classes.join(' ')}>This is Real Working</p>
                <Person
                  name={person.name}
                  age={person.age}
                  click={(event) => this.deletePersonHandler(index)}
                  key={person.id}
                />
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <>
        <h1>Hi, I am a React App</h1>
        <p>App JS File</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </>
    );
  }
}

export default App;

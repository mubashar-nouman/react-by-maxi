import React, { useState } from 'react';
import Person from './assets/components/Person';
import './App.css';

const App = () => {
  const [personaState, setPersonaState] = useState({
    persons: [
      { name: 'Mubashar', age: 22 },
      { name: 'Umar', age: 23 },
      { name: 'Rehan', age: 21 },
    ],
  });

  const switchNameHandler = () => {
    setPersonaState({
      persons: [
        { name: 'Mubashar Nouman', age: 22 },
        { name: 'Umar Tariq', age: 23 },
        { name: 'Rehan Ashraf', age: 21 },
      ],
    });
  };

  return (
    <>
      <h1>Hi, I am a React App</h1>
      <p>App JS File</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personaState.persons[0].name} age={personaState.persons[0].age} />
      <Person name={personaState.persons[1].name} age={personaState.persons[1].age}>
        My Hobbies: Racing
      </Person>
      <Person name={personaState.persons[2].name} age={personaState.persons[2].age} />
    </>
  );
};

export default App;

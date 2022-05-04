import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Invite from './components/Invite';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
    {/* <Invite /> */}
    <Greet name="Clark" work="Staff">
      <p>Hello Clark Nice to meet you</p>
    </Greet>
    <Greet name="jack" work="Professer" />
      {/* <button>Submit</button> */}
    {/* </Greet> */}
    <Greet name="Simon" work="BusinessMan">
    <p>Hello Clark Nice to meet you</p>
      </Greet>
    <Greet name="vidal" work="Student" />
    </div>
  );
}

export default App;

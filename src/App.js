import React from 'react';
import './App.scss';
import Calendar from './Calendar'
import Calendar2 from './Calendar2'
import Day from './Day'

function App() {
  return (
    <div className="App">
      {/* <h1>hi, Jason</h1>
      <h2>Please log in to continue</h2>
      <form>
        <label>Username</label>
        <input type="text" className="username"/><br/>
        <label>Password</label>
        <input type="password" className="password"/><br/>
        <button type="submit">Submit</button>
      </form> */}
      <Calendar/>
      <Calendar2/>
    </div>
  );
}

export default App;

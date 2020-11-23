import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <Person name="Krishna" company="TCS">Hobbies: Coding</Person>
      <Person name="Kaveri" company="MB-Dubai">Hobbies: Reading</Person>
    </div>
  );
}

export default App;

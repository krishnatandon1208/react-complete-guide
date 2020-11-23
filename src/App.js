import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <Person name="Krishna" company="TCS"/>
      <Person name="Kaveri" company="MB-Dubai"/>
      <p>
        Learning ReactJS
      </p>
    </div>
  );
}

export default App;

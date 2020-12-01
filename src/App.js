import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {

	// state = {
	// 	persons: [
	// 		{ name : "Krishna", company: "TCS", hobbies: "Football" },
	// 		{ name : "Kaveri", company: "MB-Dubai", hobbies: "Reading" }
	// 	],
	// 	otherProperty: "Hello"
	// }

	//Creating methods for our class.
	// switchCompanyHandler = () => {
	// 	this.setState({
	// 		persons: [
	// 			{ name : "Krishna", company: "Microsoft", hobbies: "Football" },
	// 			{ name : "Kaveri", company: "Apple", hobbies: "Reading" }
	// 		],
	// 	});
	// }

	const [personState, setPersonState] = useState({
		persons: [
			{ name: "Krishna", company: "TCS", hobbies: "Football" },
			{ name: "Kaveri", company: "MB-Dubai", hobbies: "Reading" }
		],
		otherProperty: "Hellozzzz"
	});

	console.log(personState);

	const switchCompanyHandler = (newCompanyName) => {
		// this.setState({ is now not required.
		alert("Inside switch name handler");
		setPersonState({
			persons: [
				{ name: "Krishna", company: newCompanyName, hobbies: "Football" },
				{ name: "Kaveri", company: "MB-Dubai", hobbies: "Reading" }
			],
			otherProperty: personState.otherProperty
		});
	}

	const companyChangedHandler = (event) => {
		//Here, we will still want to change the state.
		setPersonState({
			persons: [
				{ name: "Krishna", company: "Microsoft", hobbies: "Football" },
				{ name: "Kaveri", company: event.target.value, hobbies: "Reading" }
			]
		});
	}

	return (
		<div className="App">
			<Person
				name={personState.persons[0].name}
				company={personState.persons[0].company}
				click={switchCompanyHandler.bind(this, "Amazon")}
			>
				{personState.persons[0].hobbies}
			</Person>
			<Person
				name={personState.persons[1].name}
				company={personState.persons[1].company}
				changed={companyChangedHandler}
			>
				{personState.persons[1].hobbies}
			</Person>
			<h6>{personState.otherProperty}</h6>
			<button onClick={switchCompanyHandler}>Switch Company</button>
		</div>
	);
}

export default App;

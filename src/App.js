import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {

	state = {
		persons: [
			{ name : "Krishna", company: "TCS", hobbies: "Football" },
			{ name : "Kaveri", company: "MB-Dubai", hobbies: "Reading" }
		],
		otherProperty: "Hello"
	}

	//Creating methods for our class.
	switchCompanyHandler = () => {
		this.setState({
			persons: [
				{ name : "Krishna", company: "Microsoft", hobbies: "Football" },
				{ name : "Kaveri", company: "Apple", hobbies: "Reading" }
			],
		});
	}

	render() {
		return (
			<div className="App">
				<Person 
					name={this.state.persons[0].name} 
					company={this.state.persons[0].company}>
					{this.state.persons[0].hobbies}
				</Person>
				<Person 
					name={this.state.persons[1].name} 
					company={this.state.persons[1].company}>
					{this.state.persons[1].hobbies}
				</Person>
				<h6>{this.state.otherProperty}</h6>
				<button onClick={this.switchCompanyHandler}>Switch Company</button>
			</div>
		);
	}
}

export default App;

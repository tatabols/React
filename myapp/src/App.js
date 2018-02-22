import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Andrea', age: 10 },
      { name: 'Nikki', age: 14 }
    ]
    
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: 'Andrea', age: 29 },
        { name: 'Nikki', age: 27 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Andrea', age: 29 },
        { name: 'Nikki', age: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangeHandler}>TEXT 1
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}>TEXT 2
        </Person>

        <button onClick={this.switchNameHandler}>Switch name</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'personid1', name: "FirstPerson", age: 28 },
      { id: 'personid2', name: "2ndPerson", age: 29 },
      { id: 'personid3', name: "3rdPerson", age: 30 },
    ],
    showPersons: true
  }

  switchNameHandler = (newName) => {
    //console.log('Clicked on button');
    this.setState(
      {
        persons: [
          { name: newName, age: 28 },
          { name: "2ndPerson", age: 29 },
          { name: "3rdPerson", age: 50 },
        ]
      }
    )
  }

  changeNameHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    });
    console.log(personIndex);
    const person = this.state.persons[personIndex];
    person.name = event.target.value;

    const localPersons = this.state.persons;
    localPersons[personIndex] = person;

    this.setState(
      {
        persons: localPersons
      }
    )
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  removePersonHandler = (indexOfPerson) => {
    // const localPersons = this.state.persons.slice();
    const localPersons = [...this.state.persons];
    localPersons.splice(indexOfPerson, 1);
    this.setState({ persons: localPersons });
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let personsCode = null;
    if (this.state.showPersons) {
      personsCode = (

        <div>
          {this.state.persons.map((person, indexOfPerson) => {
            return <Person name={person.name} age={person.age}
              clickParagraph={() => this.removePersonHandler(indexOfPerson)}
              changeText={(event) => this.changeNameHandler(event, person.id)}
              key={person.id}
            />
          })}

        </div>
      );
      buttonStyle.backgroundColor='blue';
    }
    
    let cssClasses = [];
    if(this.state.persons.length <= 2)
      cssClasses.push('red');
    if(this.state.persons.length <= 1)
      cssClasses.push('bold');

    return (
      <div className="App">
        <h1>Hi, I am beginner</h1>
        <p className={cssClasses.join(' ')}> another paragraph</p>
        <button
          style={buttonStyle}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {personsCode}
      </div>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null, 'Hi, actual react syntax'))

  }
}

export default App;

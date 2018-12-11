import React, { Component } from 'react';
import appCssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    let personsCode = null;

    if (this.state.showPersons) {
      personsCode = <Persons 
            persons={this.state.persons} 
            clickParagraph={this.removePersonHandler}
            changeText={this.changeNameHandler} />;
    }
    
    return (
      <div className={appCssClasses.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          />
        {personsCode}
      </div>
    );
    //return React.createElement('div',{className:"App"},React.createElement('h1',null, 'Hi, actual react syntax'))

  }
}

export default App;

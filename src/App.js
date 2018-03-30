import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name:"FirstPerson",age:28},
      {name:"2ndPerson",age:29},
      {name:"3rdPerson",age:30},
    ],
    showPersons : true
  }

  switchNameHandler = (newName) => {
    //console.log('Clicked on button');
    this.setState(
      {
        persons : [
          {name:newName,age:28},
          {name:"2ndPerson",age:29},
          {name:"3rdPerson",age:50},
        ]
      }
    )
  }

  changeNameHandler = (event) => {
    this.setState(
      {
        persons : [
          {name:'1stPerson',age:28},
          {name:event.target.value,age:29},
          {name:"3rdPerson",age:50},
        ]
      }
    )
  }

  togglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  // removePersonHandler = (indexOfPerson) => {
  //   const localPersons = this.state.persons;
  //   localPersons.splice(indexOfPerson,1);
  //   this.setState({persons: localPersons});
  // }

  render() {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px',
      cursor: 'pointer'
    };

    let personsCode = null;
    if(this.state.showPersons) {
      personsCode = (
        
        <div> 
          {this.state.persons.map( person => {
            return <Person 
                name={person.name} 
                age={person.age} />
          })}
          
        </div>
      );
    }

    return ( 
      <div className="App">
        <h1>Hi, I am beginner</h1>
        <p> another paragraph</p>
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

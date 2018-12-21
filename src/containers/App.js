import React, { Component } from 'react';
import appCssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js]: Inside contructor', props);
  }

  componentWillMount(){
    console.log('[App.js]. Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js]. Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js]. Inside shouldComponentUpdate()', nextProps, nextState);
    // return true;
    return nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons;
  }

  componentWillUpdate(nextProps, nextState){
      console.log('[UPDATE App.js]. Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
      console.log('[UPDATE App.js]. Inside componentDidUpdate()');
  }
    
  state = {
    persons: [
      { id: 'personid1', name: "FirstPerson", age: 28 },
      { id: 'personid2', name: "2ndPerson", age: 29 },
      { id: 'personid3', name: "3rdPerson", age: 30 },
    ],
    showPersons: false
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
    console.log('[App.js] Inside render()')
    let personsCode = null;

    if (this.state.showPersons) {
      personsCode = <Persons 
            persons={this.state.persons} 
            clickParagraph={this.removePersonHandler}
            changeText={this.changeNameHandler} />;
    }
    
    return (
      <div className={appCssClasses.App}>
        <button onClick={()=> this.setState({showPersons: true})}>Show Persons</button>
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

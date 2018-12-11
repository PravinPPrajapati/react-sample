import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
     render(){
         return this.props.persons.map( (person, indexOfPerson) => {
            return <Person 
                    key={person.id} 
                    name={person.name} 
                    age={person.age}
                    clickParagraph={() => this.props.clickParagraph(indexOfPerson)}
                    changeText={(event) => this.props.changeText(event, person.id)}
                /> 
            } ); 
     }
} 
 

export default Persons;
import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map( (person, indexOfPerson) => {
    return <Person 
            key={person.id} 
            name={person.name} 
            age={person.age}
            clickParagraph={() => props.clickParagraph(indexOfPerson)}
            changeText={(event) => props.changeText(event, person.id)}
        /> 
    } ); 
 

export default persons;
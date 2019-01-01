import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js]: Inside contructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js]. Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js]. Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js]. Inside componentWillReceiveProps()', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[UPDATE Persons.js]. Inside shouldComponentUpdate()', nextProps, nextState);
    //     //return true; 
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changeText !== this.props.changeText ||
    //         nextProps.clickParagraph !== this.props.clickParagraph;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js]. Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js]. Inside componentDidUpdate()');
    }

    render() {
        console.log('[Persons.js] Inside render()')
        return this.props.persons.map((person, indexOfPerson) => {
            return <Person
                key={person.id}
                position={indexOfPerson}
                name={person.name}
                age={person.age}
                clickParagraph={() => this.props.clickParagraph(indexOfPerson)}
                changeText={(event) => this.props.changeText(event, person.id)}
            />
        });
    }
}


export default Persons;
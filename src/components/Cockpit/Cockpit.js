import React from 'react';
import cockpitCssClasses from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let buttonClass = cockpitCssClasses.Button; 

    if (props.showPersons) {
        buttonClass = [cockpitCssClasses.Button, cockpitCssClasses.Red].join(' ');
    }

    let cssClasses = [];
    if (props.persons.length <= 2)
        cssClasses.push(cockpitCssClasses.red);
    if (props.persons.length <= 1)
        cssClasses.push(cockpitCssClasses.bold);


    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={cssClasses.join(' ')}> another paragraph</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons</button>
        </Aux>
    );

};

export default cockpit;
import React from 'react';
import cockpitCssClasses from './Cockpit.css';

const cockpit = (props) => {
    let buttonClass = ''; 

    if (props.showPersons) {
        buttonClass = cockpitCssClasses.Red;
    }

    let cssClasses = [];
    if (props.persons.length <= 2)
        cssClasses.push(cockpitCssClasses.red);
    if (props.persons.length <= 1)
        cssClasses.push(cockpitCssClasses.bold);


    return (
        <div className={cockpitCssClasses.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={cssClasses.join(' ')}> another paragraph</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );

};

export default cockpit;
import React from 'react';
import CockpitCssClasses from './Cockpit.css';

const cockpit = (props) => {
    let buttonClass = '';

    if (props.showPersons) {
        buttonClass = CockpitCssClasses.Red;
    }

    let cssClasses = [];
    if (props.persons.length <= 2)
        cssClasses.push(CockpitCssClasses.red);
    if (props.persons.length <= 1)
        cssClasses.push(CockpitCssClasses.bold);


    return (
        <div className={CockpitCssClasses.Cockpit}>
            <h1>Hi, I am beginner</h1>
            <p className={cssClasses.join(' ')}> another paragraph</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );

};

export default cockpit;
import React from 'react';
import personCssClasses from './Person.css';

const person = (props) => {
    const random = Math.random();
    if(random > 0.5)
    {
        throw new Error('Custom message for Something went wrong');
    }

    return ( 
        <div className={personCssClasses.Person} >
            <p onClick={props.clickParagraph}> I am {props.name} and I am {props.age} Year old. {props.children}</p>
            <input type='text' value={props.name} onChange={props.changeText} />
        </div> 
    )
};

export default person;
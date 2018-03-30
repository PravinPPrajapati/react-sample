import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.clickParagraph}> I am {props.name} and I am {props.age} Year old. {props.children}</p>
            <input type='text' value={props.name} onChange={props.changeText} />
        </div>
    )
};

export default person;
import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const personStyle = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    };
    return ( 
        <div className='Person' style={personStyle}>
            <p onClick={props.clickParagraph}> I am {props.name} and I am {props.age} Year old. {props.children}</p>
            <input type='text' value={props.name} onChange={props.changeText} />
        </div>
    )
};

export default Radium(person);
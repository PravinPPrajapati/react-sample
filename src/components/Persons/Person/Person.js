import React,{Component} from 'react';
import personCssClasses from './Person.css';

class Person extends Component {
    render(){
        return ( 
            <div className={personCssClasses.Person} >
                <p onClick={this.props.clickParagraph}> I am {this.props.name} and I am {this.props.age} Year old. </p>
                <p> {this.props.children}</p>
                <input type='text' value={this.props.name} onChange={this.props.changeText} />
            </div> 
        )
    }
}

export default Person;
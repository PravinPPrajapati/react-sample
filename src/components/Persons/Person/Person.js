import React,{Component} from 'react';
import personCssClasses from './Person.css';
import WithCssClass from '../../../hoc/WithCssClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js]: Inside contructor', props);
    }

    componentWillMount() {
        console.log('[Person.js]. Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js]. Inside componentDidMount()');
    }

    render(){
        console.log('[Person.js] Inside render()')
        return ( 
            <WithCssClass classes={personCssClasses.Person} >
                <p onClick={this.props.clickParagraph}> I am {this.props.name} and I am {this.props.age} Year old. </p>
                <p> {this.props.children}</p>
                <input type='text' value={this.props.name} onChange={this.props.changeText} />
            </WithCssClass> 
        )

        // return [
        //     <p key="1" onClick={this.props.clickParagraph}> I am {this.props.name} and I am {this.props.age} Year old. </p>,
        //     <p key="2">  {this.props.children}</p>,
        //     <input key="3"  type='text' value={this.props.name} onChange={this.props.changeText} />
        // ]
    }
}

export default Person;
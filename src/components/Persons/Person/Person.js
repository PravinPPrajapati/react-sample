import React,{Component} from 'react';
import personCssClasses from './Person.css';
import WrapChildComponent from '../../../hoc/WrapChildComponent';
import withCssUsingClassWrap from '../../../hoc/withCssUsingClassWrap';

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
            <WrapChildComponent >
                <p onClick={this.props.clickParagraph}> I am {this.props.name} and I am {this.props.age} Year old. </p>
                <p> {this.props.children}</p>
                <input type='text' value={this.props.name} onChange={this.props.changeText} />
            </WrapChildComponent> 
        )

        // return [
        //     <p key="1" onClick={this.props.clickParagraph}> I am {this.props.name} and I am {this.props.age} Year old. </p>,
        //     <p key="2">  {this.props.children}</p>,
        //     <input key="3"  type='text' value={this.props.name} onChange={this.props.changeText} />
        // ]
    }
}

export default withCssUsingClassWrap(Person, personCssClasses.Person) ;
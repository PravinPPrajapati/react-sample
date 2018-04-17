import React, { Component } from 'react';
import appCssClasses from './App.css';
import Person from './Person/Person';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8086/product')
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        this.setState({ product: data  });
      })
      .catch(function (err) {
        console.log('error caught', err);
      });
  }

  render() {
    return (
      <div>
        { 
          this.state.product.map((p) => {
           return <div key={p.productId}>{p.productName}-{p.productDesc}</div>
          }) 
        }
        <div key="">{this.props.name}</div>
      </div>
    );
  }
}

export default App;

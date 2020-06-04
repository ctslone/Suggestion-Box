import React, {Component} from 'react';
import './App.css';

import Widget from './Components/Widget';

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  state = {
    comment: '',
    stuff: "hey"
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      comment: event.target.value
    });
    
    // console.log("working")
  }

  handleSubmit() {
    let words = this.state.comment
    console.log(words);
  }

  render() {
    return (
    <Widget 
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      value={this.state.value}
    />
    );
  };
}




export default App;

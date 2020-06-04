import React, {Component} from 'react';
import './App.css';

import Widget from './Components/Widget';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      comment: '',
      stuff: "hey"}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // state = {
  //   comment: '',
  //   stuff: "hey"
  // }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({
      comment: event.target.value
    });
  }

  handleSubmit() {
    console.log(this.state.comment)
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

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      repeater: ''
    }
    this.theRepeater= this.theRepeater.bind(this)
  }

  theRepeater(e){
    this.setState({
     repeater: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input onChange={this.theRepeater} type="text" placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }
}

export default App;

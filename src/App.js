import React, { Component } from 'react';

import Display from './components/Display';

import Button from './components/Button';

import operate from './logic/operate';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      number: null,
      total: null,
      operation: null
    }

  }

  calc = (buttonName) => {
    this.setState(operate(this.state, buttonName));
  }
  
  render() {
    return (
      <div className="App">
        <div className="box">
          <div className="calculator">
            <Display value={this.state.number || this.state.total || "0"} />
            <Button calculate={this.calc}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

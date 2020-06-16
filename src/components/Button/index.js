import React, { Component } from 'react';

import './styles.css';

class Button extends Component {
  render() {
    return (
      <div className="button">
        <div className="row">
          <button onClick={() => { this.props.calculate("AC") }}>AC</button>
          <button onClick={() => { this.props.calculate("+") }}>+</button>
          <button onClick={() => { this.props.calculate("-") }}>-</button>
          <button onClick={() => { this.props.calculate("=") }}>=</button>
        </div>
        <div className="row">
          <button onClick={() => { this.props.calculate("1")} }>1</button>
          <button onClick={() => { this.props.calculate("2") }}>2</button>
          <button onClick={() => { this.props.calculate("3") }}>3</button>
          <button onClick={() => { this.props.calculate("*") }}>x</button>
        </div>
        <div className="row">
          <button onClick={() => {this.props.calculate("4")}}>4</button>
          <button onClick={() => {this.props.calculate("5")}}>5</button>
          <button onClick={() => {this.props.calculate("6")}}>6</button>
          <button onClick={() => { this.props.calculate("/") }}>/</button>
        </div>
        <div className="row">
          <button onClick={() => {this.props.calculate("7")}}>7</button>
          <button onClick={() => {this.props.calculate("8")}}>8</button>
          <button onClick={() => {this.props.calculate("9")}}>9</button>
          <button onClick={ () => { this.props.calculate(".") } }>.</button>
        </div>
        <div className="row">
          <button onClick={() => { this.props.calculate("0") }}>0</button>
        </div>
      </div>
    );
  };
};

export default Button;
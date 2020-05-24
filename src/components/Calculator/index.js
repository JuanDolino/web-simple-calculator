import React from 'react';

import './styles.css'

function Calculator() {
  return (
    <div className="box">
      <div className="calculator">
        <div className="result-display">
        </div>
        
        <div className="buttons">

          <div className="row">
            <button className="button-ac">AC</button>
            <button className="button-add">+</button>
            <button className="button-minus">-</button>
            <button className="button-equal">=</button>
          </div>
          <div className="row">
            <button className="button-1">1</button>
            <button className="button-2">2</button>
            <button className="button-3">3</button>
            <button className="button-multiplied">x</button>
          </div>
          <div className="row">
            <button className="button-4">4</button>
            <button className="button-5">5</button>
            <button className="button-6">6</button>
            <button className="button-divided">/</button>
          </div>
          <div className="row">
            <button className="button-7">7</button>
            <button className="button-8">8</button>
            <button className="button-9">9</button>
            <button className="button-clear">C</button>
          </div>
          <div className="row">
            <button className="button-0">0</button>
            <button className="button-point">.</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Calculator;
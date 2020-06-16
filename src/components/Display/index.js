import React, { Component } from 'react';

import './styles.css';

class Display extends Component {
  render() {
    return (
      <div className="display">
        <h2>{this.props.value}</h2>
      </div>
    );
  };
};

export default Display;

import React, { Component } from 'react';
import './Buttons.css';

class Buttons2 extends Component {
  render() {
    const { buttonsToShow } = this.props
    return (
      <div className="Buttons2">
        {buttonsToShow.join(',')}
      </div>
    );
  }
}

export default Buttons2;

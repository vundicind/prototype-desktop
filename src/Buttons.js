import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
  render() {
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    return (
      <div className="Buttons">
        <form>
          {buttons.map((value, index) => {
            return (
              <div className="form-row">
                <button type="button" className="btn btn-primary" onClick={() => this.props.onButtonChange(value) }>{value}</button>
              </div>
            )
          })}
        </form>
      </div>
    );
  }
}

export default Buttons;

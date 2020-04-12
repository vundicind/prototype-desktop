import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  handleClick(value) {
    const request = new Request('http://localhost:8080/buttons/' + value, {method: 'POST'});
    fetch(request)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    this.props.onButtonChange(value)
  }

  render() {
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    return (
      <div className="Buttons">
        <form>
          {buttons.map((value, index) => {
            return (
              <div className="form-row">
                <button type="button" className="btn btn-primary" onClick={() => this.handleClick(value)}>{value}</button>
              </div>
            )
          })}
        </form>
      </div>
    );
  }
}

export default Buttons;

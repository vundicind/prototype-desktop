import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Buttons2 from './Buttons2';

const {app} = window.require('electron').remote;

class App extends Component {
  state = {
    buttonsHistory: []
  }

  onClick = id => {
    this.setState((prevState) => ({
      buttonsHistory: [...prevState.buttonsHistory, id]
    })); return false;
  }

  render() {
    const { buttonsHistory } = { ...this.state }
    return (
      <div className="App container">
        <div className="row mt-5">
          <div className="col-sm-6">
            <Buttons onButtonChange={this.onClick} />
          </div>
          <div className="col-sm-6">
            <Buttons2 buttonsToShow={buttonsHistory} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

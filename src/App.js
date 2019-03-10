import React, { Component } from 'react';
import logo from './logo2.svg';
import Jason from './components/Jason';
import Intro from './components/Intro';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Intro />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-logo">
            Codejoy
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="App-logo">
          < Jason />
        </div>
        < Jason/>
      </div>
    );
  }
}

export default App;

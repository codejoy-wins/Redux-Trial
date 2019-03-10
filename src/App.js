import React, { Component } from 'react';
import logo from './logo.svg';
import Jason from './components/Jason';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Jason />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
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
        < Jason />
      </div>
    );
  }
}

export default App;

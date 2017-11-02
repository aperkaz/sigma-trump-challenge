import React, { Component } from 'react';

import { tweetsPerHour } from './utils/dataManupulation';
import { tweets } from '../src/data/data';

import Graph from './components/Graph';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Graph data={tweetsPerHour(tweets)} />
      </div>
    );
  }
}

export default App;

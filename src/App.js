// -- dependencies --
import React, { Component } from 'react';
// -- app --
import {
    ownTweetWithMostFavs,
    mostRetweetedTweet,
    tweetsPerHour,
} from './utils/dataManupulation';
import { tweets } from '../src/data/data';

import Graph from './components/Graph';
import Tweet from './components/Tweet';
import logo from './trump.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trump Tweet Challenge with React.js</h1>
        </header>
        <Graph data={tweetsPerHour(tweets)} />
        <div>
            Total tweets: {tweets.length}
        </div>
        <div style={{margin: '30px 100px' }}>
            Most fav tweet:
          <Tweet data={ownTweetWithMostFavs(tweets)}/>
        </div>
        <div style={{margin: '30px 100px' }}>
           Most RTed tweet (not own):
           <Tweet data={mostRetweetedTweet(tweets)}/>
        </div>
      </div>
    );
  }
}

export default App;

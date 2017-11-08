import React, { Component } from 'react';

import {
    ownTweetWithMostLikes,
    retweetWithMostLikes,
    tweetsPerHour,
    dayWithMostTweets
} from './utils/dataManupulation';
import { tweets } from '../src/data/data';

import Graph from './components/Graph';
import Total from './components/Total';
import Tweet from './components/Tweet';
import logo from './logo.svg';
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
        <Total total={tweets.length} />
        <div style={{margin: '30px' }}>
            Most fav tweet:
          <Tweet data={ownTweetWithMostLikes(tweets)}/>
        </div>
        <div style={{margin: '30px' }}>
           Most RTed tweet (not own):
           <Tweet data={retweetWithMostLikes(tweets)}/>
        </div>

      </div>
    );
  }
}

export default App;

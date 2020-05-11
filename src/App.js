import React from 'react';
import logo from './logo.svg';
import './App.css';

// 20 quotes
const quotes = [
  {
    "img": "insert img",
    "quote": "q",
    "author": "q"
  },
  {
    "img": "insert img",
    "quote": "w",
    "author": "w"
  },
  {
    "img": "insert img",
    "quote": "e",
    "author": "e"
  },
  {
    "img": "insert img",
    "quote": "r",
    "author": "r"
  },
  {
    "img": "insert img",
    "quote": "t",
    "author": "t"
  },
  {
    "img": "insert img",
    "quote": "y",
    "author": "y"
  },
  {
    "img": "insert img",
    "quote": "u",
    "author": "u"
  },
  {
    "img": "insert img",
    "quote": "i",
    "author": "i"
  },
  {
    "img": "insert img",
    "quote": "o",
    "author": "o"
  },
  {
    "img": "insert img",
    "quote": "p",
    "author": "p"
  },
  {
    "img": "insert img",
    "quote": "a",
    "author": "a"
  },
  {
    "img": "insert img",
    "quote": "s",
    "author": "s"
  },
  {
    "img": "insert img",
    "quote": "d",
    "author": "d"
  },
  {
    "img": "insert img",
    "quote": "f",
    "author": "f"
  },
  {
    "img": "insert img",
    "quote": "g",
    "author": "g"
  },
  {
    "img": "insert img",
    "quote": "h",
    "author": "h"
  },
  {
    "img": "insert img",
    "quote": "j",
    "author": "j"
  },
  {
    "img": "insert img",
    "quote": "k",
    "author": "k"
  },
  {
    "img": "insert img",
    "quote": "l",
    "author": "l"
  },
  {
    "img": "insert img",
    "quote": "z",
    "author": "z"
  }
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 1
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      number: Math.floor(Math.random() * quotes.length)
    }));
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <h1>Random Quote Machine</h1>
        <p id="img">{quotes[this.state.number].img}</p>
        <p id="text">{quotes[this.state.number].quote}</p>
        <p id="author">{quotes[this.state.number].author}</p>
        <button onClick={this.handleClick} id="new-quote">Click me for a new quote!</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">Share on twitter</a>
      </div>
    );
  }
}

export default App;

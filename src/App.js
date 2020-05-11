import React from 'react';
import logo from './logo.svg';
import './App.css';

// 20 quotes
const quotes = [
  {
    "img": "insert img",
    "quote": "\"If you want to get to know someone, find out what makes them angry.\"",
    "author": "Gon Freecss"
  },
  {
    "img": "insert img",
    "quote": "\"If you want to get to know someone, find out what makes them angry.\"",
    "author": "Gon Freecss"
  },
  {
    "img": "insert img",
    "quote": "\"Who wants to have their life planned out for them?\"",
    "author": "Killua Zoldyck"
  },
  {
    "img": "insert img",
    "quote": "\"We didn't do anything... Our enemies did.\"",
    "author": "Killua Zoldyck"
  },
  {
    "img": "insert img",
    "quote": "\"When I ignore a friend I have the ability to help, wouldn’t I be betraying him?\"",
    "author": "Killua Zoldyck"
  },
  {
    "img": "insert img",
    "quote": "\"When I say it doesn’t hurt me, that means I can bear it.\"",
    "author": "Killua Zoldyck"
  },
  {
    "img": "insert img",
    "quote": "\"The only principle is that there are no principles.\"",
    "author": "Kurapika"
  },
  {
    "img": "insert img",
    "quote": "\"There are two things that collectors always want. The first is any item of extreme rarity. The second is colleagues to whom they can brag about their collection.\"",
    "author": "Kurapika"
  },
  {
    "img": "insert img",
    "quote": "\"I want money – money can get you anything in this world.\"",
    "author": "Leorio Paradinight"
  },
  {
    "img": "insert img",
    "quote": "\"For the right price, you can buy not only treasures, but dreams, hearts, and even people’s lives!\"",
    "author": "Leorio Paradinight"
  },
  {
    "img": "insert img",
    "quote": "\"Human potential for evolution is limitless.\"",
    "author": "Isaac Netero"
  },
  {
    "img": "insert img",
    "quote": "\"We are not desperate for help, we only seek the strong.\"",
    "author": "Isaac Netero"
  },
  {
    "img": "insert img",
    "quote": "\"A prayer comes from the heart. If the heart achieves the correct form, it becomes emotion. And emotions may be manifested.\"",
    "author": "Isaac Netero"
  },
  {
    "img": "insert img",
    "quote": "\"Love and hate are two sides of the same coin.\"",
    "author": "Hisoka"
  },
  {
    "img": "insert img",
    "quote": "\"It takes a mere second for treasure to turn to trash.\"",
    "author": "Hisoka"
  },
  {
    "img": "insert img",
    "quote": "\"Every step we take amends our fate.\"",
    "author": "Hisoka"
  },
  {
    "img": "insert img",
    "quote": "\"You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want.\"",
    "author": "Ging Freecss"
  },
  {
    "img": "insert img",
    "quote": "\"An apology is a promise to do things differently next time, and to keep the promise.\"",
    "author": "Ging Freecss"
  },
  {
    "img": "insert img",
    "quote": "\"There are liars who only lie when there’s a reason to, and there are liars who also lie without a reason.\"",
    "author": "Biscuit Krueger"
  },
  {
    "img": "insert img",
    "quote": "\"Skill is one thing, and caution another.\"",
    "author": "Geretta"
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

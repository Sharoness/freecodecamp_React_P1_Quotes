import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import CardQuote from './CardQuote.jsx';
import Title from './Title.jsx';
import quotes from './quotes.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    this.handleClick=this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState(state => ({
      number: Math.floor(Math.random() * quotes.length)
    }));
  }

  handleClick(){
    this.setState(state => ({
      number: Math.floor(Math.random() * quotes.length)
    }));
  }

  render() {
    return (
      <div className="App" id="quote-box">
      <Container>
        <Title title="Random Quote Machine" />
        <CardQuote author={quotes[this.state.number].author} image={quotes[this.state.number].img} quote={quotes[this.state.number].quote} number={this.state.number} click={this.handleClick} />
      </Container>
      </div>
    );
  }
}

export default App;
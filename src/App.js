import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import gonImage from './images/gonDetermined.jpg';
import gonImageTwo from './images/gonSmiling.png';
import killuaBored from './images/killua_bored.jpg';
import killuaGodspeed from './images/killua_godspeed.png';
import killuaMurder from './images/Killua_murders_bodoro.png';
import killuaAndGon from './images/gon_and_killua.jpg';
import kurapikaImage from './images/kurapika.jpg';
import kurapikaScarletEyes from './images/kurapika_scarlet_eyes.jpg';
import leorioMoney from './images/leorio_money.jpg';
import leorioFinger from './images/leorio.jpg';
import neteroChairman from './images/Netero-Debut.jpg';
import neteroBall from './images/netero_ball.jpg';
import neteroNen from './images/neteroNen.jpg';
import hisokaEye from './images/hisoka_eye.jpg';
import hisokaBungeegum from './images/hisoka_bungeegum.jpg';
import hisokaHairDown from './images/hisoka_hairdown.png';
import gingimage from './images/gingfreecss.jpg';
import gingimageTwo from './images/ging.jpg';
import biscuitnormal from './images/Biscuit_Full_Body_View.jpg';
import gerettaimage from './images/geretta.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

// 20 quotes
const quotes = [
  {
    "img": gonImage,
    "quote": "\"Qualification isn't something we have to talk about. The ones who are not okay with their success can go through training until they are.\"",
    "author": "Gon Freecss"
  },
  {
    "img": gonImageTwo,
    "quote": "\"If you want to get to know someone, find out what makes them angry.\"",
    "author": "Gon Freecss"
  },
  {
    "img": killuaBored,
    "quote": "\"Who wants to have their life planned out for them?\"",
    "author": "Killua Zoldyck"
  },
  {
    "img": killuaGodspeed,
    "quote": "\"We didn't do anything... Our enemies did.\"",
    "author": "Killua Zoldyck"
  },
  {
    "img": killuaAndGon,
    "quote": "\"When I ignore a friend I have the ability to help, wouldn’t I be betraying him?\"",
    "author": "Killua Zoldyck"
  },
  {
    "img": killuaMurder,
    "quote": "\"When I say it doesn’t hurt me, that means I can bear it.\"",
    "author": "Killua Zoldyck"
  },
  {
    "img": kurapikaImage,
    "quote": "\"The only principle is that there are no principles.\"",
    "author": "Kurapika"
  },
  {
    "img": kurapikaScarletEyes,
    "quote": "\"There are two things that collectors always want. The first is any item of extreme rarity. The second is colleagues to whom they can brag about their collection.\"",
    "author": "Kurapika"
  },
  {
    "img": leorioMoney,
    "quote": "\"I want money – money can get you anything in this world.\"",
    "author": "Leorio Paradinight"
  },
  {
    "img": leorioFinger,
    "quote": "\"For the right price, you can buy not only treasures, but dreams, hearts, and even people’s lives!\"",
    "author": "Leorio Paradinight"
  },
  {
    "img": neteroChairman,
    "quote": "\"Human potential for evolution is limitless.\"",
    "author": "Isaac Netero"
  },
  {
    "img": neteroBall,
    "quote": "\"We are not desperate for help, we only seek the strong.\"",
    "author": "Isaac Netero"
  },
  {
    "img": neteroNen,
    "quote": "\"A prayer comes from the heart. If the heart achieves the correct form, it becomes emotion. And emotions may be manifested.\"",
    "author": "Isaac Netero"
  },
  {
    "img": hisokaEye,
    "quote": "\"Love and hate are two sides of the same coin.\"",
    "author": "Hisoka"
  },
  {
    "img": hisokaBungeegum,
    "quote": "\"It takes a mere second for treasure to turn to trash.\"",
    "author": "Hisoka"
  },
  {
    "img": hisokaHairDown,
    "quote": "\"Every step we take amends our fate.\"",
    "author": "Hisoka"
  },
  {
    "img": gingimage,
    "quote": "\"You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want.\"",
    "author": "Ging Freecss"
  },
  {
    "img": gingimageTwo,
    "quote": "\"An apology is a promise to do things differently next time, and to keep the promise.\"",
    "author": "Ging Freecss"
  },
  {
    "img": biscuitnormal,
    "quote": "\"There are liars who only lie when there’s a reason to, and there are liars who also lie without a reason.\"",
    "author": "Biscuit Krueger"
  },
  {
    "img": gerettaimage,
    "quote": "\"Skill is one thing, and caution another.\"",
    "author": "Geretta"
  }
];

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
        <Row className="justify-content-center">
          <Col className="col-md-auto m-4">
            <h1>Random Quote Machine</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="col-md-auto  my-2" style={{ width: '400px'}}>

            <Card className="text-center border border-primary">
              <Card.Img variant="top" id="img" src={quotes[this.state.number].img} alt="image of author" className="col-md-auto mt-3" />
              <Card.Body>
                <blockquote className="blockquote my-0 card-body" id="text"><p>{quotes[this.state.number].quote}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title" id="author">
                  <p>{quotes[this.state.number].author}</p>
                  </cite>
                </footer>
                </blockquote>
                <Button variant="primary" onClick={this.handleClick} id="new-quote" className="float-right py-2">New quote</Button>
                <Card.Link id="tweet-quote" href="twitter.com/intent/tweet" className="float-left py-2"><FontAwesomeIcon icon={faTwitter} size="lg" /></Card.Link>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;

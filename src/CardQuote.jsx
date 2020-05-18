import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import BlockQuote from './BlockQuote.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CardQuote extends React.Component {
	render() {
		return (
			<Row className="justify-content-center">
          		<Col className="col-md-auto  my-2" style={{ width: '400px'}} id="test">
					<Card className="text-center border border-primary">
			        	<Card.Img variant="top" id="img" src={this.props.image} alt="image of author" className="col-md-auto mt-3" />
			        	<Card.Body>
			            	<BlockQuote quote={this.props.quote} author={this.props.author} />
			                <Button variant="primary" onClick={this.props.click} id="new-quote" className="float-right py-2">New quote</Button>
			                <a id="tweet-quote" href="twitter.com/intent/tweet" className="float-left py-2">
			                	<FontAwesomeIcon icon={faTwitter} size="lg" />
			                </a>
			            </Card.Body>
		        	</Card>
		        </Col>
        	</Row>
        )
	}
}

export default CardQuote;

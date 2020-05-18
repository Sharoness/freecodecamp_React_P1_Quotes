import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class CardQuote extends React.Component {
	render() {
		return (
			<Card className="text-center border border-primary">
	        	<Card.Img variant="top" id="img" src={this.props.image} alt="image of author" className="col-md-auto mt-3" />
	        	<Card.Body>
	            	<blockquote className="blockquote my-0 card-body" id="text">
	            		<p>{this.props.quote}</p>
	                	<footer className="blockquote-footer">
	                		<cite title="Source Title" id="author">
	                  			<p>{this.props.author}</p>
	                  		</cite>
	                	</footer>
	                </blockquote>
	                <Button variant="primary" onClick={this.props.click} id="new-quote" className="float-right py-2">New quote</Button>
	                <a id="tweet-quote" href="twitter.com/intent/tweet" className="float-left py-2">
	                	<FontAwesomeIcon icon={faTwitter} size="lg" />
	                </a>
	            </Card.Body>
        	</Card>
        )
	}
}

export default CardQuote;

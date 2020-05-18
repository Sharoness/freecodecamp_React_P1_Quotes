import React from 'react';

class BlockQuote extends React.Component {
	render() {
		return (
	    	<blockquote className="blockquote my-0 card-body" id="text">
	    		<p>{this.props.quote}</p>
	        	<footer className="blockquote-footer">
	        		<cite title="Source Title" id="author">
	          			<p>{this.props.author}</p>
	          		</cite>
	        	</footer>
	        </blockquote>
        )
	}
}

export default BlockQuote;

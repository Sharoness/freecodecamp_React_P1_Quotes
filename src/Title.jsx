import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Title extends React.Component {
	render() {
		return (
			<Row className="justify-content-center">
         		<Col className="col-md-auto m-4">
					 <h1>{this.props.title}</h1>
          		</Col>
			</Row>
		)
	}
}

export default Title;

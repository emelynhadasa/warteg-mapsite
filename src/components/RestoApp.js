import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestoPageDetails from './RestoPageDetails';
import RestoPageMap from './RestoPageMap';

class RestoApp extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <RestoPageMap />
          </Col>
          <Col>
            <RestoPageDetails />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RestoApp;

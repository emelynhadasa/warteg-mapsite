import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestoPageDetails from './RestoPageDetails';
import RestoPageMap from './RestoPageMap';

class RestoApp extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={12} md={6} className="map-container">
            <RestoPageMap />
          </Col>
          <Col xs={12} md={6} className="details-container">
            <RestoPageDetails />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RestoApp;

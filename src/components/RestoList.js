import React from 'react';
import RestoItem from './RestoItem';
import { Container, Row, Col } from 'react-bootstrap';

function RestoList({ restos }) {
  return (
    <Container>
      <Row xs={1} md={3}>
        {restos.map((resto) => (
          <Col key={resto.id} className="card-col">
            <RestoItem {...resto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RestoList;

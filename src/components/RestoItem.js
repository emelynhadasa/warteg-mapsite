import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function RestoItem({ imageUrl, restoName, address, priceRange}) {
  return (
    <Card className="card mb-3 resto-item">
      <Card.Img variant="top" src={imageUrl} alt={restoName} />
      <Card.Body>
        <Card.Title>{restoName}</Card.Title>
        <Card.Text>{address}</Card.Text>
        <Card.Text>{priceRange}</Card.Text>
        <Button variant="primary">Direct Me</Button>
      </Card.Body>
    </Card>
  );
}

export default RestoItem;

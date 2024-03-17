import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//if want to go back to border mode: <Card.Img variant="top" src={imageUrl} alt={restoName} /> and undo the border none

function RestoItem({ imageUrl, restoName, address, priceRange}) {
  return (
    <Card className="card mb-3 resto-item">
      <Card.Img variant="top" src={imageUrl} alt={restoName} />
      <Card.Body>
        <Card.Title>{restoName}</Card.Title>
        <Card.Text><p className='card-address'>Address: {address}</p></Card.Text>
        <Card.Text><p className='card-price'>{priceRange}</p></Card.Text>
        <Button variant="primary" className='card-button'>Direct Me</Button>
      </Card.Body>
    </Card>
  );
}

export default RestoItem;

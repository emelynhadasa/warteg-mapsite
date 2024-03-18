import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function RestoItem({ imageUrl, restoName, address, priceRange, lat, long }) {
  const handleDirectMe = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div style={{ position: 'relative' }} className='resto-card'>
      <Card className="card mb-3 resto-item" style={{ height: '200px', overflow: 'hidden' }}>
        <Card.Img variant="top" src={imageUrl} alt={restoName} style={{ objectFit: 'cover', height: '100px' }} />
        <Card.Body style={{ overflowY: 'auto' }}>
          <Card.Title style={{ marginBottom: '0.5rem' }}>{restoName}</Card.Title>
          <Card.Text style={{ marginBottom: '0.5rem' }}><p className='card-address'>Address: {address}</p></Card.Text>
          <Card.Text style={{ marginBottom: '0.5rem' }}><p className='card-price'>{priceRange}</p></Card.Text>
        </Card.Body>
      </Card>
      <Button variant="primary" className='card-button show-on-map' style={{ position: 'absolute', bottom: '-50px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }} onClick={handleDirectMe}>
        View Route
      </Button>
    </div>
  );
}

export default RestoItem;

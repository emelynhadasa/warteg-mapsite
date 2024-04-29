import React from 'react';
import Card from 'react-bootstrap/Card';

function RestoItem({ imageUrl, restoName, address, priceRange, lat, long, id }) {
  const handleDirectMe = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${long}&travelmode=driving`;
    window.open(googleMapsUrl, '_blank');
  };

  const panoramaUrl = `http://localhost/panorama_${id}/index.html`;

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
      <div className='resto-item-button'>
        <button className='card-button show-on-map' style={{ position: 'absolute', bottom: '-50px', left: '26%', transform: 'translateX(-50%)', zIndex: 1 }} onClick={handleDirectMe}>
          View Route
        </button>
        <a href={panoramaUrl} className='card-button show-on-map' style={{ width: '4.4rem', position: 'absolute', bottom: '-50px', left: '77%', transform: 'translateX(-50%)', zIndex: 1 }}>
          Panorama
        </a>
      </div>
    </div>
  );
}

export default RestoItem;

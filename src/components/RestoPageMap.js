import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function LeafletMap() {
  useEffect(() => {
    const map = L.map('map').setView([-6.282972866429095, 107.1676635963592], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 15, 
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const markerVar = L.circleMarker([-6.282808057057474, 107.16752542523142]).addTo(map);

    markerVar.bindPopup("<b>Happy Nice Resto</b><br>Kos Hj. Dayat 09/10").openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '550px'}}></div>;
}

function RestoPageMap() {
  return (
    <div>
      <LeafletMap />
    </div>
  );
}

export default RestoPageMap;

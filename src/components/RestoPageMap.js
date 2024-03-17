import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../src/App.css';
import RestoPlaceImage from './restaurant.png'; 
import { getData } from '../utils/data'; 

function LeafletMap() {
  useEffect(() => {
    const map = L.map('map').setView([-6.282972866429095, 107.1676635963592], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 15,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: RestoPlaceImage,
      iconSize: [50, 50],
      iconAnchor: [25, 20], 
    });

    const restaurants = getData();

    restaurants.forEach((restaurant) => {
      const { lat, long, restoName, address, priceRange, imageUrl } = restaurant;

      // HTML content for the popup
      const popupContent = `
        <div style="display: flex; align-items: center;">
          <img src="${imageUrl}" alt="${restoName}" style="width: 70px; height: 50px; margin-right: 10px;">
          <div>
            <b>${restoName}</b><br>
            <span class="address">${address}</span><br> 
            <span class="priceRange">${priceRange}</span><br> 
          </div>
        </div>
      `;

      const marker = L.marker([lat, long], { icon: customIcon }).addTo(map);
      marker.bindPopup(popupContent).openPopup();
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="leaflet-map"></div>;
}

function RestoPageMap() {
  return (
    <div>
      <LeafletMap />
    </div>
  );
}

export default RestoPageMap;
export { LeafletMap };

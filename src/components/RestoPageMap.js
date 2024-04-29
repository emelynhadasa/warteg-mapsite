import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import UserPlaceImage from './userloc.png'; 
import RestoPlaceImage from './restaurant.png';
import { getData } from '../utils/data'; 
import 'leaflet-search/dist/leaflet-search.src.css';
import 'leaflet-search';
import 'leaflet.browser.print/dist/leaflet.browser.print';

function LeafletMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([-6.282972866429095, 107.1676635963592], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        minZoom: 15,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      
      const restaurants = getData();

      const markers = restaurants.map((restaurant) => {
        const { lat, long, restoName, address, priceRange, imageUrl } = restaurant;

        // HTML content for the popup
        const popupContent = `
          <div style="display: flex; align-items: center;" class="popup-content">
            <img src="${imageUrl}" alt="${restoName}" style="width: 70px; height: 50px; margin-right: 10px;">
            <div>
              <b>${restoName}</b><br>
              <span class="address">${address}</span><br> 
              <span class="priceRange">${priceRange}</span><br> 
            </div>
          </div>
        `;

        const customIcon = L.icon({
          iconUrl: RestoPlaceImage,
          iconSize: [50, 50],
          iconAnchor: [25, 20], 
        });

        const marker = L.marker([lat, long], { icon: customIcon });
        marker.bindPopup(popupContent);

        marker.restoName = restoName;
        marker.imageUrl = imageUrl;
        marker.address = address;
        marker.priceRange = priceRange;

        marker.setIcon(L.icon({
          iconUrl: RestoPlaceImage,
          iconSize: [50, 50],
          iconAnchor: [25, 20], 
        }));

        return marker;
        
      });

      const userIcon = L.icon({
        iconUrl: UserPlaceImage,
        iconSize: [50, 50],
        iconAnchor: [25, 20], 
      });
      
      const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              const userMarker = L.marker([latitude, longitude], { icon: userIcon }).addTo(map);
              userMarker.bindPopup("You are here").openPopup();
            },
            error => console.error('Error getting user location:', error)
          );
        } else {
          console.log("Your browser doesn't support geolocation feature!")
        }
      };

      getLocation();

      const markerLayerGroup = L.layerGroup(markers);
      markerLayerGroup.addTo(map);

      const geoJSONData = {
        type: "FeatureCollection",
        features: markers.map(marker => {
          return {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [marker.getLatLng().lng, marker.getLatLng().lat]
            },
            properties: {
              restoName: marker.restoName, 
              imageUrl: marker.imageUrl,
              address: marker.address, 
              priceRange: marker.priceRange, 
              icon: {
                iconUrl: RestoPlaceImage,
                iconSize: [50, 50], 
                iconAnchor: [25, 20]
              },
              popupContent: `
                <div style="display: flex; align-items: center;" class="popup-content">
                  <img src="${marker.imageUrl}" alt="${marker.restoName}" style="width: 70px; height: 50px; margin-right: 10px;">
                  <div>
                    <b>${marker.restoName}</b><br>
                    <span class="address">${marker.address}</span><br> 
                    <span class="priceRange">${marker.priceRange}</span><br> 
                  </div>
                </div>
              ` 
            }
          };
        })
      };
      

      const searchControl = new L.Control.Search({
        layer: L.geoJSON(geoJSONData, {
          pointToLayer: function (feature, latlng) {
            const marker = L.marker(latlng, {
              icon: L.icon(feature.properties.icon)
            });
            marker.bindPopup(feature.properties.popupContent); 
            return marker;
          }
        }),
        propertyName: 'restoName', 
        marker: false, 
        moveToLocation: (latlng, title, map) => { 
          const zoomLevel = map.getZoom() > 20 ? map.getZoom() : 20;
          map.setView(latlng, zoomLevel);
        }
      });

      searchControl.on('search:locationfound', function (e) {
        e.layer.openPopup(); 
      });

      searchControl.addTo(map);

      const browserPrintControl = L.control.browserPrint({
        position: 'topright',
        title: 'Print Map',
        printModes: ['Portrait', 'Landscape'],
      });

      browserPrintControl.addTo(map);

      return () => {
        map.remove();
      };
    }
  }, []);

  return <div ref={mapRef} id="map" className="leaflet-map"></div>;
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
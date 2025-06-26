import { useContext, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { AllDataContext } from '../../contextApi/DataContext';

export default function ContactMap() {
  const { contactPage: { maps } } = useContext(AllDataContext)

  useEffect(() => {
    const map = new maplibregl.Map({
      container: 'map', // HTML element id
      center: [maps.longitude, maps.latitude], // [lng, lat]
      zoom: 5,

      // map Style ================
      // Streets	https://api.maptiler.com/maps/streets/style.json?key=YOUR_KEY
      // Satellite	https://api.maptiler.com/maps/hybrid/style.json?key=YOUR_KEY
      // Outdoor	https://api.maptiler.com/maps/outdoor/style.json?key=YOUR_KEY
      // Light	https://api.maptiler.com/maps/dataviz/style.json?key=YOUR_KEY
      // Dark	https://api.maptiler.com/maps/dataviz-dark/style.json?key=YOUR_KEY

      style: 'https://api.maptiler.com/maps/streets/style.json?key=9NAUkIN5vfKH5gFPW07o' // <-- Change this
    });

    new maplibregl.Marker().setLngLat([maps.longitude, maps.latitude]).addTo(map);
  }, []);

  return (
    <div id="map" style={{ height: '100%', width: '100%' }}></div>
  );
}

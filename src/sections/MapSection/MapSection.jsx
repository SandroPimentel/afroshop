import React from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './mapsection.module.scss';
import StoreImage from '../../images/store-pic.webp';
import Arrow from '../../images/arrow-map.webp';

const MapSection = () => {
  const boutiqueCoords = { lat: 44.741527938889945, lng: 1.439012065212722 };

  const handleApiLoaded = (map, maps) => {
    const marker = new maps.Marker({
      position: boutiqueCoords,
      map,
      title: '24 Route de Gourdon, Le Vigan 46300'
    });

    marker.addListener('click', () => {
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${boutiqueCoords.lat},${boutiqueCoords.lng}`;
      window.open(googleMapsUrl, '_blank');
    });
  };

  return (
    <section className={styles.map} id="map">
      <h1>Nos coordonnées</h1>
      <p>Cliquez sur le Pointeur pour avoir directement le trajet vers notre boutique</p>
      <div className={styles.mapContent}>
        <div style={{ height: '50vh', width:'1000px'}}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCI41KdBAva2dRUXRKdqrInMg39xfqhz0E' }}
            defaultCenter={boutiqueCoords}
            defaultZoom={11}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;

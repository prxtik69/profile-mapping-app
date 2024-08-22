
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ address }) => {
  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  const defaultCenter = {
    lat: address.lat,
    lng: address.lng
  };

  return (

    // TO BE DONE
    // I have to put API key here
    <LoadScript googleMapsApiKey="https://maps.googleapis.com/maps/api/js?sensor=false&callback=myMap"> 
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;

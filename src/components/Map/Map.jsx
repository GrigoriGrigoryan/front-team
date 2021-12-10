/* eslint-disable no-unused-vars */
import React from 'react';
import Leaflet from 'leaflet';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import PropTypes from 'prop-types';
import GreenIcon from '../../assets/images/leaf.png';
import '../styles/Map.css';

const icon = Leaflet.icon({
  iconUrl: GreenIcon,
  iconSize: [80, 90], // size of the icon
  shadowSize: [55, 70], // size of the shadow
  iconAnchor: [24, 105], // point of the icon which will correspond to marker's location
  shadowAnchor: [6, 72], // the same for the shadow
  popupAnchor: [-6, -90], // point from which the popup should open relative to the iconAnchor
});

const Map = () => {
  return (
    <div className='Map'>
      <MapContainer className='Map' center={[59.9375, 30.308611]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
          url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
          maxZoom={16}
          minZoom={3}
          noWrap={true}
        />
        <Marker position={[59.9375, 30.308611]} icon={icon}>
          <Popup>Informations about the eco station.</Popup>
        </Marker>
        <Marker position={[59.8375, 30.408611]} icon={icon}>
          <Popup>Informations about the eco station.</Popup>
        </Marker>
        <Marker position={[59.7375, 30.208611]} icon={icon}>
          <Popup>Informations about the eco station.</Popup>
        </Marker>
      </MapContainer>
      <div className='GarbageTypes'>
        <h2>Different icons according to the waste types will belong here..</h2>
      </div>
    </div>
  );
};

export default Map;

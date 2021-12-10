/* eslint-disable no-unused-vars */
import React from 'react';
import { TileLayer, Marker, Popup, MapContainer } from 'react-leaflet';
import Leaflet from 'leaflet';
import PropTypes from 'prop-types';
import '../styles/Map.css';
import MapMarkers from './MapMarkers';
import { MARKERS } from '../../models/staticMarkerArray.js';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const Map = () => {
  return (
    <div className='MapContainer'>
      <div className='Map'>
        <MapContainer
          className='Map'
          center={[59.9375, 30.308611]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
            url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            maxZoom={16}
            minZoom={3}
            noWrap={true}
          />
          <MarkerClusterGroup>
            <MapMarkers />
          </MarkerClusterGroup>
        </MapContainer>
      </div>
      <div className='GarbageTypes'>
        <h2>Different icons according to the waste types will belong here..</h2>
      </div>
    </div>
  );
};
export default Map;

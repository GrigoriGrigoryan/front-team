import React, { useState } from 'react';
import { TileLayer, MapContainer } from 'react-leaflet';
import '../styles/Map.css';
import MapStations from './MapStations';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Icons from './Icons';
import { useIntl } from 'react-intl';

const messages = {
  pickMaterialsID: 'pickMaterialsID',
};

const Map = () => {
  const [filterOptions, setFilterOptions] = useState([]);
  const intl = useIntl();
  return (
    <div className='MapContainer'>
      <div className='Map'>
        <MapContainer className='Map' center={[59.9375, 30.308611]} zoom={9} scrollWheelZoom={true}>
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
            url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            maxZoom={16}
            minZoom={3}
            noWrap={true}
          />
          <MarkerClusterGroup>
            <MapStations filterOptions={filterOptions} />
          </MarkerClusterGroup>
        </MapContainer>
      </div>
      <div className='GarbageTypes'>
        <h4>{intl.formatMessage({ id: messages.pickMaterialsID })}</h4>
        <Icons filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
      </div>
    </div>
  );
};
export default Map;

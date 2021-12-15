import React, { useState, useEffect } from 'react';
import { TileLayer, MapContainer, useMap } from 'react-leaflet';
import '../styles/Map.css';
import MapStations from './MapStations';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Icons from './Icons/Icons';
import { useIntl } from 'react-intl';
import { getLeaves } from '../Api/MapApi';

const messages = {
  pickMaterialsID: 'pickMaterialsID',
};

const Map = () => {
  const [filterOptions, setFilterOptions] = useState([]);
  const [isSelectedMarker, setSelectedMarker] = useState(false);
  const [leaves, setLeaves] = useState([]);

  useEffect(async () => {
    const data = await getLeaves();
    setLeaves(data);
  }, []);

  const DisableScrollWhenModalAppear = () => {
    const map = useMap();
    if (isSelectedMarker) {
      map.scrollWheelZoom.disable();
    } else {
      map.scrollWheelZoom.enable();
    }
    return null;
  };

  const intl = useIntl();

  return (
    <div className='MapContainer'>
      <div className='Map'>
        <MapContainer className='Map' center={[59.9375, 30.308611]} zoom={9} scrollWheelZoom={true}>
          <DisableScrollWhenModalAppear />
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
            url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            maxZoom={16}
            minZoom={3}
            noWrap={true}
          />
          <MarkerClusterGroup>
            <MapStations leaves={leaves} setSelectedMarker={setSelectedMarker} filterOptions={filterOptions} />
          </MarkerClusterGroup>
        </MapContainer>
      </div>
      <div className='GarbageTypes'>
        <h4 className='PickMaterialsTitle'>{intl.formatMessage({ id: messages.pickMaterialsID })}</h4>
        <Icons showText filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
      </div>
    </div>
  );
};
export default Map;

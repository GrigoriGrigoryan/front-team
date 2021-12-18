import React, { useState, useEffect } from 'react';
import { TileLayer, MapContainer, useMap } from 'react-leaflet';
import PropTypes from 'prop-types';
import '../styles/Map.css';
import MapStations from './MapStations';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Icons from './Icons/Icons';
import { useIntl } from 'react-intl';
import { getLeaves } from '../Api/MapApi';

const messages = {
  pickMaterialsID: 'pickMaterialsID',
};

const Map = (props) => {
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
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
      if (map.tap) {
        map.tap.disable();
      }
    } else {
      map.dragging.enable();
      map.touchZoom.enable();
      map.doubleClickZoom.enable();
      map.scrollWheelZoom.enable();
      map.boxZoom.enable();
      map.keyboard.enable();
      if (map.tap) {
        map.tap.enable();
      }
    }
    return null;
  };

  const intl = useIntl();

  return (
    <div className='MapContainer'>
      <div className='Map'>
        <MapContainer className='Map' center={[59.827915582182186, 30.37541961288402]} zoom={11} scrollWheelZoom={true}>
          <DisableScrollWhenModalAppear />
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
            url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            maxZoom={16}
            minZoom={3}
            noWrap={true}
          />
          <MarkerClusterGroup>
            <MapStations
              locale={props.locale}
              leaves={leaves}
              setSelectedMarker={setSelectedMarker}
              filterOptions={filterOptions}
            />
          </MarkerClusterGroup>
        </MapContainer>
      </div>
      <div className='GarbageTypes'>
        <h4 className='PickMaterialsTitle'>{intl.formatMessage({ id: messages.pickMaterialsID })}</h4>
        <div className='MapIcons'>
          <Icons showText filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
        </div>
      </div>
    </div>
  );
};

Map.propTypes = {
  locale: PropTypes.string,
};

export default Map;

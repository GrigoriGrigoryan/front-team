import React from 'react';
import { STATIONS, MARKERS } from '../../models/staticStationArray.js';

const MapStations = (props) => {
  return props.filterOptions.length
    ? STATIONS.map((station, index) => {
        for (let filterOption of props.filterOptions) {
          if (!station.wasteTypes.includes(filterOption)) {
            return;
          }
        }
        return React.cloneElement(MARKERS[index], { ...props });
      })
    : MARKERS.map((marker) => React.cloneElement(marker, { ...props }));
};

export default MapStations;

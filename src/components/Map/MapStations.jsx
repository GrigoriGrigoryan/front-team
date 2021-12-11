import { STATIONS, MARKERS } from '../../models/staticStationArray.js';

const MapStations = (props) => {
  return props.filterOptions.length
    ? STATIONS.map((station, index) => {
        for (let filterOption of props.filterOptions) {
          if (!station.wasteTypes.includes(filterOption)) {
            return;
          }
        }
        return MARKERS[index];
      })
    : MARKERS.map((marker) => marker);
};

export default MapStations;

import { STATIONS } from '../../models/staticStationArray.js';

const MapStations = (props) => {
  return props.filterOptions.length
    ? STATIONS.map((station) => {
        for (let filterOption of props.filterOptions) {
          if (!station.garbageTypes.includes(filterOption)) {
            return;
          }
        }
        return station.marker;
      })
    : STATIONS.map((station) => station.marker);
};

export default MapStations;

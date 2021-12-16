import React from 'react';
import CustomMarker from './CustomMarker.jsx';
import CustomPopup from './CustomPopup.jsx';

const CustomizedMarker = (props, ecoStation, index) => (
  <CustomMarker
    {...props}
    ecoStationName={ecoStation.ecoStationName}
    key={`${index}__marker`}
    posX={+ecoStation.latitude}
    posY={+ecoStation.longitude}
    rating={ecoStation.rating}
    wasteTypes={ecoStation.wasteTypes}
    deliveryOptions={ecoStation.deliveryOptions}
    address={ecoStation.address}
    contact={ecoStation.contact}
    workingHours={ecoStation.workingHours}
    addressRu={ecoStation.addressRu}
    deliveryOptionsRu={ecoStation.deliveryOptionsRu}
    markerid={ecoStation.id}
    comments={ecoStation.comments}
  >
    <CustomPopup />
  </CustomMarker>
);

const MapStations = (props) => {
  return props.filterOptions.length
    ? props.leaves.map((ecoStation, index) => {
        for (let filterOption of props.filterOptions) {
          if (!ecoStation.wasteTypes.includes(filterOption)) {
            return;
          }
        }
        return CustomizedMarker(props, ecoStation, index);
      })
    : props.leaves.map((ecoStation, index) => CustomizedMarker(props, ecoStation, index));
};

export default MapStations;

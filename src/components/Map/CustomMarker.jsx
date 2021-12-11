import React, { useRef } from 'react';
import Leaflet from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import GreenIcon from '../../assets/images/leaf.png';
import PropTypes from 'prop-types';

const icon = Leaflet.icon({
  iconUrl: GreenIcon,
  iconSize: [80, 90], // size of the icon
  shadowSize: [55, 70], // size of the shadow
  iconAnchor: [24, 105], // point of the icon which will correspond to marker's location
  shadowAnchor: [6, 72], // the same for the shadow
  popupAnchor: [-6, -90], // point from which the popup should open relative to the iconAnchor
});

const CustomMarker = (props) => {
  const leafletRef = useRef();

  return (
    <Marker
      position={[props.posX, props.posY]}
      icon={icon}
      ref={leafletRef}
      key='marker__1'
      eventHandlers={{
        mouseover: () => {
          leafletRef.current.openPopup();
        },
        mouseout: () => {
          leafletRef.current.closePopup();
        },
      }}
    >
      <Popup>Informations about the eco station.</Popup>
    </Marker>
  );
};

CustomMarker.propTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
};

export default CustomMarker;

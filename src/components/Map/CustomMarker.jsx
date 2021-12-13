import React, { useRef } from 'react';
import Leaflet from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import GreenIcon from '../../assets/images/leaf.png';
import PropTypes from 'prop-types';

const icon = Leaflet.icon({
  iconUrl: GreenIcon,
  iconSize: [80, 90],
  iconAnchor: [24, 105],
  popupAnchor: [-6, -90],
});

const CustomMarker = (props) => {
  const leafletRef = useRef();

  return (
    <Marker
      position={[props.posX, props.posY]}
      icon={icon}
      ref={leafletRef}
      eventHandlers={{
        mouseover: () => leafletRef.current.openPopup(),
        mouseout: () => leafletRef.current.closePopup(),
      }}
    >
      <Popup>{props.children}</Popup>
    </Marker>
  );
};

CustomMarker.propTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CustomMarker;

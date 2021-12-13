import React, { useRef, useState } from 'react';
import Leaflet from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import GreenIcon from '../../assets/images/leaf-green.png';
import PropTypes from 'prop-types';
import EcoStationModal from '../Modal/EcoStationModal';
const icon = Leaflet.icon({
  iconUrl: GreenIcon,
  iconSize: [80, 90],
  iconAnchor: [24, 105],
  popupAnchor: [-6, -90],
});

const CustomMarker = (props) => {
  const leafletRef = useRef();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Marker
        position={[props.posX, props.posY]}
        icon={icon}
        ref={leafletRef}
        eventHandlers={{
          mouseover: () => leafletRef.current.openPopup(),
          mouseout: () => leafletRef.current.closePopup(),
          click: () => setShowModal(true),
        }}
      >
        <Popup>{React.cloneElement(props.children, { ...props })}</Popup>
      </Marker>
      <EcoStationModal
        rating={props.rating}
        ecoStationName={props.ecoStationName}
        show={showModal}
        onHide={() => setShowModal(false)}
        wasteTypes={props.wasteTypes}
        deliveryOptions={props.deliveryOptions}
        paymentCondition={props.paymentCondition}
      />
    </>
  );
};

CustomMarker.propTypes = {
  posX: PropTypes.number,
  posY: PropTypes.number,
  children: PropTypes.node.isRequired,
  ecoStationName: PropTypes.string,
  rating: PropTypes.number,
  wasteTypes: PropTypes.array,
  deliveryOptions: PropTypes.array,
  paymentCondition: PropTypes.object,
};

export default CustomMarker;

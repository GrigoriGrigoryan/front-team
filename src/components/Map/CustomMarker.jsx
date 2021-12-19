import React, { useRef, useState } from 'react';
import Leaflet from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import GreenIcon from '../../assets/images/leaf-green.png';
import ActiveIcon from '../../assets/images/leaf.png';
import PropTypes from 'prop-types';
import EcoStationModal from '../Modal/EcoStationModal';

const CustomMarker = (props) => {
  const leafletRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const icon = Leaflet.icon({
    iconUrl: showModal ? ActiveIcon : GreenIcon,
    iconSize: [80, 90],
    iconAnchor: [24, 105],
    popupAnchor: [-6, -90],
  });
  return (
    <>
      <Marker
        position={[props.posX, props.posY]}
        icon={icon}
        ref={leafletRef}
        eventHandlers={{
          mouseover: () => leafletRef.current.openPopup(),
          mouseout: () => leafletRef.current.closePopup(),
          click: () => {
            setShowModal(true);
            props.setSelectedMarker(true);
          },
        }}
      >
        <Popup ratingCount={props.ratingCount}>{React.cloneElement(props.children, { ...props })}</Popup>
      </Marker>
      <EcoStationModal
        rating={props.rating}
        ecoStationName={props.ecoStationName}
        show={showModal}
        onHide={() => setShowModal(false)}
        wasteTypes={props.wasteTypes}
        deliveryOptions={props.deliveryOptions}
        paymentCondition={props.paymentCondition}
        setShowModal={setShowModal}
        setSelectedMarker={props.setSelectedMarker}
        address={props.address}
        contact={props.contact}
        workingHours={props.workingHours}
        locale={props.locale}
        addressRu={props.addressRu}
        deliveryOptionsRu={props.deliveryOptionsRu}
        markerid={props.markerid}
        comments={props.comments}
        ratingCount={props.ratingCount}
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
  setSelectedMarker: PropTypes.func,
  address: PropTypes.string,
  contact: PropTypes.string,
  workingHours: PropTypes.array,
  locale: PropTypes.string,
  deliveryOptionsRu: PropTypes.array,
  addressRu: PropTypes.string,
  markerid: PropTypes.number,
  comments: PropTypes.array,
  ratingCount: PropTypes.number,
};

export default CustomMarker;

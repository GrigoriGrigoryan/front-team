import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const EcoStationModal = ({ ecoStationName, rating, wasteTypes, deliveryOptions, paymentCondition, ...props }) => {
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{ecoStationName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{ecoStationName}</h4>
        <p>
          {rating} {wasteTypes[0]} {deliveryOptions[0]} {paymentCondition.price}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button className='butt' onClick={props.onHide}>
          close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

EcoStationModal.propTypes = {
  onHide: PropTypes.func,
  ecoStationName: PropTypes.string,
  rating: PropTypes.number,
  wasteTypes: PropTypes.array,
  deliveryOptions: PropTypes.array,
  paymentCondition: PropTypes.object,
};
export default EcoStationModal;

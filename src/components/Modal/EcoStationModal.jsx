import React from 'react';
import { Modal, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../styles/Button.css';
import './EcoStationModal.css';
import '../styles/CustomPopup.css';

const EcoStationModal = ({ ecoStationName, rating, wasteTypes, deliveryOptions, paymentCondition, ...props }) => {
  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <div className='PopupHeader'>
            <div className={`Rating ${rating > 4 ? 'green' : props.rating > 2.5 ? 'orange' : 'red'}`}>
              {(Math.round(rating * 100) / 100).toFixed(1)}
            </div>
            <h4 className='EcoStationTitle ModalTitle'>{ecoStationName}</h4>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='ModalContainer'>
          <Image
            className='EcoImg'
            src='https://www.leduc.ca/sites/default/files/EcoStation_sign-image.png'
            alt='eco station'
            fluid
          />
          <p>
            {wasteTypes[0]} {deliveryOptions[0]} {paymentCondition.price}
          </p>
        </div>
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

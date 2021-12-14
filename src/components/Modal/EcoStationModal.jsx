/* eslint-disable no-unused-vars */
import React from 'react';
import { Modal, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import { ICONS } from '../../models/Icons';
import '../styles/Button.css';
import './EcoStationModal.css';
import '../styles/CustomPopup.css';

const displayAcceptedGarbageTypes = (wasteTypes) => {
  return ICONS.map((icon) => wasteTypes.includes(icon.key) && icon.component(null, true, true));
};

const EcoStationModal = ({ ecoStationName, rating, wasteTypes, deliveryOptions, paymentCondition, ...props }) => {
  return (
    <>
      <div
        className={`${props.show ? 'Overlay' : ''}`}
        onClick={(e) => {
          props.setShowModal(false);
          props.setSelectedMarker(false);
        }}
      ></div>
      <div className={`MainContainer ${props.show ? 'active' : ''}`}>
        <div className='Stars'>
          <StarRatings
            rating={+rating}
            starSpacing='1px'
            starDimension='1.2rem'
            starRatedColor='#00db7a'
            numberOfStars={5}
            name='rating'
          />
        </div>
        <h4 className='EcoStationTitle ModalTitle'>{ecoStationName}</h4>
        <i className='fas fa-map-marker-alt location'>
          <span>St. Petersburg, Kuznetsky street 13</span>
        </i>
        <hr />
        <div className='SpecificGarbageTypes'>{displayAcceptedGarbageTypes(wasteTypes)}</div>
        <hr />
        <h4 className='EcoStationTitle ModalTitle'>Delivery options:</h4>
        <ul>
          {deliveryOptions.map((option, index) => (
            <li key={`list_${index}`}>{option}</li>
          ))}
        </ul>

        <h4>Payment conditions:</h4>
        <ul>
          <li>{+paymentCondition.price ? 'Paid' : 'Free of charge'}</li>
          {+paymentCondition.price ? <li>{`${paymentCondition.price}$`}</li> : ''}
        </ul>
      </div>
    </>
  );
};

EcoStationModal.propTypes = {
  onHide: PropTypes.func,
  ecoStationName: PropTypes.string,
  rating: PropTypes.number,
  wasteTypes: PropTypes.array,
  deliveryOptions: PropTypes.array,
  paymentCondition: PropTypes.object,
  show: PropTypes.bool,
  setShowModal: PropTypes.func,
  setSelectedMarker: PropTypes.func,
};
export default EcoStationModal;

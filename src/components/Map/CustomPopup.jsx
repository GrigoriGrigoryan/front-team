import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CustomPopup.css';
import StarRatings from 'react-star-ratings';

const CustomPopup = (props) => {
  return (
    <div className='Popup'>
      <div className='Stars'>
        <StarRatings
          rating={+props.rating}
          starSpacing='1px'
          starDimension='1.2rem'
          starRatedColor='#00db7a'
          numberOfStars={5}
          name='rating'
        />
      </div>
      <h4 className='EcoStationTitle'>{props.ecoStationName}</h4>
      <h5 className='EcoStationAddress'>{props.address}</h5>
    </div>
  );
};

CustomPopup.propTypes = {
  rating: PropTypes.number,
  ecoStationName: PropTypes.string,
  address: PropTypes.string,
};

export default CustomPopup;

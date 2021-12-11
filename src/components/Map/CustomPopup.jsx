import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CustomPopup.css';
const CustomPopup = (props) => {
  return (
    <div className='Popup'>
      <div className='PopupHeader'>
        <div className={`Rating ${props.rating > 4 ? 'green' : props.rating > 2.5 ? 'orange' : 'red'}`}>
          {(Math.round(props.rating * 100) / 100).toFixed(1)}
        </div>
        <h3 className='EcoStationTitle'>{props.ecoStationName}</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident recusandae necessitatibus reiciendis
        mollitia modi corporis, vero vel ut architecto doloremque?
      </p>
    </div>
  );
};

CustomPopup.propTypes = {
  rating: PropTypes.number,
  ecoStationName: PropTypes.string,
};

export default CustomPopup;

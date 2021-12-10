import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { COUNTRY_CODES } from '../types/countryCodes';
import './styles/HelloWorld.css';

const messages = {
  // the ID of hello world message is 'helloWorldID'
  // the SAME as in the messages folder
  helloWorldMsg: 'helloWorldID',
};

// just some basic styling...
const basicButtonStyle = {
  padding: '0.5rem',
  fontFamily: 'inherit',
  fontSize: '1rem',
  color: 'white',
  background: 'gray',
  cursor: 'pointer',
  fontWeight: 'bold',
  margin: '0 0.6rem',
};

const HelloWorld = (props) => {
  // we use useIntl() to translate the message
  const intl = useIntl();
  return (
    <>
      {/* pass the id of the message to the formatMessage method */}
      <h2 className='HelloWorld'>{intl.formatMessage({ id: messages.helloWorldMsg })}</h2>
      <button style={basicButtonStyle} onClick={() => props.localeHandler(COUNTRY_CODES.EN)}>
        Click for EN
      </button>
      <button style={basicButtonStyle} onClick={() => props.localeHandler(COUNTRY_CODES.RU)}>
        Click for RU
      </button>
    </>
  );
};

HelloWorld.propTypes = {
  localeHandler: PropTypes.func,
};

export default HelloWorld;

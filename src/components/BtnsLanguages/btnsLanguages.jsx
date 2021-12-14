import React from 'react';
import PropTypes from 'prop-types';
import { COUNTRY_CODES } from '../../types/countryCodes';
import styles from './BtnsLanguages.module.css';

const BtnsLanguages = (props) => {
  // we use useIntl() to translate the message
  // const intl = useIntl();

    // const changeLangAndAddUnderline = () => {
    //     props.localeHandler(COUNTRY_CODES.EN)();
    // }

  return (
    <>
      {/* pass the id of the message to the formatMessage method */}
      {/*<h2 className='HelloWorld'>{intl.formatMessage({ id: messages.helloWorldMsg })}</h2>*/}
      <div className='d-flex justify-content-center'>
        {/*<i className={`flag us ${styles.btn}`} onClick={() => props.localeHandler(COUNTRY_CODES.EN)}></i>*/}
        {/*<i className={`flag ru ${styles.btn}`} onClick={() => props.localeHandler(COUNTRY_CODES.RU)}></i>*/}
          <p className={styles.langBtns}>
              <span onClick={() => props.localeHandler(COUNTRY_CODES.EN)}>EN </span>|
              <span onClick={() => props.localeHandler(COUNTRY_CODES.RU)}> RU</span>
              {/*<span onClick={() => changeLangAndAddUnderline}>EN </span>|*/}
              {/*<span onClick={() => changeLangAndAddUnderline}> RU</span>*/}
          </p>
      </div>
    </>
  );
};

BtnsLanguages.propTypes = {
  localeHandler: PropTypes.func,
};

export default BtnsLanguages;

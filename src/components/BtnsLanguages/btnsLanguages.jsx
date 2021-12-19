import React from 'react';
import PropTypes from 'prop-types';
import { COUNTRY_CODES } from '../../types/countryCodes';
import styles from './BtnsLanguages.module.css';
import { LOCALES } from '../../types/locales';

const BtnsLanguages = (props) => {
  const isLangEn = props.currentLang === LOCALES.ENGLISH ? `${styles.active}` : ' ';
  const isLangRu = props.currentLang === LOCALES.RUSSIAN ? `${styles.active}` : ' ';

  return (
    <>
      <div className='d-flex justify-content-center'>
        <p className={styles.langBtns}>
          <span onClick={() => props.localeHandler(COUNTRY_CODES.EN)} className={isLangEn}>
            EN
          </span>{' '}
          |&nbsp;
          <span onClick={() => props.localeHandler(COUNTRY_CODES.RU)} className={isLangRu}>
            RU
          </span>
        </p>
      </div>
    </>
  );
};

BtnsLanguages.propTypes = {
  localeHandler: PropTypes.func,
  currentLang: PropTypes.string,
};

export default BtnsLanguages;

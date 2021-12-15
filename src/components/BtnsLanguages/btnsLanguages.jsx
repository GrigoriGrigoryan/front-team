import React from 'react';
import PropTypes from 'prop-types';
import { COUNTRY_CODES } from '../../types/countryCodes';
import styles from './BtnsLanguages.module.css';

const BtnsLanguages = (props) => {
  // we use useIntl() to translate the message

    const isLangEn = props.currentLang === 'en' ? `${styles.active}` : ' ';
    const isLangRu = props.currentLang === 'ru' ? `${styles.active}` : ' ';

  return (
    <>
      {/* pass the id of the message to the formatMessage method */}
      {/*<h2 className='HelloWorld'>{intl.formatMessage({ id: messages.helloWorldMsg })}</h2>*/}
      <div className='d-flex justify-content-center'>
          <p className={styles.langBtns}>
              <span
                  onClick={() => props.localeHandler(COUNTRY_CODES.EN)}
                  className={isLangEn}
              >EN</span> |&nbsp;
              <span
                  onClick={() => props.localeHandler(COUNTRY_CODES.RU)}
                  className={isLangRu}
              >RU</span>
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

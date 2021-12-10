import React from 'react';
import PropTypes from 'prop-types';
import { COUNTRY_CODES } from '../../types/countryCodes';
import {Button} from "react-bootstrap";
import styles from './BtnsLanguages.module.css';

const BtnsLanguages = (props) => {
  // we use useIntl() to translate the message
  // const intl = useIntl();
  return (
    <>
      {/* pass the id of the message to the formatMessage method */}
      {/*<h2 className='HelloWorld'>{intl.formatMessage({ id: messages.helloWorldMsg })}</h2>*/}
        <div className='d-flex'>
            <div>
                <Button className={styles.btn} onClick={() => props.localeHandler(COUNTRY_CODES.EN)}>
                    EN
                </Button>
            </div>
            <div>
                <Button className={styles.btn} onClick={() => props.localeHandler(COUNTRY_CODES.RU)}>
                    RU
                </Button>
            </div>
        </div>



    </>
  );
};

BtnsLanguages.propTypes = {
  localeHandler: PropTypes.func,
};

export default BtnsLanguages;

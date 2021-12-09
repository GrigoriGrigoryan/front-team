import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { LOCALES } from '../types/locales';
import { RUSSIAN_MESSAGES } from './messages/ru';
import { ENGLISH_MESSAGES } from './messages/en';

const Provider = (props) => (
  <IntlProvider
    locale={props.locale}
    textComponent={Fragment}
    messages={props.locale === LOCALES.ENGLISH ? ENGLISH_MESSAGES : RUSSIAN_MESSAGES}
  >
    {props.children}
  </IntlProvider>
);

Provider.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Provider.defaultProps = {
  locale: LOCALES.ENGLISH,
  children: null,
};

export default Provider;

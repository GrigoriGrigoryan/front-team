import React, { useState } from 'react';

import I18nProvider from './i18n/provider';
import { LOCALES } from './types/locales';
import { COUNTRY_CODES } from './types/countryCodes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './components/Routes/Routes';

const App = () => {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || LOCALES.ENGLISH);

  const localeHandler = (countryCode) => {
    if (countryCode === COUNTRY_CODES.EN) {
      localStorage.setItem('locale', LOCALES.ENGLISH);
      setLocale(LOCALES.ENGLISH);
    } else {
      localStorage.setItem('locale', LOCALES.RUSSIAN);
      setLocale(LOCALES.RUSSIAN);
    }
  };

  return (
    <I18nProvider locale={locale}>
      <Routes locale={locale} localeHandler={localeHandler} />
    </I18nProvider>
  );
};

export default App;

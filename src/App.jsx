import React, { useState } from 'react';

import I18nProvider from './i18n/provider';
import { LOCALES } from './types/locales';
import { COUNTRY_CODES } from './types/countryCodes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './components/Routes/Routes';

const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [currentLang, setCurrentLang] = useState('en');

  const localeHandler = (countryCode) => {
    if (countryCode === COUNTRY_CODES.EN) {
      setLocale(LOCALES.ENGLISH);
      setCurrentLang('en');
    } else {
      setLocale(LOCALES.RUSSIAN);
      setCurrentLang('ru');
    }
  };

  return (
    <I18nProvider locale={locale}>
      <Routes locale={locale} localeHandler={localeHandler} currentLang={currentLang} />
    </I18nProvider>
  );
};

export default App;

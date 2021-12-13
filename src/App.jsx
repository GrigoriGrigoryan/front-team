import React, { useState } from 'react';
import I18nProvider from './i18n/provider';
import { LOCALES } from './types/locales';
import { COUNTRY_CODES } from './types/countryCodes';
import Map from './components/Map/Map';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  // eslint-disable-next-line no-unused-vars
  const localeHandler = (countryCode) => {
    if (countryCode === COUNTRY_CODES.EN) {
      setLocale(LOCALES.ENGLISH);
    } else {
      setLocale(LOCALES.RUSSIAN);
    }
  };

  return (
    // Wrap the children elements into I18nProvider
    // and pass the localeHandler to change the language
    <I18nProvider locale={locale}>
      <div className='map'>
        <Map />
      </div>
    </I18nProvider>
  );
};

export default App;

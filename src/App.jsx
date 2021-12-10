import React, { useState } from 'react';
import HelloWorld from './components/HelloWorld';
import I18nProvider from './i18n/provider';
import { LOCALES } from './types/locales';
import { COUNTRY_CODES } from './types/countryCodes';
import './App.css';

const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

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
      <div className='App'>
        <header className='App-header'>
          <HelloWorld localeHandler={localeHandler} />
        </header>
      </div>
    </I18nProvider>
  );
};

export default App;

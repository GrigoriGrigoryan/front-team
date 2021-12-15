import React, { useState } from 'react';
import Map from './components/Map/Map';
import Header from './components/Header/Header';
import Articles from './components/Articles/Articles';
import GarbageLibrary from './components/GarbageLibrary/GarbageLibrary';
import Footer from './components/Footer/Footer';
import I18nProvider from './i18n/provider';
import { LOCALES } from './types/locales';
import { COUNTRY_CODES } from './types/countryCodes';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Article from './components/Articles/Article/Article';

import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [currentLang, setCurrentLang] = useState('en');

  // eslint-disable-next-line no-unused-vars
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
    // Wrap the children elements into I18nProvider
    // and pass the localeHandler to change the language
    <I18nProvider locale={locale}>
      <Router>
        <Header localeHandler={localeHandler} currentLang={currentLang} />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/map' component={Map} />
          <Route path='/garbageLibrary' component={GarbageLibrary} />
          <Route path='/articles' component={Articles} />
          <Route path='/article/:id' component={Article} />
        </Switch>
        <Footer />
      </Router>
    </I18nProvider>
  );
};

export default App;

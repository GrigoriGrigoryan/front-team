import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import I18nProvider from './i18n/Provider';
import Routes from './components/Routes';
import NavigationBar from './components/navigation/NavigationBar';

const App = (): JSX.Element => {
  return (
    <I18nProvider>
      <div className="App">
        <NavigationBar />
        <Routes />
      </div>
    </I18nProvider>
  );
};

export default App;

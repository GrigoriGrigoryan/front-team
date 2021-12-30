import React from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;

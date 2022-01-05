import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Map from './map/Map';
import Home from './home/Home';

const PageRoutes: React.FC = (): JSX.Element => (
  <Routes>
    <Route path="/map" element={<Map />} />
    <Route path="/" element={<Home />} />
  </Routes>
);

export default PageRoutes;

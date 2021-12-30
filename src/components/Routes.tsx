/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './navigation/NavigationBar';
import Map from './Map/Map';
import Home from './Home/Home';

// Replace component to element!!!

const PageRoutes: React.FC = (): JSX.Element => (
  <HashRouter>
    <NavigationBar />

    <Routes>
      <Route path="/map" element={<Map />} />
      <Route path="/" element={<Home />} />

      {/*
    <Route path='/garbageLibrary' component={GarbageLibrary} />
    <Route path='/articles' component={Articles} />
    <Route path='/article/:id' component={Article} />
    <Route path='/typeofwaste/:id' component={WastePage} /> */}
    </Routes>
    {/* <Footer /> */}
  </HashRouter>
);

export default PageRoutes;

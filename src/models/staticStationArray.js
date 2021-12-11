import React from 'react';
import { GARBAGE_TYPES } from '../types/garbageTypes';
import CustomMarker from '../components/Map/CustomMarker';

export const STATIONS = [
  {
    marker: <CustomMarker key='marker__1' posX={59.9375} posY={30.308611} />,
    garbageTypes: [GARBAGE_TYPES.automotive, GARBAGE_TYPES.metal, GARBAGE_TYPES.paper],
  },
  {
    marker: <CustomMarker key='marker__2' posX={59.8375} posY={30.408611} />,
    garbageTypes: [GARBAGE_TYPES.paper, GARBAGE_TYPES.plastic, GARBAGE_TYPES.organicWaste],
  },
  {
    marker: <CustomMarker key='marker__3' posX={59.7375} posY={30.208611} />,
    garbageTypes: [GARBAGE_TYPES.electronics, GARBAGE_TYPES.hazardous, GARBAGE_TYPES.household],
  },
  {
    marker: <CustomMarker key='marker__4' posX={59.7375} posY={30.128611} />,
    garbageTypes: [GARBAGE_TYPES.lightBulbs, GARBAGE_TYPES.electronics, GARBAGE_TYPES.clothing],
  },
  {
    marker: <CustomMarker key='marker__5' posX={59.0075} posY={30.238611} />,
    garbageTypes: [GARBAGE_TYPES.glass],
  },
  {
    marker: <CustomMarker key='marker__6' posX={59.4375} posY={30.08611} />,
    garbageTypes: [GARBAGE_TYPES.batteries, GARBAGE_TYPES.metal, GARBAGE_TYPES.paper, GARBAGE_TYPES.plastic],
  },
  {
    marker: <CustomMarker key='marker__7' posX={59.6375} posY={30.408611} />,
    garbageTypes: [GARBAGE_TYPES.plastic],
  },
  {
    marker: <CustomMarker key='marker__8' posX={59.1075} posY={30.308611} />,
    garbageTypes: [GARBAGE_TYPES.construction],
  },
];

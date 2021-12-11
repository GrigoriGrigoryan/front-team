import React from 'react';
import { GARBAGE_TYPES } from '../types/garbageTypes';
import CustomMarker from '../components/Map/CustomMarker';
import CustomPopup from '../components/Map/CustomPopup';

export const STATIONS = [
  {
    wasteTypes: [GARBAGE_TYPES.automotive, GARBAGE_TYPES.metal, GARBAGE_TYPES.paper],
    rating: 3.17,
    ecoStationName: 'Eco Station Name',
    deliveryOptions: ['does not pick up trash in person '],
    paymentCondition: {
      price: 0,
      details: 'free of charge',
    },
  },
  {
    wasteTypes: [GARBAGE_TYPES.paper, GARBAGE_TYPES.plastic, GARBAGE_TYPES.organicWaste],
    rating: 5,
    ecoStationName: 'Eco Station Name',
    deliveryOptions: ['paid eco taxi service'],
    paymentCondition: {
      price: 7,
      details: 'paid',
    },
  },
  {
    wasteTypes: [GARBAGE_TYPES.electronics, GARBAGE_TYPES.hazardous, GARBAGE_TYPES.household],
    rating: 3.2,
    ecoStationName: 'Eco Station Name',
    deliveryOptions: ['does not pick up trash in person '],
    paymentCondition: {
      price: 0,
      details: 'free of charge',
    },
  },
  {
    wasteTypes: [GARBAGE_TYPES.lightBulbs, GARBAGE_TYPES.electronics, GARBAGE_TYPES.clothing],
    rating: 4.2,
    ecoStationName: 'Eco Station Name',
    deliveryOptions: ['does not pick up trash in person '],
    paymentCondition: {
      price: 0,
      details: 'free of charge',
    },
  },
  {
    wasteTypes: [GARBAGE_TYPES.glass],
    rating: 3.4,
    ecoStationName: 'Eco Station Name',
    deliveryOptions: ['does not pick up trash in person '],
    paymentCondition: {
      price: 0,
      details: 'free of charge',
    },
  },
  {
    wasteTypes: [GARBAGE_TYPES.batteries, GARBAGE_TYPES.metal, GARBAGE_TYPES.paper, GARBAGE_TYPES.plastic],
    rating: 2.3,
    ecoStationName: 'Eco Station Name',
    deliveryOptions: ['paid eco taxi service', 'can be handed over in person '],
    paymentCondition: {
      price: 15,
      details: 'paid',
    },
  },
  {
    wasteTypes: [GARBAGE_TYPES.plastic],
    rating: 2.1,
    ecoStationName: 'Eco Station Name',
    deliveryOptions: ['paid eco taxi service', 'can be handed over in person '],
    paymentCondition: {
      price: 12,
      details: 'paid',
    },
  },
  {
    wasteTypes: [GARBAGE_TYPES.construction],
    rating: 4.7,
    ecoStationName: 'Eco Station Name',
    deliveryOptions: ['paid eco taxi service'],
    paymentCondition: {
      price: 21,
      details: 'paid',
    },
  },
];

export const MARKERS = [
  <CustomMarker key='marker__1' posX={59.9375} posY={30.308611}>
    <CustomPopup rating={STATIONS[0].rating} ecoStationName={STATIONS[0].ecoStationName} />
  </CustomMarker>,
  <CustomMarker key='marker__2' posX={59.8375} posY={30.408611}>
    <CustomPopup rating={STATIONS[1].rating} ecoStationName={STATIONS[1].ecoStationName} />
  </CustomMarker>,
  <CustomMarker key='marker__3' posX={59.7375} posY={30.208611}>
    <CustomPopup rating={STATIONS[2].rating} ecoStationName={STATIONS[2].ecoStationName} />
  </CustomMarker>,
  <CustomMarker key='marker__4' posX={59.7375} posY={30.128611}>
    <CustomPopup rating={STATIONS[3].rating} ecoStationName={STATIONS[3].ecoStationName} />
  </CustomMarker>,
  <CustomMarker key='marker__5' posX={59.0075} posY={30.238611}>
    <CustomPopup rating={STATIONS[4].rating} ecoStationName={STATIONS[4].ecoStationName} />
  </CustomMarker>,
  <CustomMarker key='marker__6' posX={59.4375} posY={30.08611}>
    <CustomPopup rating={STATIONS[5].rating} ecoStationName={STATIONS[5].ecoStationName} />
  </CustomMarker>,
  <CustomMarker key='marker__7' posX={59.6375} posY={30.408611}>
    <CustomPopup rating={STATIONS[6].rating} ecoStationName={STATIONS[6].ecoStationName} />
  </CustomMarker>,
  <CustomMarker key='marker__8' posX={59.1075} posY={30.308611}>
    <CustomPopup rating={STATIONS[7].rating} ecoStationName={STATIONS[7].ecoStationName} />
  </CustomMarker>,
];

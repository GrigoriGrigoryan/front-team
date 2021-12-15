import React from 'react';
import { GARBAGE_TYPES } from '../types/garbageTypes';
import CustomMarker from '../components/Map/CustomMarker';
import CustomPopup from '../components/Map/CustomPopup';

export const STATIONS = [
  {
    wasteTypes: [GARBAGE_TYPES.automotive, GARBAGE_TYPES.metal, GARBAGE_TYPES.paper],
    rating: 3.17,
    ecoStationName: 'Eco Station Name - Loooooooong name with new lines ......',
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
    deliveryOptions: ['paid eco taxi service', 'containers for receiving garbages '],
    paymentCondition: {
      price: 15,
      details: 'paid',
    },
  },
  {
    wasteTypes: [GARBAGE_TYPES.plastic],
    rating: 2.1,
    ecoStationName: 'Eco Station Name',
    deliveryOptions: ['paid eco taxi service', 'containers for receiving garbages '],
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
  <CustomMarker
    key='marker__1'
    posX={59.9375}
    posY={30.308611}
    rating={STATIONS[0].rating}
    ecoStationName={STATIONS[0].ecoStationName}
    wasteTypes={STATIONS[0].wasteTypes}
    deliveryOptions={STATIONS[0].deliveryOptions}
    paymentCondition={STATIONS[0].paymentCondition}
  >
    <CustomPopup />
  </CustomMarker>,
  <CustomMarker
    key='marker__2'
    posX={59.8375}
    posY={30.408611}
    rating={STATIONS[1].rating}
    ecoStationName={STATIONS[1].ecoStationName}
    wasteTypes={STATIONS[1].wasteTypes}
    deliveryOptions={STATIONS[1].deliveryOptions}
    paymentCondition={STATIONS[1].paymentCondition}
  >
    <CustomPopup />
  </CustomMarker>,
  <CustomMarker
    key='marker__3'
    posX={59.7375}
    posY={30.208611}
    rating={STATIONS[2].rating}
    ecoStationName={STATIONS[2].ecoStationName}
    wasteTypes={STATIONS[2].wasteTypes}
    deliveryOptions={STATIONS[2].deliveryOptions}
    paymentCondition={STATIONS[2].paymentCondition}
  >
    <CustomPopup />
  </CustomMarker>,
  <CustomMarker
    key='marker__4'
    posX={59.7375}
    posY={30.128611}
    rating={STATIONS[3].rating}
    ecoStationName={STATIONS[3].ecoStationName}
    wasteTypes={STATIONS[3].wasteTypes}
    deliveryOptions={STATIONS[3].deliveryOptions}
    paymentCondition={STATIONS[3].paymentCondition}
  >
    <CustomPopup />
  </CustomMarker>,
  <CustomMarker
    rating={STATIONS[4].rating}
    ecoStationName={STATIONS[4].ecoStationName}
    key='marker__5'
    posX={59.0075}
    posY={30.238611}
    wasteTypes={STATIONS[4].wasteTypes}
    deliveryOptions={STATIONS[4].deliveryOptions}
    paymentCondition={STATIONS[4].paymentCondition}
  >
    <CustomPopup />
  </CustomMarker>,
  <CustomMarker
    rating={STATIONS[5].rating}
    ecoStationName={STATIONS[5].ecoStationName}
    key='marker__6'
    posX={59.4375}
    posY={30.08611}
    wasteTypes={STATIONS[5].wasteTypes}
    deliveryOptions={STATIONS[5].deliveryOptions}
    paymentCondition={STATIONS[5].paymentCondition}
  >
    <CustomPopup />
  </CustomMarker>,
  <CustomMarker
    key='marker__7'
    posX={59.6375}
    posY={30.408611}
    rating={STATIONS[6].rating}
    ecoStationName={STATIONS[6].ecoStationName}
    wasteTypes={STATIONS[6].wasteTypes}
    deliveryOptions={STATIONS[6].deliveryOptions}
    paymentCondition={STATIONS[6].paymentCondition}
  >
    <CustomPopup />
  </CustomMarker>,
  <CustomMarker
    rating={STATIONS[7].rating}
    ecoStationName={STATIONS[7].ecoStationName}
    key='marker__8'
    posX={59.1075}
    posY={30.308611}
    wasteTypes={STATIONS[7].wasteTypes}
    deliveryOptions={STATIONS[7].deliveryOptions}
    paymentCondition={STATIONS[7].paymentCondition}
  >
    <CustomPopup />
  </CustomMarker>,
];

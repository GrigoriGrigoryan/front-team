import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import GreenIcon from '../assets/images/leaf.png';
import { GARBAGE_TYPES } from '../types/garbageTypes';

const icon = Leaflet.icon({
  iconUrl: GreenIcon,
  iconSize: [80, 90], // size of the icon
  shadowSize: [55, 70], // size of the shadow
  iconAnchor: [24, 105], // point of the icon which will correspond to marker's location
  shadowAnchor: [6, 72], // the same for the shadow
  popupAnchor: [-6, -90], // point from which the popup should open relative to the iconAnchor
});

export const STATIONS = [
  {
    marker: (
      <Marker position={[59.9375, 30.308611]} icon={icon} key='marker__1'>
        <Popup>Informations about the eco station.</Popup>
      </Marker>
    ),
    garbageTypes: [GARBAGE_TYPES.automotive, GARBAGE_TYPES.metal, GARBAGE_TYPES.paper],
  },
  {
    marker: (
      <Marker position={[59.8375, 30.408611]} icon={icon} key='marker__2'>
        <Popup>Informations about the eco station.</Popup>
      </Marker>
    ),
    garbageTypes: [GARBAGE_TYPES.paper, GARBAGE_TYPES.plastic, GARBAGE_TYPES.organicWaste],
  },
  {
    marker: (
      <Marker position={[59.7375, 30.208611]} icon={icon} key='marker__3'>
        <Popup>Informations about the eco station.</Popup>
      </Marker>
    ),
    garbageTypes: [GARBAGE_TYPES.electronics, GARBAGE_TYPES.hazardous, GARBAGE_TYPES.household],
  },
  {
    marker: (
      <Marker position={[59.7375, 30.128611]} icon={icon} key='marker__4'>
        <Popup>Informations about the eco station.</Popup>
      </Marker>
    ),
    garbageTypes: [GARBAGE_TYPES.lightBulbs, GARBAGE_TYPES.electronics, GARBAGE_TYPES.clothing],
  },
  {
    marker: (
      <Marker position={[59.0075, 30.238611]} icon={icon} key='marker__5'>
        <Popup>Informations about the eco station.</Popup>
      </Marker>
    ),
    garbageTypes: [GARBAGE_TYPES.glass],
  },
  {
    marker: (
      <Marker position={[59.4375, 30.08611]} icon={icon} key='marker__6'>
        <Popup>Informations about the eco station.</Popup>
      </Marker>
    ),
    garbageTypes: [
      GARBAGE_TYPES.batteries,
      GARBAGE_TYPES.metal,
      GARBAGE_TYPES.paper,
      GARBAGE_TYPES.plastic,
    ],
  },
  {
    marker: (
      <Marker position={[59.6375, 30.408611]} icon={icon} key='marker__7'>
        <Popup>Informations about the eco station.</Popup>
      </Marker>
    ),
    garbageTypes: [GARBAGE_TYPES.plastic],
  },
  {
    marker: (
      <Marker position={[59.1075, 30.308611]} icon={icon} key='marker__8'>
        <Popup>Informations about the eco station.</Popup>
      </Marker>
    ),
    garbageTypes: [GARBAGE_TYPES.construction],
  },
];

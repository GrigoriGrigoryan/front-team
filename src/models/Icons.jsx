import { GARBAGE_TYPES } from '../types/garbageTypes';
import React from 'react';
import Icon from '../components/Map/Icons/Icon';

const messages = {
  automotiveID: 'icons_automotiveID',
  glassID: 'icons_glassID',
  electronicsID: 'icons_electronicsID',
  metalID: 'icons_metalID',
  plasticID: 'icons_plasticID',
  householdID: 'icons_householdID',
  hazardousID: 'icons_hazardousID',
  constructionID: 'icons_constructionID',
  paperID: 'icons_paperID',
  clothingID: 'icons_clothingID',
  batteriesID: 'icons_batteriesID',
  lightBulbsID: 'icons_lightBulbsID',
  organicWasteID: 'icons_organicWasteID',
  otherID: 'icons_otherID',
  treeID: 'icons_treeID',
};

export const ICONS = [
  {
    key: GARBAGE_TYPES.automotive,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.automotive}
        iconName='fas fa-car-crash'
        showText={showText}
        textID={messages.automotiveID}
        key={GARBAGE_TYPES.automotive}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.glass,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.glass}
        iconName='fas fa-wine-bottle'
        showText={showText}
        textID={messages.glassID}
        key={GARBAGE_TYPES.glass}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.electronics,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.electronics}
        iconName='fas fa-laptop'
        showText={showText}
        textID={messages.electronicsID}
        key={GARBAGE_TYPES.electronics}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.metal,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.metal}
        iconName='fas fa-pager'
        showText={showText}
        textID={messages.metalID}
        key={GARBAGE_TYPES.metal}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.plastic,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.plastic}
        iconName='fab fa-gulp'
        showText={showText}
        textID={messages.plasticID}
        key={GARBAGE_TYPES.plastic}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.household,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.household}
        iconName='fas fa-home'
        showText={showText}
        textID={messages.householdID}
        key={GARBAGE_TYPES.household}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.hazardous,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.hazardous}
        iconName='fas fa-radiation'
        showText={showText}
        textID={messages.hazardousID}
        key={GARBAGE_TYPES.hazardous}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.construction,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.construction}
        iconName='fas fa-hammer'
        showText={showText}
        textID={messages.constructionID}
        key={GARBAGE_TYPES.construction}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.paper,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.paper}
        iconName='fas fa-book-open'
        showText={showText}
        textID={messages.paperID}
        key={GARBAGE_TYPES.paper}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.clothing,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.clothing}
        iconName='fas fa-tshirt'
        showText={showText}
        textID={messages.clothingID}
        key={GARBAGE_TYPES.clothing}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.batteries,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.batteries}
        iconName='fas fa-battery-three-quarters'
        showText={showText}
        textID={messages.batteriesID}
        key={GARBAGE_TYPES.batteries}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.lightBulbs,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.lightBulbs}
        iconName='fas fa-lightbulb'
        showText={showText}
        textID={messages.lightBulbsID}
        key={GARBAGE_TYPES.lightBulbs}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.organicWaste,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.organicWaste}
        iconName='fas fa-apple-alt'
        showText={showText}
        textID={messages.organicWasteID}
        key={GARBAGE_TYPES.organicWaste}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.tree,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.tree}
        iconName='fas fa-tree'
        showText={showText}
        textID={messages.treeID}
        key={GARBAGE_TYPES.tree}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.other,
    component: (filterByGarbageType, showText) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.other}
        iconName='fas fa-hands'
        showText={showText}
        textID={messages.otherID}
        key={GARBAGE_TYPES.other}
      />
    ),
  },
];

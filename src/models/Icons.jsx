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
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.automotive}
        iconName='fas car-crash'
        showText={showText}
        textID={messages.automotiveID}
        key={GARBAGE_TYPES.automotive}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.glass,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.glass}
        iconName='fas wine-bottle'
        showText={showText}
        textID={messages.glassID}
        key={GARBAGE_TYPES.glass}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.electronics,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.electronics}
        iconName='fas laptop'
        showText={showText}
        textID={messages.electronicsID}
        key={GARBAGE_TYPES.electronics}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.metal,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.metal}
        iconName='fas pager'
        showText={showText}
        textID={messages.metalID}
        key={GARBAGE_TYPES.metal}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.plastic,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.plastic}
        iconName='fab gulp'
        showText={showText}
        textID={messages.plasticID}
        key={GARBAGE_TYPES.plastic}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.household,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.household}
        iconName='fas home'
        showText={showText}
        textID={messages.householdID}
        key={GARBAGE_TYPES.household}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.hazardous,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.hazardous}
        iconName='fas radiation'
        showText={showText}
        textID={messages.hazardousID}
        key={GARBAGE_TYPES.hazardous}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.construction,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.construction}
        iconName='fas hammer'
        showText={showText}
        textID={messages.constructionID}
        key={GARBAGE_TYPES.construction}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.paper,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.paper}
        iconName='fas book-open'
        showText={showText}
        textID={messages.paperID}
        key={GARBAGE_TYPES.paper}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.clothing,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.clothing}
        iconName='fas tshirt'
        showText={showText}
        textID={messages.clothingID}
        key={GARBAGE_TYPES.clothing}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.batteries,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.batteries}
        iconName='fas battery-three-quarters'
        showText={showText}
        textID={messages.batteriesID}
        key={GARBAGE_TYPES.batteries}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.lightBulbs,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.lightBulbs}
        iconName='fas lightbulb'
        showText={showText}
        textID={messages.lightBulbsID}
        key={GARBAGE_TYPES.lightBulbs}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.organicWaste,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.organicWaste}
        iconName='fas apple-alt'
        showText={showText}
        textID={messages.organicWasteID}
        key={GARBAGE_TYPES.organicWaste}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.tree,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.tree}
        iconName='fas tree'
        showText={showText}
        textID={messages.treeID}
        key={GARBAGE_TYPES.tree}
        alignRight={alignRight}
      />
    ),
  },
  {
    key: GARBAGE_TYPES.other,
    component: (filterByGarbageType, showText, alignRight) => (
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.other}
        iconName='fas hands'
        showText={showText}
        textID={messages.otherID}
        key={GARBAGE_TYPES.other}
        alignRight={alignRight}
      />
    ),
  },
];

import React from 'react';
import PropTypes from 'prop-types';
import { GARBAGE_TYPES } from '../../types/garbageTypes.js';
import Icon from './Icon';
import { useIntl } from 'react-intl';

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

const Icons = (props) => {
  const intl = useIntl();
  const filterByGarbageType = (garbageType) => {
    if (props.filterOptions.includes(garbageType)) {
      props.setFilterOptions(props.filterOptions.filter((item) => item !== garbageType));
    } else {
      props.setFilterOptions([...props.filterOptions, garbageType]);
    }
  };
  return (
    <div className='icons'>
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.automotive}
        iconName='fas fa-car-crash'
        innerText={intl.formatMessage({ id: messages.automotiveID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.glass}
        iconName='fas fa-wine-bottle'
        innerText={intl.formatMessage({ id: messages.glassID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.electronics}
        iconName='fas fa-laptop'
        innerText={intl.formatMessage({ id: messages.electronicsID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.metal}
        iconName='fas fa-pager'
        innerText={intl.formatMessage({ id: messages.metalID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.plastic}
        iconName='fab fa-gulp'
        innerText={intl.formatMessage({ id: messages.plasticID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.household}
        iconName='fas fa-home'
        innerText={intl.formatMessage({ id: messages.householdID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.hazardous}
        iconName='fas fa-radiation'
        innerText={intl.formatMessage({ id: messages.hazardousID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.construction}
        iconName='fas fa-hammer'
        innerText={intl.formatMessage({ id: messages.constructionID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.paper}
        iconName='fas fa-book-open'
        innerText={intl.formatMessage({ id: messages.paperID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.clothing}
        iconName='fas fa-tshirt'
        innerText={intl.formatMessage({ id: messages.clothingID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.batteries}
        iconName='fas fa-battery-three-quarters'
        innerText={intl.formatMessage({ id: messages.batteriesID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.lightBulbs}
        iconName='fas fa-lightbulb'
        innerText={intl.formatMessage({ id: messages.lightBulbsID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.organicWaste}
        iconName='fas fa-apple-alt'
        innerText={intl.formatMessage({ id: messages.organicWasteID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.tree}
        iconName='fas fa-tree'
        innerText={intl.formatMessage({ id: messages.treeID })}
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.other}
        iconName='fas fa-hands'
        innerText={intl.formatMessage({ id: messages.otherID })}
      />
    </div>
  );
};

Icons.propTypes = {
  filterOptions: PropTypes.array,
  setFilterOptions: PropTypes.func,
};

export default Icons;

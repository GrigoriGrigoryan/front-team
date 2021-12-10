import React from 'react';
import PropTypes from 'prop-types';
import { GARBAGE_TYPES } from '../../types/garbageTypes.js';
import Icon from './Icon';

const Icons = (props) => {
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
        innerText='Automotive'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.glass}
        iconName='fas fa-wine-bottle'
        innerText='Glass'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.electronics}
        iconName='fas fa-laptop'
        innerText='Electronics'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.metal}
        iconName='fas fa-pager'
        innerText='Metal'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.plastic}
        iconName='fab fa-gulp'
        innerText='Plastic'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.household}
        iconName='fas fa-home'
        innerText='Household'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.hazardous}
        iconName='fas fa-radiation'
        innerText='Hazardous'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.construction}
        iconName='fas fa-hammer'
        innerText='Construction'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.paper}
        iconName='fas fa-newspaper'
        innerText='Paper'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.clothing}
        iconName='fas fa-tshirt'
        innerText='Clothing'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.batteries}
        iconName='fas fa-battery-three-quarters'
        innerText='Batteries'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.lightBulbs}
        iconName='fas fa-lightbulb'
        innerText='Light bulbs'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.organicWaste}
        iconName='fas fa-drumstick-bite'
        innerText='Organic waste'
      />
      <Icon
        filterByGarbageType={filterByGarbageType}
        garbageType={GARBAGE_TYPES.other}
        iconName='fas fa-hands'
        innerText='Other'
      />
    </div>
  );
};

Icons.propTypes = {
  filterOptions: PropTypes.array,
  setFilterOptions: PropTypes.func,
};

export default Icons;

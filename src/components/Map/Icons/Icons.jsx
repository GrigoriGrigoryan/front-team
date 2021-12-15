import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from '../../../models/Icons';

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
      {ICONS.map((icon) => icon.component(filterByGarbageType, props.showText, props.alignRight))}
    </div>
  );
};

Icons.propTypes = {
  filterOptions: PropTypes.array,
  setFilterOptions: PropTypes.func,
  showText: PropTypes.bool,
  alignRight: PropTypes.bool,
};

export default Icons;

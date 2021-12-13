import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const [active, setActive] = useState(false);
  return (
    <div className='IconContainer'>
      <i
        className={`${props.iconName} icon ${active ? 'active' : ''}`}
        onClick={() => {
          props.filterByGarbageType(props.garbageType);
          setActive(!active);
        }}
      ></i>
      <span>{props.innerText}</span>
    </div>
  );
};

Icon.propTypes = {
  innerText: PropTypes.string,
  filterByGarbageType: PropTypes.func,
  iconName: PropTypes.string,
  garbageType: PropTypes.string,
};

export default Icon;

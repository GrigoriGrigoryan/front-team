import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const [active, setActive] = useState(false);
  return (
    <i
      className={`${props.iconName} icon ${active ? 'active' : ''}`}
      onClick={() => {
        props.filterByGarbageType(props.garbageType);
        setActive(!active);
      }}
    >
      <span>{props.innerText}</span>
    </i>
  );
};

Icon.propTypes = {
  innerText: PropTypes.string,
  filterByGarbageType: PropTypes.func,
  iconName: PropTypes.string,
  garbageType: PropTypes.string,
};

export default Icon;

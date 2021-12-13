import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const Icon = (props) => {
  const intl = useIntl();
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
      {props.showText && <span>{intl.formatMessage({ id: props.textID })}</span>}
    </div>
  );
};

Icon.propTypes = {
  filterByGarbageType: PropTypes.func,
  iconName: PropTypes.string,
  garbageType: PropTypes.string,
  showText: PropTypes.bool,
  textID: PropTypes.string,
};

export default Icon;

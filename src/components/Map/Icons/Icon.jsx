import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab);

const Icon = (props) => {
  const intl = useIntl();
  const [active, setActive] = useState(false);
  return (
    <div className={`IconContainer ${props.displayInModal ? 'displayInModal' : ''}`}>
      <FontAwesomeIcon
        icon={[props.iconName.split(' ')[0], props.iconName.split(' ')[1]]}
        className={`icon ${active ? 'active' : ''}`}
        onClick={() => {
          if (props.filterByGarbageType) {
            props.filterByGarbageType(props.garbageType);
            setActive(!active);
          }
        }}
      ></FontAwesomeIcon>
      {props.showText && <span className='alignBottom'>{intl.formatMessage({ id: props.textID })}</span>}
    </div>
  );
};

Icon.propTypes = {
  filterByGarbageType: PropTypes.func,
  iconName: PropTypes.string,
  garbageType: PropTypes.string,
  showText: PropTypes.bool,
  textID: PropTypes.string,
  displayInModal: PropTypes.bool,
};

export default Icon;

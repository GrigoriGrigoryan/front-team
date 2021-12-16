import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from 'react-intl';
import './Comments.css';
import PropTypes from 'prop-types';

library.add(fas, fab);

const messages = {
  commentsID: 'modal_commentsID',
};

import '../styles/Button.css';
const CommentButton = (props) => {
  const intl = useIntl();
  return (
    <div className='ButtonContainer'>
      <button className='butt' onClick={props.onShow}>
        <FontAwesomeIcon icon={['fas', 'comments']} /> {intl.formatMessage({ id: messages.commentsID })}
      </button>
    </div>
  );
};

CommentButton.propTypes = {
  onShow: PropTypes.func,
};

export default CommentButton;

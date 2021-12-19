import React, { useEffect, useState } from 'react';
import CommentButton from './CommentButton';
import { Modal, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { submitComment } from '../Api/CommentsApi';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRatings from 'react-star-ratings';
import { useIntl } from 'react-intl';
import { LOCALES } from '../../types/locales';
import './Comments.css';

library.add(fas, fab);

const messages = {
  writeComment: 'modal_writeCommentID',
  noCommentYet: 'modal_noCommentsYet',
};

const Comments = (props) => {
  const intl = useIntl();
  const [showComment, setShowComment] = useState(false);
  const [data, setData] = useState({ id: props.markerid, content: '', rating_info: null });
  const [allComments, setAllComments] = useState([]);
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const postComment = () => {
    if (data.content === '') {
      submitComment({ id: data.id, rating_info: rating });
    } else {
      if (data.rating_info === null) {
        submitComment({ id: data.id, content: data.content });
      } else {
        submitComment(data);
      }
      setAllComments([
        ...allComments,
        { comment_id: new Date().getTime(), content: data.content, createdAt: new Date() },
      ]);
    }
    setData({ ...data, content: '', rating_info: null });
    setRating(0);
    setIsRated(false);
  };

  const handleRatingChange = (point) => {
    setRating(point);
    setData({ ...data, rating_info: point });
    setIsRated(true);
  };

  const isComment = (comment) => {
    return comment.content && comment.content.replace(/ /g, '').replace(/(?:\r\n|\r|\n)/g, '').length;
  };

  const commentExists = (allComments) => {
    if (allComments.length) {
      for (let comment of allComments) {
        if (isComment(comment)) {
          return true;
        }
      }
    }
    return false;
  };

  useEffect(async () => {
    setAllComments(props.comments);
  }, []);

  return (
    <>
      <CommentButton onShow={() => setShowComment(true)} />
      <Modal
        scrollable
        show={showComment}
        onHide={() => setShowComment(false)}
        {...props}
        style={showComment ? { opacity: '1' } : { opacity: '0' }}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {props.locale === LOCALES.ENGLISH
              ? props.address
                ? props.address
                : intl.formatMessage({ id: messages.unknownID })
              : props.addressru
              ? props.addressru
              : intl.formatMessage({ id: messages.unknownID })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='ModalBody'>
          <div className='CommentsContainer'>
            {commentExists(allComments) ? (
              allComments.map((comment, index) =>
                isComment(comment) ? (
                  <div className='FormattedComment' key={`${index}_comment_${comment.comment_id}`}>
                    {comment.content}
                    <span className='CommentDate'>
                      {new Date(comment.createdAt).getHours()}
                      {':'}
                      {new Date(comment.createdAt).getMinutes() > 9
                        ? new Date(comment.createdAt).getMinutes()
                        : '0' + new Date(comment.createdAt).getMinutes()}
                      {', '}
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                ) : null
              )
            ) : (
              <div className='NoCommentYet'>
                <FontAwesomeIcon className='CommentSlash' icon={['fas', 'comment-slash']} />
                {intl.formatMessage({ id: messages.noCommentYet })}
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer style={{ margin: '0', padding: '0', height: '11rem' }}>
          <div className='RateStation'>
            <StarRatings
              rating={rating}
              starSpacing='3px'
              starDimension='1.6rem'
              starRatedColor='#00db7a'
              changeRating={handleRatingChange}
              numberOfStars={5}
              name='rating'
            />
          </div>
          <FloatingLabel
            className='TxtArea'
            controlId='floatingTextarea'
            label={intl.formatMessage({ id: messages.writeComment })}
          >
            <Form.Control
              onChange={(e) => setData({ ...data, content: e.target.value })}
              value={data.content}
              as='textarea'
              maxLength={255}
              style={{ height: '7rem', maxHeight: '8rem' }}
            />
          </FloatingLabel>
          <button
            className={`SendButton ${!data.content && !isRated && 'disabled'}`}
            disabled={!data.content && !isRated}
            onClick={() => postComment()}
          >
            {' '}
            <FontAwesomeIcon icon={['fas', 'paper-plane']} />
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

Comments.propTypes = {
  markerid: PropTypes.number,
  comments: PropTypes.array,
  locale: PropTypes.string,
  address: PropTypes.string,
  addressru: PropTypes.string,
};

export default Comments;

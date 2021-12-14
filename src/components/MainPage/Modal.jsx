import React from 'react';
import './Modal.css';
import PropTypes from "prop-types";
import {CloseButton} from "react-bootstrap";
import imgHeart from './../../assets/images/heart.png';
import {useIntl} from "react-intl";


const Modal = ({active, setActive}) => {
    const intl = useIntl();
    const messages = {
        thankYouForVotingMsg: 'thankYouForVotingID',
        forTextMsg: 'forTextID',
        letsMakeFutureMsg: 'letsMakeFutureID',
        closeMsg: 'closeID'

    };
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                <CloseButton onClick={() => setActive(false)} className="closeBtn"/>
                <div className="modalWrapper">
                    <div className="imgHeartWrapper">
                        <img src={imgHeart} alt="" className="imgHeart"/>
                    </div>
                    <p className="text1">{intl.formatMessage({ id: messages.thankYouForVotingMsg })}</p>
                    <p className="text2">{intl.formatMessage({ id: messages.forTextMsg })}</p>
                    <p className="text3">GREEN TEAM</p>
                    <p className="modalFooterText">{intl.formatMessage({ id: messages.letsMakeFutureMsg })}</p>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    active: PropTypes.func,
};
Modal.propTypes = {
    setActive: PropTypes.func,
};

export default Modal;
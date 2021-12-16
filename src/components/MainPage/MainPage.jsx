import React, { useState } from 'react';
import styles from './MainPage.module.css';
import mainPageImg from '../../assets/images/mainPageImg.jpeg'
import Modal from "./Modal";
import { useIntl } from "react-intl";
import {NavLink} from "react-router-dom";

const MainPage = () => {
    const [modalActive, setModalActive] = useState();
    const intl = useIntl();

    const messages = {
        aboutProjectMsg: 'aboutProjectID',
        aboutProjectTextMsg: 'aboutProjectTextID',
        howToStartRecyclingMsg: 'howToStartRecyclingID',
        collectRecycleMsg: 'collectRecycleID',
        donateMsg: 'donateID'
    };

    return (
        <div className={styles.mainPageWrapper}>
            <div className={styles.mainPageRow}>
                <div className={styles.mainPageTextWrapper}>
                    <h4 className={styles.title}>{intl.formatMessage({ id: messages.aboutProjectMsg })}<br></br>
                        Recycling MAP</h4>
                    <p className={styles.text}>
                        {intl.formatMessage({ id: messages.aboutProjectTextMsg })}
                    </p>
                </div>
                <div className={styles.mainPageImgWrapper}>
                    <NavLink to={`/article/3`}>
                        <h4 className={styles.headerImg}>
                            {intl.formatMessage({ id: messages.howToStartRecyclingMsg })}
                        </h4>
                        <img src={mainPageImg} alt="" className={styles.mainPageImg}/>
                    </NavLink>
                </div>
            </div>
            <div className={styles.donateBlock}>

                <div>
                    <p className={styles.textDonate}>{intl.formatMessage({ id: messages.collectRecycleMsg })}</p>
                    <div className={styles.donateButtonWrapper}>
                        <button onClick={() => setModalActive(true)} className={styles.donateButton}>
                            {intl.formatMessage({ id: messages.donateMsg })}
                        </button>
                    </div>
                </div>
            </div>

            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default MainPage;
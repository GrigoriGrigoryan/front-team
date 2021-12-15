import React from 'react';
import styles from './wastePage.module.css';
import {useIntl} from "react-intl";
import {GARBAGE_TYPES} from "../../../types/garbageTypes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import prev from './../../../assets/images/prev.png';
import next from './../../../assets/images/next.png'
import {NavLink} from "react-router-dom";
import Parser from "html-react-parser";

const WastePage = (props) => {
    const intl = useIntl();
    // eslint-disable-next-line react/prop-types
    const currentTypeOfWasteID = +props.match.params.id;
    // eslint-disable-next-line react/prop-types
    const prevTypeOfWasteID = +props.match.params.id-1;
    // eslint-disable-next-line react/prop-types
    const nextTypeOfWasteID = +props.match.params.id+1;
    const messages = {
        automotiveMsg: 'icons_automotiveID',
        glassMsg: 'icons_glassID',
        electronicsMsg: 'icons_electronicsID',
        metalMsg: 'icons_metalID',
        plasticMsg: 'icons_plasticID',
        householdMsg: 'icons_householdID',
        hazardousMsg: 'icons_hazardousID',
        constructionMsg: 'icons_constructionID',
        paperMsg: 'icons_paperID',
        clothingMsg: 'icons_clothingID',
        batteriesMsg: 'icons_batteriesID',
        lightBulbsMsg: 'icons_lightBulbsID',
        organicWasteMsg: 'icons_organicWasteID',
        otherMsg: 'icons_otherID',
        treeMsg: 'icons_treeID',
        organicWasteInfoMsg: 'organicWasteInfoID',
        paperInfoMsg: 'paperInfoID',
        glassInfoMsg: 'glassInfoID',
        plasticInfoMsg: 'plasticInfoID',
        clothingInfoMsg: 'clothingInfoID',
        electronicsInfoMsg: 'electronicsInfoID',
        batteriesInfoMsg: 'batteriesInfoID',
        householdInfoMsg: 'householdInfoID',
        lightBulbsInfoMsg: 'lightBulbsInfoID',
        automotiveInfoMsg: 'automotiveInfoID',
        metalInfoMsg: 'metalInfoID',
        hazardousInfoMsg: 'hazardousInfoID',
        treeInfoMsg: 'treeInfoID',
        otherInfoMsg: 'otherInfoID'
    }
    const allIcons = [
        {
            id: 1,
            key: GARBAGE_TYPES.organicWaste,
            component: <FontAwesomeIcon
                icon={['fas', 'apple-alt']}
            ></FontAwesomeIcon>,
            name:  messages.organicWasteMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 2,
            key: GARBAGE_TYPES.paper,
            component: <FontAwesomeIcon
                icon={['fas', 'book-open']}
            ></FontAwesomeIcon>,
            name: messages.paperMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 3,
            key: GARBAGE_TYPES.glass,
            component: <FontAwesomeIcon
                icon={['fas', 'wine-bottle']}
            ></FontAwesomeIcon>,
            name: messages.glassMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 4,
            key: GARBAGE_TYPES.plastic,
            component: <FontAwesomeIcon
                icon={['fab', 'gulp']}
            ></FontAwesomeIcon>,
            name: messages.plasticMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 5,
            key: GARBAGE_TYPES.clothing,
            component: <FontAwesomeIcon
                icon={['fas', 'tshirt']}
            ></FontAwesomeIcon>,
            name: messages.clothingMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 6,
            key: GARBAGE_TYPES.electronics,
            component: <FontAwesomeIcon
                icon={['fas', 'laptop']}
            ></FontAwesomeIcon>,
            name: messages.electronicsMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 7,
            key: GARBAGE_TYPES.batteries,
            component: <FontAwesomeIcon
                icon={['fas', 'battery-three-quarters']}
            ></FontAwesomeIcon>,
            name: messages.batteriesMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 8,
            key: GARBAGE_TYPES.household,
            component: <FontAwesomeIcon
                icon={['fas', 'home']}
            ></FontAwesomeIcon>,
            name: messages.householdMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 9,
            key: GARBAGE_TYPES.lightBulbs,
            component: <FontAwesomeIcon
                icon={['fas', 'lightbulb']}
            ></FontAwesomeIcon>,
            name: messages.lightBulbsMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 10,
            key: GARBAGE_TYPES.construction,
            component: <FontAwesomeIcon
                icon={['fas', 'hammer']}
            ></FontAwesomeIcon>,
            name: messages.constructionMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 11,
            key: GARBAGE_TYPES.automotive,
            component: <FontAwesomeIcon
                icon={['fas', 'car-crash']}
            ></FontAwesomeIcon>,
            name: messages.automotiveMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 12,
            key: GARBAGE_TYPES.metal,
            component: <FontAwesomeIcon
                icon={['fas', 'pager']}
            ></FontAwesomeIcon>,
            name: messages.metalMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 13,
            key: GARBAGE_TYPES.hazardous,
            component: <FontAwesomeIcon
                icon={['fas', 'radiation']}
            ></FontAwesomeIcon>,
            name: messages.hazardousMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 14,
            key: GARBAGE_TYPES.tree,
            component: <FontAwesomeIcon
                icon={['fas', 'tree']}
            ></FontAwesomeIcon>,
            name: messages.treeMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        },
        {
            id: 15,
            key: GARBAGE_TYPES.other,
            component: <FontAwesomeIcon
                icon={['fas', 'hands']}
            ></FontAwesomeIcon>,
            name: messages.otherMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg}))
        }
    ];
    let currentTypeOfWaste = {};
    allIcons.forEach((item) => {
        if(currentTypeOfWasteID === item.id) {
            currentTypeOfWaste = item;
        }
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <div className={styles.btnPrevWrapper}>
                    <NavLink to={`/typeofwaste/${prevTypeOfWasteID}`}>
                        <img src={prev} alt="" className={`${styles.btnArrows} ${styles.btnPrev}`}/><span className={`${styles.prevBtnText} ${styles.btnText}`}>Back</span>
                    </NavLink>
                </div>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}>
                        {currentTypeOfWaste.component}
                    </div>
                    <p className={styles.iconText}>
                        {intl.formatMessage({ id: currentTypeOfWaste.name })}
                    </p>
                </div>
                <div className={styles.btnPrevWrapper}>
                    <NavLink to={`/typeofwaste/${nextTypeOfWasteID}`}>
                        <span className={`${styles.nextBtnText} ${styles.btnText}`}>Next</span><img src={next} alt="" className={`${styles.btnArrows}  ${styles.btnNext}`}/>
                    </NavLink>
                </div>
            </div>
            <div className={styles.mainContent}>
                {currentTypeOfWaste.info}
            </div>
        </div>
    )


}

export default WastePage;
/* eslint-disable no-unused-vars */
import React, {useCallback, useState} from 'react';
import styles from './wastePage.module.css';
import {useIntl} from "react-intl";
import {GARBAGE_TYPES} from "../../../types/garbageTypes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import prev from './../../../assets/images/prev.png';
import next from './../../../assets/images/next.png'
import {NavLink} from "react-router-dom";
import Parser from "html-react-parser";
import organic1 from './../../../assets/images/organic1.jpeg';
import organic2 from './../../../assets/images/organic2.jpeg';
import organic3 from './../../../assets/images/organic3.jpeg';
import organic4 from './../../../assets/images/organic4.jpeg';
import glass1 from './../../../assets/images/glass1.jpeg';
import glass2 from './../../../assets/images/glass2.jpeg';
import glass3 from './../../../assets/images/glass3.jpeg';
import glass4 from './../../../assets/images/glass4.jpeg';
import cloth1 from './../../../assets/images/cloth1.jpeg';
import cloth2 from './../../../assets/images/cloth2.jpeg';
import cloth3 from './../../../assets/images/cloth3.jpeg';
import cloth4 from './../../../assets/images/cloth4.jpeg';
import bigLeaf from './../../../assets/images/bigLeaf.png';
import heart from './../../../assets/images/heart.png';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

// eslint-disable-next-line react/prop-types
const CustomFooter = ({ innerProps, isModal }) => isModal ? (
    <div {...innerProps}>
        {/*// your component internals*/}
    </div>
) : null;

const WastePage = (props) => {
    const [showBigger, setShowBigger] = useState(false);
    const intl = useIntl();
    // eslint-disable-next-line react/prop-types
    let currentTypeOfWasteID = +props.match.params.id;
    // eslint-disable-next-line react/prop-types
    let prevTypeOfWasteID = +props.match.params.id-1;
    // eslint-disable-next-line react/prop-types
    let nextTypeOfWasteID = +props.match.params.id+1;
    if(prevTypeOfWasteID <= 0) {
        prevTypeOfWasteID = 15;
    } else if(nextTypeOfWasteID >= 15) {
        nextTypeOfWasteID = 1;
    }
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
        otherInfoMsg: 'otherInfoID',
        backMsg: 'backID',
        nextMsg: 'nextID',
        photoExamplesMsg: 'photoExamplesID',
    }
    const allIcons = [
        {
            id: 1,
            key: GARBAGE_TYPES.organicWaste,
            component: <FontAwesomeIcon
                icon={['fas', 'apple-alt']}
            ></FontAwesomeIcon>,
            name:  messages.organicWasteMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            imgs: [
                {
                    src: organic1,
                    width: 1,
                    height: 1,
                },
                {
                    src: organic2,
                    width: 2,
                    height: 2,
                },
                {
                    src: organic3,
                    width: 2,
                    height: 2,
                },
                {
                    src: organic4,
                    width: 2,
                    height: 2,
                },
            ],
            isAllInfo: true,

        },
        {
            id: 2,
            key: GARBAGE_TYPES.paper,
            component: <FontAwesomeIcon
                icon={['fas', 'book-open']}
            ></FontAwesomeIcon>,
            name: messages.paperMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 3,
            key: GARBAGE_TYPES.glass,
            component: <FontAwesomeIcon
                icon={['fas', 'wine-bottle']}
            ></FontAwesomeIcon>,
            name: messages.glassMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            imgs: [
                {
                    src: glass1,
                    width: 1,
                    height: 1,
                },
                {
                    src: glass2,
                    width: 2,
                    height: 2,
                },
                {
                    src: glass3,
                    width: 2,
                    height: 2,
                },
                {
                    src: glass4,
                    width: 2,
                    height: 2,
                },
            ],
            isAllInfo: true,

        },
        {
            id: 4,
            key: GARBAGE_TYPES.plastic,
            component: <FontAwesomeIcon
                icon={['fab', 'gulp']}
            ></FontAwesomeIcon>,
            name: messages.plasticMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 5,
            key: GARBAGE_TYPES.clothing,
            component: <FontAwesomeIcon
                icon={['fas', 'tshirt']}
            ></FontAwesomeIcon>,
            name: messages.clothingMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            imgs: [
                {
                    src: cloth1,
                    width: 1,
                    height: 1,
                },
                {
                    src: cloth2,
                    width: 2,
                    height: 2,
                },
                {
                    src: cloth3,
                    width: 2,
                    height: 2,
                },
                {
                    src: cloth4,
                    width: 2,
                    height: 2,
                },
            ],
            isAllInfo: true,

        },
        {
            id: 6,
            key: GARBAGE_TYPES.electronics,
            component: <FontAwesomeIcon
                icon={['fas', 'laptop']}
            ></FontAwesomeIcon>,
            name: messages.electronicsMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 7,
            key: GARBAGE_TYPES.batteries,
            component: <FontAwesomeIcon
                icon={['fas', 'battery-three-quarters']}
            ></FontAwesomeIcon>,
            name: messages.batteriesMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 8,
            key: GARBAGE_TYPES.household,
            component: <FontAwesomeIcon
                icon={['fas', 'home']}
            ></FontAwesomeIcon>,
            name: messages.householdMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 9,
            key: GARBAGE_TYPES.lightBulbs,
            component: <FontAwesomeIcon
                icon={['fas', 'lightbulb']}
            ></FontAwesomeIcon>,
            name: messages.lightBulbsMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 10,
            key: GARBAGE_TYPES.construction,
            component: <FontAwesomeIcon
                icon={['fas', 'hammer']}
            ></FontAwesomeIcon>,
            name: messages.constructionMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 11,
            key: GARBAGE_TYPES.automotive,
            component: <FontAwesomeIcon
                icon={['fas', 'car-crash']}
            ></FontAwesomeIcon>,
            name: messages.automotiveMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 12,
            key: GARBAGE_TYPES.metal,
            component: <FontAwesomeIcon
                icon={['fas', 'pager']}
            ></FontAwesomeIcon>,
            name: messages.metalMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 13,
            key: GARBAGE_TYPES.hazardous,
            component: <FontAwesomeIcon
                icon={['fas', 'radiation']}
            ></FontAwesomeIcon>,
            name: messages.hazardousMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 14,
            key: GARBAGE_TYPES.tree,
            component: <FontAwesomeIcon
                icon={['fas', 'tree']}
            ></FontAwesomeIcon>,
            name: messages.treeMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        },
        {
            id: 15,
            key: GARBAGE_TYPES.other,
            component: <FontAwesomeIcon
                icon={['fas', 'hands']}
            ></FontAwesomeIcon>,
            name: messages.otherMsg,
            info: Parser(intl.formatMessage({ id: messages.organicWasteInfoMsg})),
            isAllInfo: false,
        }
    ];
    let currentTypeOfWaste = {};
    allIcons.forEach((item) => {
        if(currentTypeOfWasteID === item.id) {
            currentTypeOfWaste = item;
        }
    })
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        currentTypeOfWaste.isAllInfo === true ?
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.btnPrevWrapper}>
                        <NavLink to={`/typeofwaste/${prevTypeOfWasteID}`}>
                            <img src={prev} alt="" className={`${styles.btnArrows} ${styles.btnPrev}`}/><span className={`${styles.prevBtnText} ${styles.btnText}`}>{intl.formatMessage({ id: messages.backMsg })}</span>
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
                            <span className={`${styles.nextBtnText} ${styles.btnText}`}>{intl.formatMessage({ id: messages.nextMsg })}</span><img src={next} alt="" className={`${styles.btnArrows}  ${styles.btnNext}`}/>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.mainContent}>
                    {currentTypeOfWaste.info}
                </div>
                <br></br>
                <h4>{intl.formatMessage({ id: messages.photoExamplesMsg })}</h4>
                <div className={styles.sliderWrapper}>
                    <Gallery photos={currentTypeOfWaste.imgs} onClick={openLightbox}/>
                    <div className={styles.test}>
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        styles={{
                                            navigationNext: (StyleObj, State)=> ({
                                                ...StyleObj,
                                                right: '-100px',
                                            }),
                                            navigationPrev: (StyleObj, State)=> ({
                                                ...StyleObj,
                                                left: '-100px',
                                            }),
                                            container: (base, state) => ({
                                                ...base,
                                                width: 600,
                                                height: 500,
                                                position: 'relative',

                                                ['@media (max-width: 770px)']: {
                                                    ...base,
                                                    width: 300,

                                                },
                                            }),
                                            view: base => ({
                                                ...base,
                                                alignItems: 'center',
                                                display: 'flex ',
                                                justifyContent: 'center',

                                                ['@media (max-width: 770px)']: {
                                                    padding: 10,
                                                    maxWidth: '300px',
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                },

                                                '& > img': {
                                                },
                                            })

                                        }}
                                        components={{ Footer: CustomFooter,
                                                        Header: null,
                                            // View: CustomView(currentTypeOfWaste.imgs)
                                        }}
                                        currentIndex={currentImage}
                                        views={currentTypeOfWaste.imgs}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </div>
                </div>
            </div>
             :
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.btnPrevWrapper}>
                        <NavLink to={`/typeofwaste/${prevTypeOfWasteID}`}>
                            <img src={prev} alt="" className={`${styles.btnArrows} ${styles.btnPrev}`}/><span className={`${styles.prevBtnText} ${styles.btnText}`}>{intl.formatMessage({ id: messages.backMsg })}</span>
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
                            <span className={`${styles.nextBtnText} ${styles.btnText}`}>{intl.formatMessage({ id: messages.nextMsg })}</span><img src={next} alt="" className={`${styles.btnArrows}  ${styles.btnNext}`}/>
                        </NavLink>
                    </div>
                </div>
                <p className={styles.noAllText}>This section will be filled with information soon.
                    <br></br>Thank you for your interest in our site!</p>
                <div className={styles.bigLeafWrapper}>
                    <img src={heart} alt="" className={styles.heartImg}/>
                    <img src={bigLeaf} alt="" className={styles.bigLeaf}/>
                </div>
            </div>
    )
}

export default WastePage;
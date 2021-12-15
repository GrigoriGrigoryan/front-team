import React from 'react';
import styles from './GarbageLibrary.module.css';
import { useIntl } from "react-intl";
import {GARBAGE_TYPES} from "../../types/garbageTypes";
// import Icon from "../Map/Icons/Icon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const GarbageLibrary = () => {
    const intl = useIntl();
    const messages = {
        garbageLibraryTitleMsg: 'garbageLibraryTitleID',
        garbageLibraryMainTextMsg: 'garbageLibraryMainTextID',
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
    }

    const allIcons = [
        {
            id: 1,
            key: GARBAGE_TYPES.organicWaste,
            component: <FontAwesomeIcon
                    icon={['fas', 'apple-alt']}
                ></FontAwesomeIcon>,
            name:  messages.organicWasteMsg,
        },
        {
            id: 2,
            key: GARBAGE_TYPES.paper,
            component: <FontAwesomeIcon
                icon={['fas', 'book-open']}
            ></FontAwesomeIcon>,
            name: messages.paperMsg,
        },
        {
            id: 3,
            key: GARBAGE_TYPES.glass,
            component: <FontAwesomeIcon
                icon={['fas', 'wine-bottle']}
            ></FontAwesomeIcon>,
            name: messages.glassMsg
        },
        {
            id: 4,
            key: GARBAGE_TYPES.plastic,
            component: <FontAwesomeIcon
                icon={['fab', 'gulp']}
            ></FontAwesomeIcon>,
            name: messages.plasticMsg,
        },
        {
            id: 5,
            key: GARBAGE_TYPES.clothing,
            component: <FontAwesomeIcon
                icon={['fas', 'tshirt']}
            ></FontAwesomeIcon>,
            name: messages.clothingMsg,
        },
        {
            id: 6,
            key: GARBAGE_TYPES.electronics,
            component: <FontAwesomeIcon
                icon={['fas', 'laptop']}
            ></FontAwesomeIcon>,
            name: messages.electronicsMsg
        },
        {
            id: 7,
            key: GARBAGE_TYPES.batteries,
            component: <FontAwesomeIcon
                icon={['fas', 'battery-three-quarters']}
            ></FontAwesomeIcon>,
            name: messages.batteriesMsg,
        },
        {
            id: 8,
            key: GARBAGE_TYPES.household,
            component: <FontAwesomeIcon
                icon={['fas', 'home']}
            ></FontAwesomeIcon>,
            name: messages.householdMsg
        },
        {
            id: 9,
            key: GARBAGE_TYPES.lightBulbs,
            component: <FontAwesomeIcon
                icon={['fas', 'lightbulb']}
            ></FontAwesomeIcon>,
            name: messages.lightBulbsMsg,
        },
        {
            id: 10,
            key: GARBAGE_TYPES.construction,
            component: <FontAwesomeIcon
                icon={['fas', 'hammer']}
            ></FontAwesomeIcon>,
            name: messages.constructionMsg,
        },
        {
            id: 11,
            key: GARBAGE_TYPES.automotive,
            component: <FontAwesomeIcon
                icon={['fas', 'car-crash']}
            ></FontAwesomeIcon>,
            name: messages.automotiveMsg,
        },
        {
            id: 12,
            key: GARBAGE_TYPES.metal,
            component: <FontAwesomeIcon
                icon={['fas', 'pager']}
            ></FontAwesomeIcon>,
            name: messages.metalMsg,
        },
        {
            id: 13,
            key: GARBAGE_TYPES.hazardous,
            component: <FontAwesomeIcon
                icon={['fas', 'radiation']}
            ></FontAwesomeIcon>,
            name: messages.hazardousMsg,
        },
        {
            id: 14,
            key: GARBAGE_TYPES.tree,
            component: <FontAwesomeIcon
                icon={['fas', 'tree']}
            ></FontAwesomeIcon>,
            name: messages.treeMsg,
        },
        {
            id: 15,
            key: GARBAGE_TYPES.other,
            component: <FontAwesomeIcon
                icon={['fas', 'hands']}
            ></FontAwesomeIcon>,
            name: messages.otherMsg,
        }
    ];

    return (
        <div className={styles.garbageLibraryWrapper}>
            <h4  className={styles.garbageLibraryTitle}>
                {intl.formatMessage({ id: messages.garbageLibraryTitleMsg })}
            </h4>
            <p className={styles.garbageLibraryMainText}>
                {intl.formatMessage({ id: messages.garbageLibraryMainTextMsg })}
            </p>
            <div className={styles.iconsWrapper}>
                {
                    allIcons.map((item) => {
                        return (
                                <div key={item.key} className={styles.iconWrapper}>
                                    <div className={styles.icon}>
                                        {item.component}
                                    </div>
                                    <p className={styles.iconText}>
                                        {intl.formatMessage({ id: item.name })}
                                    </p>
                                </div>
                        )
                })
                }
            </div>
        </div>
    );
};

export default GarbageLibrary;
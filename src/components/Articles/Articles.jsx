import React from 'react';
import styles from './Articles.module.css';
// import {Link} from "react-router-dom";
import NavLink from "react-router-dom/es/NavLink";
import {useIntl} from "react-intl";

const Articles = () => {
    const intl = useIntl();

    const messages = {
        article1TitleMsg: 'article1TitleID',
        article1TextMsg: 'article1TextID',
        article2TitleMsg: 'article2TitleID',
        article2TextMsg: 'article2TextID'
    };
    const articlesArr = [
        {
            id: 1,
            title: messages.article1TitleMsg,
            img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
            text: messages.article1TextMsg
        },
        {
            id: 2,
            title: messages.article2TitleMsg,
            img: 'https://cdn.zmescience.com/wp-content/uploads/2020/07/recycling-1024x384.jpg',
            text: messages.article2TextMsg
        },
        {
            id: 3,
            title: messages.article2TitleMsg,
            img: 'https://www.waste360.com/sites/waste360.com/files/RecyclingApps_0.png',
            text: messages.article2TextMsg
        }
    ]
    return (
        <div className={styles.articlesWrapper}>
            {
                articlesArr.map((item) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div className={styles.articleItem}>
                            <NavLink to={`/article/${item.id}`}>
                                <h4 className={styles.articleTitle}>{intl.formatMessage({ id: item.title})}</h4>
                                <img className={styles.articleImg} src={item.img} alt=""/>
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Articles;
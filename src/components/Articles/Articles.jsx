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
        article2TextMsg: 'article2TextID',
        article3TitleMsg: 'article3TitleID',
        article3TextMsg: 'article3TextID'
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
            img: 'https://americanbutler.ru/uploads/images/useful/lifehacks/recycling/recycling-01.jpg',
            text: messages.article2TextMsg
        },
        {
            id: 3,
            title: messages.article3TitleMsg,
            img: 'https://www.5.ua/media/pictures/original/190244.jpg?t=1596014476',
            text: messages.article3TextMsg
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
import React from 'react';
import styles from './Articles.module.css';
import NavLink from "react-router-dom/es/NavLink";
import { useIntl } from "react-intl";
import Article_01 from './../../assets/images/Article_01.jpeg';
import Article_02 from './../../assets/images/Article_02.jpeg';
import Article_03 from './../../assets/images/Article_03.jpeg';
import Article_04 from './../../assets/images/Article_04.jpeg';
import Article_05 from './../../assets/images/Article_05.jpeg';
import Article_06 from './../../assets/images/Article_06.jpeg';
import Article_07 from './../../assets/images/Article_07.jpeg';
import Article_08 from './../../assets/images/Article_08.jpeg';
import Article_09 from './../../assets/images/Article_09.jpeg';

const Articles = () => {
    const intl = useIntl();

    const messages = {
        article1TitleMsg: 'article1TitleID',
        article1TextMsg: 'article1TextID',
        article2TitleMsg: 'article2TitleID',
        article2TextMsg: 'article2TextID',
        article3TitleMsg: 'article3TitleID',
        article3TextMsg: 'article3TextID',
        article4TitleMsg: 'article4TitleID',
        article4TextMsg: 'article4TextID',
        article5TitleMsg: 'article5TitleID',
        article5TextMsg: 'article5TextID',
        article6TitleMsg: 'article6TitleID',
        article6TextMsg: 'article6TextID',
        article7TitleMsg: 'article7TitleID',
        article7TextMsg: 'article7TextID',
        article8TitleMsg: 'article8TitleID',
        article8TextMsg: 'article8TextID',
        article9TitleMsg: 'article9TitleID',
        article9TextMsg: 'article9TextID',
        article10TitleMsg: 'article10TitleID',
        article10TextMsg: 'article10TextID',
        article11TitleMsg: 'article11TitleID',
        article11TextMsg: 'article11TextID',
        article12TitleMsg: 'article12TitleID',
        article12TextMsg: 'article12TextID',
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
        },
        {
            id: 4,
            title: messages.article4TitleMsg,
            img: Article_01,
            text: messages.article4TextMsg
        },
        {
            id: 5,
            title: messages.article5TitleMsg,
            img: Article_02,
            text: messages.article5TextMsg
        },
        {
            id: 6,
            title: messages.article6TitleMsg,
            img: Article_03,
            text: messages.article6TextMsg
        },
        {
            id: 7,
            title: messages.article7TitleMsg,
            img: Article_04,
            text: messages.article7TextMsg
        },
        {
            id: 8,
            title: messages.article8TitleMsg,
            img: Article_05,
            text: messages.article8TextMsg
        },
        {
            id: 9,
            title: messages.article9TitleMsg,
            img: Article_06,
            text: messages.article9TextMsg
        },
        {
            id: 10,
            title: messages.article10TitleMsg,
            img: Article_07,
            text: messages.article10TextMsg
        },
        {
            id: 11,
            title: messages.article11TitleMsg,
            img: Article_08,
            text: messages.article11TextMsg
        },
        {
            id: 12,
            title: messages.article12TitleMsg,
            img: Article_09,
            text: messages.article12TextMsg
        },

    ]
    return (
        <div className={styles.articlesWrapper}>
            {
                articlesArr.map((item) => {
                    return (
                        <div key={item.title} className={styles.articleItem}>
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
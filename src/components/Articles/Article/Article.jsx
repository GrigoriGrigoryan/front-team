import React from "react";
import styles from './Article.module.css';
import { useIntl } from "react-intl";
import Parser from "html-react-parser";

const Article = (props) => {
    // eslint-disable-next-line react/prop-types
    const currentArticleID = +props.match.params.id;
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
            title: intl.formatMessage({ id: messages.article1TitleMsg}),
            img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
            text: Parser(intl.formatMessage({ id: messages.article1TextMsg}))
        },
        {
            id: 2,
            title: intl.formatMessage({ id: messages.article2TitleMsg}),
            img: 'https://americanbutler.ru/uploads/images/useful/lifehacks/recycling/recycling-01.jpg',
            text: Parser(intl.formatMessage({ id: messages.article2TextMsg}))
        },
        {
            id: 3,
            title: intl.formatMessage({ id: messages.article3TitleMsg}),
            img: 'https://www.5.ua/media/pictures/original/190244.jpg?t=1596014476',
            text: Parser(intl.formatMessage({ id: messages.article3TextMsg}))
        }
    ]

    let currentArticle = {};

    articlesArr.forEach((item) => {
        if(currentArticleID === item.id) {
            currentArticle = item;
        }
    })

    return (
        <div className={styles.articleBox}>
            <div className={styles.articleBg} />
            <div className={styles.articleWrapper}>
                <h4 className={styles.articleTitle}>
                    {currentArticle.title}</h4>
                <img src={currentArticle.img} alt="" className={styles.articleImg}/>
                <p className={styles.articleText}>
                    {currentArticle.text}
                </p>
            </div>
        </div>
)
}

export default Article;
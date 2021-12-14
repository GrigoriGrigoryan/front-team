import React from "react";
import styles from './Article.module.css';
import {useIntl} from "react-intl";
import Parser from "html-react-parser";

const Article = (props) => {
    // eslint-disable-next-line no-console,react/prop-types
    console.log(props.match.params.id);
    // console.log(props.params.id);

    // eslint-disable-next-line react/prop-types
    const currentArticleID = props.match.params.id;


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

    let currentArticle = {};

    articlesArr.forEach((item) => {
        if(currentArticleID === item.id) {
            currentArticle = item;
            console.log(currentArticle);
        }
    })



    return (
        <div className={styles.articleBox}>
            <div className={styles.articleBg} />
            <div className={styles.articleWrapper}>
                <h4 className={styles.articleTitle}>
                    {intl.formatMessage({ id: currentArticle.title})}</h4>
                <img src={currentArticle.img} alt="" className={styles.articleImg}/>
                <p className={styles.articleText}>
                    {Parser(intl.formatMessage({id: currentArticle.text}))}
                </p>
            </div>
        </div>
)
}

export default Article;
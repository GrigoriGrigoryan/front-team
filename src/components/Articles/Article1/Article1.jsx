import React from "react";
import styles from '../Article/Article.module.css';
import {useIntl} from "react-intl";
import Parser from "html-react-parser";

const Article1 = (props) => {
    // eslint-disable-next-line no-console,react/prop-types
    console.log(props.match.params.id);
    const intl = useIntl();

    const messages = {
        article1TitleMsg: 'article1TitleID',
        article1TextMsg: 'article1TextID'
    };
    const article = {
        id: 1,
        title: messages.article1TitleMsg,
        img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
        text: messages.article1TextMsg
    };

    return (
        <div className={styles.articleBox}>
            <div className={styles.articleBg} />
            <div className={styles.articleWrapper}>
                <h4 className={styles.articleTitle}>
                    {intl.formatMessage({ id: article.title })}</h4>
                <img src={article.img} alt="" className={styles.articleImg}/>
                <p className={styles.articleText}>
                    {Parser(intl.formatMessage({ id: article.text }))}
                </p>
            </div>
        </div>
)
}

export default Article1;
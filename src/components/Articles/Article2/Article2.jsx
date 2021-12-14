import React from "react";
import styles from '../Article/Article.module.css';
import {useIntl} from "react-intl";
import Parser from 'html-react-parser';

const Article1 = (props) => {
    // eslint-disable-next-line no-console,react/prop-types
    console.log(props.match.params.id);
    // console.log(props.params.id);
    const messages = {
        article2TitleMsg: 'article2TitleID',
        article2TextMsg: 'article2TextID'
    };
    const intl = useIntl();
    const article = {
        id: 2,
        title: messages.article2TitleMsg,
        img: 'https://www.heritage-enviro.com/wp-content/uploads/2020/07/Recycling-Graphic.png',
        text: messages.article2TextMsg
    };

    return (
        <div className={styles.articleBox}>
            <div className={styles.articleBg} />
            <div className={styles.articleWrapper}>
                <h4 className={styles.articleTitle}>
                    {intl.formatMessage({ id: article.title})}</h4>
                <img src={article.img} alt="" className={styles.articleImg}/>
                <p className={styles.articleText}>
                    {Parser(intl.formatMessage({id: article.text}))}
                </p>
            </div>
        </div>
)
}

export default Article1;
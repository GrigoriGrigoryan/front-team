import React from "react";
import styles from './Article.module.css';

const Article = (props) => {
    // eslint-disable-next-line no-console,react/prop-types
    console.log(props.match.params.id);
    // console.log(props.params.id);

    const article = {
        id: 1,
        title: 'What Would Happen If People Stopped Recycling?',
        img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
        text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
    };

    return (
        <div className={styles.articleBox}>
            <div className={styles.articleBg} />
            <div className={styles.articleWrapper}>
                <h4 className={styles.articleTitle}>{article.title}</h4>
                <img src={article.img} alt="" className={styles.articleImg}/>
                <p className={styles.articleText}>{article.text}</p>
            </div>
        </div>
)
}

export default Article;
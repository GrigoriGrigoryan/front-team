import React from 'react';
import styles from './Articles.module.css';
// import {Link} from "react-router-dom";
import NavLink from "react-router-dom/es/NavLink";

const Articles = () => {
    const articlesArr = [
        {
            id: 1,
            title: 'What Would Happen If People Stopped Recycling?',
            img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
            text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
        },
        {
            id: 2,
            title: 'What Would Happen If People Stopped Recycling?',
            img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
            text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
        },
        {
            id:3,
            title: 'What Would Happen If People Stopped Recycling?',
            img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
            text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
        },
        {
            id: 4,
            title: 'What Would Happen If People Stopped Recycling?',
            img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
            text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
        },
        {
            id: 5,
            title: 'What Would Happen If People Stopped Recycling?',
            img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
            text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
        },
        {
            id: 6,
            title: 'What Would Happen If People Stopped Recycling?',
            img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
            text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
        },
        {
            id: 7,
            title: 'What Would Happen If People Stopped Recycling?',
            img: 'https://media-exp1.licdn.com/dms/image/C4D1BAQEnbNMKOBsoAQ/company-background_10000/0/1538146833032?e=2159024400&v=beta&t=N2APXODb9TgWwUTXiLXGC-XPopqh72HAJ6NE4Xm2JwE',
            text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
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
                                <h4 className={styles.articleTitle}>{item.title}</h4>
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
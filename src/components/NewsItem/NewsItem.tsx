
import {formatTimeAgo} from "../../helpers/formatTimeAgo.ts";
import style from './style.module.css'

export const NewsItem = ({item}) => {
    return (

        <li className={style.item}>
            <div className={style.image} style={{backgroundImage :`url(${item.image})`}}></div>
            <div className={style.info}>
                <h2 className={style.title}>{item?.title}</h2>
                <p className={style.extra}>{formatTimeAgo(item?.published)} by {item?.author}</p>
            </div>
        </li>
    );
};

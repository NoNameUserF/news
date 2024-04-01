import {FC} from "react";
import styles from './styles.module.css'
import {NewsItem} from "../NewsItem/NewsItem.tsx";
interface INews {
    news:any
}
export const NewsList:FC<INews> = ({news}) => {
    return (
        <div className={styles.list}>
            {news.map((item:any) => {
                return <NewsItem  item ={item} key ={item.id}></NewsItem>
            })}
        </div>
    );
};

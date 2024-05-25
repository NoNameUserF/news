import {FC} from "react";
import styles from './styles.module.css'
import {NewsItem} from "../NewsItem/NewsItem.tsx";
import {withSkeleton} from "../../helpers/hocks/withSkeleton.tsx";
interface INews {
    news:any
}
 const NewsList:FC<INews> = ({news}) => {
    return (
        <div className={styles.list}>
            {news.map((item:any) => {
                return <NewsItem  item ={item} key ={item.id}></NewsItem>
            })}
        </div>
    );
};

export const  NewsListWithSkeleton = withSkeleton(NewsList ,'item', 10)
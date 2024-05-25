import {FC} from "react";
import Image from '../ImageBanner/Image.tsx'
import style from './style.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.ts";
import {withSkeleton} from "../../helpers/hocks/withSkeleton.tsx";

interface IItems {
    item : any
}

export const NewsBanner:FC<IItems> = ({item}) => {
    return (
        <div className={style.banner}>
            <Image img ={item.image}/>
            <h2 className={style.title}>{item.title}</h2>
            <p className={style.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    );
}
export const  NewsBannerWithSkeleton = withSkeleton(NewsBanner ,'banner', 1)

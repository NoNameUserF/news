import {FC} from "react";
import style from './style.module.css'
import {withSkeleton} from "../../helpers/hocks/withSkeleton.tsx";
import {NewsBanner} from "../NewsBanner/NewsBanner.tsx";

interface IItems {
    banners : any
}
const BannersList:FC<IItems> = ({banners} ) => {
    return (
        <ul className={style.banners}>
            {banners?.map((banner : any) => {
                return  (
                    <NewsBanner key={banner.id} item ={banner}></NewsBanner>
                )
                })
            }
        </ul>
    );
}
export const  BannerListWithSkeleton = withSkeleton(BannersList ,'banner', 6 , 'row')

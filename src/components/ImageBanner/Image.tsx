import {FC} from "react";
import style from './style.module.css'

interface IMage{
    img:any
}
const  Image:FC<IMage> = ({img}) => {
    return (
        <div className={style.wrapper}>
            {img? <img className={style.image} src={img} alt="news-image"/> : null}
        </div>
    );
}

export default Image;
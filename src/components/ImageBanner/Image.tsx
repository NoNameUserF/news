import style from './style.module.css'
const  Image = ({img}) => {
    return (
        <div className={style.wrapper}>
            {img? <img className={style.image} src={img} alt="news-image"/> : null}
        </div>
    );
}

export default Image;
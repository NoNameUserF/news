import styles from './style.module.css'
import {useEffect, useState} from "react";
import {getNews} from "../API/apiNews.ts";
import {NewsBanner} from "../components/NewsBanner/NewsBanner.tsx";
import {NewsList} from '../components/NewsList/NewsList.tsx'
import {Skeleton} from "../components/Skeleton/Skeleton.tsx";

function Main() {
    const [loading, setLoading] = useState(true)
    const [news, setNews] = useState([])
    useEffect(() => {
        setLoading(false)
        const fetchNews = async () => {
            try {
                const response = await getNews()
                setNews(response.news)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(true)
            }
        }
        fetchNews()
    }, [])
    return (
        <main className={styles.main}>
            {news.length && loading ? <NewsBanner item={news[0]}></NewsBanner> : <Skeleton count={1} type='banner'/>}
            {loading ?  <NewsList news={news}/>: <Skeleton count={10} type='item'/>}
        </main>
    );
}

export default Main;
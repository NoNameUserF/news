
import styles from './style.module.css'
import {useEffect, useState} from "react";
import {getNews} from "../API/apiNews.ts";
import {NewsBanner} from "../components/NewsBanner/NewsBanner.tsx";
import {NewsList} from '../components/NewsList/NewsList.tsx'
function Main() {

    const [news, setNews] = useState([])
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews()
                setNews(response.news)
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchNews()
    }, [])
    return (
        <main className ={styles.main}>
            {news.length ? <NewsBanner item ={news[0]}></NewsBanner> : null}
            <NewsList news={news}/>
        </main>
    );
}

export default Main;
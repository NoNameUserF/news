import styles from './style.module.css'
import {useEffect, useState} from "react";
import {getNews, getCategories} from "../API/apiNews.ts";
import {NewsBanner} from "../components/NewsBanner/NewsBanner.tsx";
import {NewsList} from '../components/NewsList/NewsList.tsx'
import {Skeleton} from "../components/Skeleton/Skeleton.tsx";
import {Pagination} from "../components/Pagination/Pagination.tsx";
import {Categories} from "../components/Categories/Categories.tsx"
function Main() {
    const [news, setNews] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10;
    const pageSize = 10
    console.log(categories)
    const fetchNews = async (currentPage: number, pageSize: number) => {
        setLoading(false)
        try {
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategory ==='All' ? null : selectedCategory
            })
            setNews(response.news)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(true)
        }
    }

    const fetchCategories = async () => {
        try {
            const res  = await getCategories()
            setCategories(['All' , ...res.categories])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, []);
    useEffect(() => {
        fetchNews(currentPage, pageSize)

    }, [currentPage,selectedCategory])


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(current => current + 1)
        }
    }
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(current => current - 1)
        }
    }
    const handleCurrentPage = (current: number) => {
        setCurrentPage(current)

    }
    return (
        <main className={styles.main}>
            <Categories selectedCategory={selectedCategory} categories={categories} setSelectedCategory={setSelectedCategory}/>
            {news.length && loading ? <NewsBanner item={news[0]}></NewsBanner> : <Skeleton count={1} type='banner'/>}
            <Pagination currentPage={currentPage} handleCurrentPage={handleCurrentPage} handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage} totalPages={totalPages}/>
            {loading ? <NewsList news={news}/> : <Skeleton count={10} type='item'/>}
        </main>
    );
}

export default Main;
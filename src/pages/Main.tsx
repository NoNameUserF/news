import styles from './style.module.css';
import { useState } from "react";
import { getNews, getCategories } from "../API/apiNews.ts";
import { NewsBannerWithSkeleton } from "../components/NewsBanner/NewsBanner.tsx";
import { NewsListWithSkeleton } from '../components/NewsList/NewsList.tsx';
import { Pagination } from "../components/Pagination/Pagination.tsx";
import { Categories } from "../components/Categories/Categories.tsx";
import { Search } from "../components/Search/Search.tsx";
import { useDebounce } from "../helpers/hooks/useDebounce.tsx";
import { TOTAL_PAGES, PAGE_SIZE } from '../constants/constants.ts';
import { useFetch } from "../helpers/hooks/useFetch.ts";
import  {useFilters} from "../helpers/hooks/useFilters.ts";


function Main() {
    const [selectedCategory, ] = useState('All');



    const{filters , changeFilters} = useFilters(
        {
            page_number: 1,
            page_size: PAGE_SIZE,
            category: null,
            keywords: ''
        })

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const { data: newsData, isLoading: isNewsLoading } = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords
    });

    const { data: categoriesData } = useFetch(getCategories);
    const handleNextPage = () => {
        if (filters.page_number  < TOTAL_PAGES) {
            changeFilters('page_number', filters.page_number  + 1);
        }
    };

    const handlePrevPage = () => {
        if (filters.page_number > 1) {
            changeFilters('page_number' , filters.page_number  -1);
        }
    };

    const handleCurrentPage = (page_number : any) => {
        changeFilters('page_number' , page_number);
    };

    return (
        <main className={styles.main}>
            {categoriesData ?
                <Categories
                    selectedCategory={selectedCategory}
                    categories={['All' , ...categoriesData?.categories]}
                    setSelectedCategory={(category: string) => changeFilters('category' , category)}
                />
             : null}
            <Search keywords={filters.keywords} setKeywords={(keywords : string) => changeFilters('keywords' , keywords)} />
            <NewsBannerWithSkeleton
                item={newsData && newsData.news && newsData.news[0]}
                isLoading={isNewsLoading}
            />
            <Pagination
                currentPage={filters.page_number}
                handleCurrentPage={handleCurrentPage}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                totalPages={TOTAL_PAGES}
            />
            <NewsListWithSkeleton
                isLoading={isNewsLoading}
                news={newsData?.news}
            />
        </main>
    );
}

export default Main;
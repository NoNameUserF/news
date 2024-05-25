import styles from './style.module.css';
import {getNews} from "../API/apiNews.ts";
import {useDebounce} from "../helpers/hooks/useDebounce.tsx";
import {PAGE_SIZE} from '../constants/constants.ts';
import {useFetch} from "../helpers/hooks/useFetch.ts";
import {useFilters} from "../helpers/hooks/useFilters.ts";
import {LatestNews} from "../components/LatestNews/LatestNews.tsx";
import {NewsByFilter} from "../components/NewsByFilters/NewsByFilter.tsx";

function Main() {
    const {filters, changeFilters} = useFilters(
        {
            page_number: 1,
            page_size: PAGE_SIZE,
            category: null,
            keywords: ''
        })

    const debouncedKeywords = useDebounce(filters.keywords, 1500);

    const {data: newsData, isLoading: isNewsLoading} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords
    });


    return (
        <main className={styles.main}>
            <LatestNews isLoading={isNewsLoading} banners={newsData && newsData.news}></LatestNews>
            <NewsByFilter
                filters={filters}
                isNewsLoading={isNewsLoading}
                newsData={newsData}
                changeFilters={changeFilters}
            ></NewsByFilter>
        </main>
    );
}

export default Main;
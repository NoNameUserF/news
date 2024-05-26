import {PAGE_SIZE, TOTAL_PAGES} from "../../constants/constants.ts";
import styles from "./style.module.css";
import {NewsFilters} from "../NewsFilters/NewsFilters.tsx";
import {NewsListWithSkeleton} from "../NewsList/NewsList.tsx";
import {useFilters} from "../../helpers/hooks/useFilters.ts";
import {useDebounce} from "../../helpers/hooks/useDebounce.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getNews} from "../../API/apiNews.ts";
import {PaginationWrapper} from "../PaginationWrapper/PaginationWrapper.tsx";

export const NewsByFilter = ()  => {



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
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            changeFilters('page_number', filters.page_number + 1);
        }
    };

    const handlePrevPage = () => {
        if (filters.page_number > 1) {
            changeFilters('page_number', filters.page_number - 1);
        }
    };

    const handleCurrentPage = (page_number: number) => {
        changeFilters('page_number', page_number);
    };

    return (
        <section className={styles.news_filter}>

            <NewsFilters filters={filters} changeFilters={changeFilters}></NewsFilters>
            <PaginationWrapper currentPage={filters.page_number}
                               handleCurrentPage={handleCurrentPage}
                               handleNextPage={handleNextPage}
                               handlePrevPage={handlePrevPage}
                               totalPages={TOTAL_PAGES}>
                <NewsListWithSkeleton
                    isLoading={isNewsLoading}
                    news={newsData?.news}
                />
            </PaginationWrapper>

        </section>
    );
}


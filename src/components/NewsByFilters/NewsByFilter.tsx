import {TOTAL_PAGES} from "../../constants/constants.ts";
import styles from "./style.module.css";
import {Pagination} from "../Pagination/Pagination.tsx";
import {NewsFilters} from "../NewsFilters/NewsFilters.tsx";
import {NewsListWithSkeleton} from "../NewsList/NewsList.tsx";

export const NewsByFilter = ({ filters, changeFilters, newsData, isNewsLoading }:any)  => {


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
        </section>
    );
}


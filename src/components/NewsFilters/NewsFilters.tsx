import {Categories} from "../Categories/Categories.tsx";
import {Search} from "../Search/Search.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getCategories} from "../../API/apiNews.ts";
import styles from './style.module.css'
export const NewsFilters = ({filters , changeFilters} : any) => {
    const { data: categoriesData } = useFetch(getCategories);

    return (
        <div className={styles.news_filters}>
            {categoriesData ? (
                <Categories
                    selectedCategory={filters.category}
                    categories={[...categoriesData?.categories]}
                    setSelectedCategory={(category: string) => changeFilters('category', category)}
                />
            ) : null}
            <Search keywords={filters.keywords} setKeywords={(keywords: string) => changeFilters('keywords', keywords)} />
        </div>
    );
}

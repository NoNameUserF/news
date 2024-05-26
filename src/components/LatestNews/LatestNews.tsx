import styles from './styles.module.css'
import {BannerListWithSkeleton} from "../BannersList/BannersList.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getLatestNews} from "../../API/apiNews.ts";

export const LatestNews = () => {
    const {data, isLoading} = useFetch(getLatestNews)

    return (
        <section className={styles.latest_news}>
            <BannerListWithSkeleton banners={data && data?.news} isLoading={isLoading}></BannerListWithSkeleton>
        </section>
    );
}

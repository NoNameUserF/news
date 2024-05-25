import styles from './styles.module.css'
import {BannerListWithSkeleton} from "../BannersList/BannersList.tsx";

export const LatestNews = ({banners, isLoading}: any) => {
    return (
        <section className={styles.latest_news}>
            <BannerListWithSkeleton banners={banners} isLoading={isLoading}></BannerListWithSkeleton>
        </section>
    );
}

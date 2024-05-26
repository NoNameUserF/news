import styles from './style.module.css';
import {LatestNews} from "../components/LatestNews/LatestNews.tsx";
import {NewsByFilter} from "../components/NewsByFilters/NewsByFilter.tsx";

function Main() {


    return (
        <main className={styles.main}>
            <LatestNews/>
            <NewsByFilter/>
        </main>
    );
}

export default Main;
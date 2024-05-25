import styles from './styles.module.css';
export const  Search = ({keywords, setKeywords}: any) => {
    return (
        <div className = {styles.search}>
            <input
                className = {styles.input}
                onChange={(e) => setKeywords(e.target.value)}
                value={keywords}
                placeholder ="Type interests's keywords"
                type="text"/>

        </div>
    );
}

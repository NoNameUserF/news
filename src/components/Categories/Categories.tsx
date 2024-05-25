import styles from './styles.module.css'

export const  Categories = ({ selectedCategory, categories, setSelectedCategory}: any) => {
    return (
        <div className ={styles.categories}>
            <button className={!selectedCategory ? styles.active_category  : styles.category}>
                All
            </button>
            {categories.map((category: any) => {
                return <button
                    className ={selectedCategory === category ? styles.active_category : styles.category  }
                    onClick={() => setSelectedCategory(category)}
                    key={category}
                     >
                    {category}</button>
            })}
        </div>
    );
}

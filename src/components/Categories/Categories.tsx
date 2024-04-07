import styles from './styles.module.css'

export const  Categories = ({categories, setSelectedCategory, selectedCategory}: any) => {
    return (
        <div className ={styles.categories}>
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

export default Categories;
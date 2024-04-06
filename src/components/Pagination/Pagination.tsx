import styles from './styles.module.css'

export const Pagination = (
    {
        totalPages,
        currentPage,
        handleCurrentPage,
        handleNextPage,
        handlePrevPage
    }: any) => {
    return (
        <div className={styles.pagination}>
            <button disabled={currentPage <= 1} onClick={() => handlePrevPage()}
                    className={styles.arrowButtons}>{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, index) => {
                        return <button disabled={currentPage === index + 1} onClick={() => handleCurrentPage(index + 1)}
                                       className={currentPage === index + 1 ? styles.pageDisabled : styles.pageNumber}
                                       key={index}>{index + 1}</button>
                    }
                )}
            </div>
            <button disabled={currentPage >= totalPages} onClick={() => handleNextPage()}
                    className={styles.arrowButtons}>{'>'}</button>
        </div>
    );
}


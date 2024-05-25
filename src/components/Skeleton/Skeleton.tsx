import styles from "./style.module.css";

interface Props {
    type?: string;
    count?: number;
    direction?: string

}

export const Skeleton = ({
                             count = 1,
                             type = "banner",
                             direction = 'col'
                         }: Props) => {
    return (
        <>
            {count > 1 ? (
                <ul
                    className={
                        direction === 'col'? styles.colList: styles.rowList

                    }
                >
                    {[...Array(count)].map((_, index) => (
                        <li
                            key={index}
                            className={type === "banner" ? styles.banner : styles.item}
                        ></li>
                    ))}
                </ul>
            ) : (
                <li className={type === "banner" ? styles.banner : styles.item}></li>
            )}
        </>
    );
};


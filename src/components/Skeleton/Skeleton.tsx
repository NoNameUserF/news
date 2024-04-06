
import styles from "./style.module.css";

interface Props {
    type?: string;
    count?: number;

}

export const Skeleton = ({
                      count = 1,
                      type = "banner",
                  }: Props) => {
    return (
        <>
            {count > 1 ? (
                <ul
                    className={
                        styles.list
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


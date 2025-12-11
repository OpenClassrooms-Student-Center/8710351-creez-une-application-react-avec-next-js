import styles from './Tag.module.css';

export default function Tag({ isDark, children }) {
    return (
        <span className={isDark ? `${styles.tag} ${styles.dark}` : styles.tag}>
            {children}
        </span>
    );
}
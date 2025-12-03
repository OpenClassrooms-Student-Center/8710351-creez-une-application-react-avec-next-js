import styles from './Footer.module.css';

export default function Footer({ children }) {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Aurélien.</p>
            <p className={styles.links}>
                <a href="https://github.com/aurelienec" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/aurelien-antonio/" target="_blank">LinkedIn</a>
            </p>
        </footer>
    );
}

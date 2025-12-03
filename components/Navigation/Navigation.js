'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
    const pathname = usePathname()
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/"
                    className={pathname === '/' ? `${styles.link} ${styles.active}` : styles.link}

                >
                    Mon Portfolio
                </Link>

                <ul className={styles.menu}>
                    <li>
                        <Link href="/" className={pathname === '/' ? `${styles.link} ${styles.active}` : styles.link}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link href="/projets" className={pathname === '/projects' ? `${styles.link} ${styles.active}` : styles.link}>
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link href="/a-propos" className={pathname === '/about' ? `${styles.link} ${styles.active}` : styles.link}>
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={pathname === '/contact' ? `${styles.link} ${styles.active}` : styles.link}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

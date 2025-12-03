import Link from 'next/link'
import styles from './page.module.css'

export default function Formations() {
    const formations = [
        { slug: 'integrateur-web', title: 'Intégrateur Web', description: 'Formation en Intégration Web', tags: ['Bac +2', '9 mois'] },
        { slug: 'testeur-logiciel', title: 'Testeur Logiciel', description: 'Formation en Test Logiciel', tags: ['Bac +2', '9 mois'] },
        { slug: 'developpeur-low-code', title: 'Développeur Low-Code', description: 'Formation en Développement Low-Code', tags: ['Bac +2', '6 mois'] }
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mes Formations</h1>
            <p className={styles.description}>
                Découvrez les parcours diplômants d'OpenClassrooms
            </p>

            <div className={styles.grid}>
                {formations.map((formation) => (
                    <Link
                        href={`/formation/${formation.slug}`}
                        key={formation.slug}
                        className={styles.card}
                    >
                        <h2>{formation.title}</h2>
                        <p>{formation.description}</p>
                        <div className={styles.tags}>
                            {formation.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                        <span className={styles.viewMore}>Voir la formation →</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

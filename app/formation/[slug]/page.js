import styles from './page.module.css'

// Liste des formations (normalement, ça viendrait d'une API ou d'une base de données)
const formations = {
    'integrateur-web': {
        title: 'Intégrateur Web',
        description: 'Formation en Intégration Web. Apprenez à créer des sites web responsive et accessibles.',
        details: ['Bac +2', '9 mois'],
        image: '/images/integrateur.jpg'
    },
    'testeur-logiciel': {
        title: 'Testeur Logiciel',
        description: 'Formation en Test Logiciel. Assurez la qualité des applications avant leur mise en production.',
        details: ['Bac +2', '9 mois'],
        image: '/images/testeur.jpg'
    },
    'developpeur-low-code': {
        title: 'Développeur Low-Code',
        description: 'Formation en Développement Low-Code. Créez des applications rapidement sans coder (ou presque).',
        details: ['Bac +2', '6 mois'],
        image: '/images/lowcode.jpg'
    }
}

export default async function FormationDetail({ params }) {
    const { slug } = await params
    const formation = formations[slug]

    // Si la formation n'existe pas, afficher un message
    if (!formation) {
        return (
            <div className={styles.container}>
                <h1>Formation non trouvée</h1>
                <p>Cette formation n'existe pas ou a été supprimée.</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{formation.title}</h1>
                <p className={styles.description}>{formation.description}</p>
            </div>

            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <div className={styles.imagePlaceholder}>
                        Image de la formation
                    </div>
                </div>

                <div className={styles.details}>
                    <h2>Détails</h2>
                    <div className={styles.technologies}>
                        {formation.details.map((detail, index) => (
                            <span key={index} className={styles.tech}>
                                {detail}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


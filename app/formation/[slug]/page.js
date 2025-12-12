import styles from './page.module.css'
import formationsData from '@/data/formations.json'
import Tag from '@/components/Tag/Tag'
import Image from 'next/image'

export async function generateMetadata({ params }) {
    const { slug } = await params
    const formation = formationsData.find(p => p.slug === slug)

    if (!formation) {
        return {
            title: 'Formation non trouvée',
        }
    }

    return {
        title: `${formation.title} | Portfolio`,
        description: formation.description,
        openGraph: {
            title: formation.title,
            description: formation.description,
            images: [formation.image],
        },
    }
}

export default async function FormationDetail({ params }) {
    const { slug } = await params
    const formation = formationsData.find((formation) => formation.slug === slug)

    // Si la formation n'existe pas, afficher un message
    if (!formation) {
        return (
            <div className="container">
                <h1>Formation non trouvée</h1>
                <p>Cette formation n&apos;existe pas ou a été supprimée.</p>
            </div>
        )
    }

    return (
        <div className="container">
            <div className={styles.header}>
                <h1 className="title">{formation.title}</h1>
                <p className="description">{formation.description}</p>
            </div>

            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={formation.image}
                        alt={formation.title}
                        width={1200}
                        height={400}
                    />
                </div>

                <div className={styles.details}>
                    <h2>Détails</h2>
                    <div className={styles.technologies}>
                        {formation.tags.map((tag, index) => (
                            <Tag key={index} isDark={true}>{tag}</Tag>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Cette fonction génère toutes les pages statiques au build
export function generateStaticParams() {
    return formationsData.map((formation) => ({
        slug: formation.slug,
    }))
}


import Link from 'next/link'
import styles from './page.module.css'

export default function Projects() {
    const projects = [
        { slug: 'portfolio', title: 'Portfolio Personnel', description: 'Site web moderne construit avec Next.js', tags: ['Next.js', 'React', 'CSS Modules'] },
        { slug: 'ecommerce', title: 'App E-commerce', description: 'Application de vente en ligne avec panier', tags: ['React', 'Node.js', 'MongoDB'] },
        { slug: 'blog', title: 'Blog Technique', description: 'Blog personnel sur le développement web', tags: ['Next.js', 'Markdown', 'SEO'] }
    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Mes Projets</h1>
            <p className={styles.description}>
                Découvrez les projets sur lesquels j'ai travaillé
            </p>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        key={project.slug}
                        className={styles.card}
                    >
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                        <span className={styles.viewMore}>Voir le projet →</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

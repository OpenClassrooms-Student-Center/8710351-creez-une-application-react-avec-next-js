
import styles from './page.module.css'
import Card from '@/components/Card/Card'

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
                Découvrez les projets sur lesquels j&apos;ai travaillé
            </p>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <Card key={index} data={project} />
                ))}
            </div>
        </div>
    )
}

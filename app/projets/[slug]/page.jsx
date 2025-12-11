import Link from 'next/link'
import { notFound } from 'next/navigation'
import Tag from '@/components/Tag/Tag'
import styles from './page.module.css'
import projectsData from '@/data/projects.json'


export default async function ProjectDetail({ params }) {
    const { slug } = await params
    
    // Trouver le projet correspondant au slug
    const project = projectsData.find(p => p.slug === slug)

    // Si le projet n'existe pas, afficher la page 404
    if (!project) {
        notFound()
    }

    return (
        <div className="container">
            <Link href="/projets" className={styles.backLink}>
                ← Retour aux projets
            </Link>

            <article>
                <h1 className="title">{project.title}</h1>
                <div className={styles.imageWrapper}>
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className={styles.image}
                    />
                </div>
                <div className={styles.tagsContainer}>
                    {project.tags.map((tech, index) => (
                        <Tag isDark={true} key={index}>{tech}</Tag>
                    ))}
                </div>
                <div className="description">
                    <h2>À propos du projet</h2>
                    <p>{project.longDescription}</p>
                </div>
                <div className={styles.links}>
                    {project.github && (
                        <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkButton}
                        >
                            Voir sur GitHub →
                        </a>
                    )}
                    {project.demo && (
                        <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkButton}
                        >
                            Voir la démo →
                        </a>
                    )}
                </div>
            </article>
        </div>
    )
}

// Cette fonction génère toutes les pages statiques au build
export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }))
}


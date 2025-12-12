import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Tag from '@/components/Tag/Tag'
import styles from './page.module.css'
import projectsData from '@/data/projects.json'

export async function generateMetadata({ params }) {
    const { slug } = await params
    const project = projectsData.find(p => p.slug === slug)

    if (!project) {
        return {
            title: 'Projet non trouvé',
        }
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.longDescription,
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            images: [project.image],
        },
    }
}



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
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        className={styles.image}
                        width={800}
                        height={500}
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


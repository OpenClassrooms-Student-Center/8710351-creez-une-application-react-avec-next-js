import Link from "next/link"
import styles from "./Card.module.css"
import Tag from "../Tag/Tag"

export default function Card({data ,type}){

    const link = type === "formation" ? `/formation/${data.slug}` : `/projets/${data.slug}`
    return (
        <Link 
            href={link}
            key={data.id}
            className={styles.card}
        >
            {data.image && (
                <div className={styles.imageWrapper}>
                    <img 
                        src={data.image} 
                        alt={data.title}
                        className={styles.image}
                    />
                </div>
            )}
            <div className={styles.content}>
                <h2>{data.title}</h2>
                <p>{data.shortDescription}</p>
                <div className={styles.tags}>
                    {data.tags.map((tech, index) => (
                        <Tag key={index} isDark={true}>{tech}</Tag>
                    ))}
                </div>
                <span className={styles.viewMore}>Voir le projet →</span>
            </div>
        </Link>
    )
}

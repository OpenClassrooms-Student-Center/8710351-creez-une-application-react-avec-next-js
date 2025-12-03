import styles from './page.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>À propos de moi</h1>

            <div className={styles.content}>
                <div className={styles.bio}>
                    <h2>Qui suis-je ?</h2>
                    <p>
                        Développeur web passionné avec 3 ans d'expérience dans la création
                        d'applications modernes et performantes. Spécialisé dans l'écosystème
                        React et Next.js.
                    </p>
                    <p>
                        J'aime transformer des idées en produits concrets qui résolvent
                        de vrais problèmes utilisateurs.
                    </p>
                </div>

                <div className={styles.skills}>
                    <h2>Compétences</h2>
                    <div className={styles.skillGrid}>
                        <div className={styles.skillCategory}>
                            <h3>Frontend</h3>
                            <ul>
                                <li>React & Next.js</li>
                                <li>JavaScript ES6+</li>
                                <li>HTML5 & CSS3</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>

                        <div className={styles.skillCategory}>
                            <h3>Backend</h3>
                            <ul>
                                <li>Node.js & Express</li>
                                <li>API REST</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>

                        <div className={styles.skillCategory}>
                            <h3>Outils</h3>
                            <ul>
                                <li>Git & GitHub</li>
                                <li>VS Code</li>
                                <li>Figma</li>
                                <li>Postman</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


import Link from 'next/link'
import styles from './page.module.css'
import Card from '@/components/Card/Card'

export default function Formations() {
    const formations = [
        { slug: 'integrateur-web', title: 'Intégrateur Web', description: 'Formation en Intégration Web', tags: ['Bac +2', '9 mois'] },
        { slug: 'testeur-logiciel', title: 'Testeur Logiciel', description: 'Formation en Test Logiciel', tags: ['Bac +2', '9 mois'] },
        { slug: 'developpeur-low-code', title: 'Développeur Low-Code', description: 'Formation en Développement Low-Code', tags: ['Bac +2', '6 mois'] }
    ]

    return (
        <div className="container">
            <h1 className="title">Mes Formations</h1>
            <p className="description">
                Découvrez les parcours diplômants d&apos;OpenClassrooms
            </p>

            <div className="grid">
                {formations.map((formation) => (
                    <Card key={formation.slug} data={formation} />
                ))}
            </div>
        </div>
    )
}

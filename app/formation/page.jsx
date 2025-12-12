import formationsData from '@/data/formations.json'
import Card from '@/components/Card/Card'

export const metadata = {
  title: 'Mes Formations | Portfolio',
  description: 'Découvrez mes formations de développement web : applications React, sites Next.js et plus encore.',
}

export default function Formations() {
    

    return (
        <div className="container">
            <h1 className="title">Mes Formations</h1>
            <p className="description">
                Découvrez les parcours diplômants d&apos;OpenClassrooms
            </p>

            <div className="grid">
                {formationsData.map((formation) => (
                    <Card key={formation.id} data={formation} type="formation" />
                ))}
            </div>
        </div>
    )
}

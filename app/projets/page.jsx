import projectsData from '@/data/projects.json'
import Card from '@/components/Card/Card'

export const metadata = {
  title: 'Mes Projets | Portfolio',
  description: 'Découvrez mes projets de développement web : applications React, sites Next.js et plus encore.',
}


export default function Projects() {
    return (
        <div className="container">
            <h1 className="title">Mes Projets</h1>
            <p className="description">
                Découvrez les projets sur lesquels j&apos;ai travaillé
            </p>

            <div className="grid">
                {projectsData.map((project) => (
                   <Card key={project.id} data={project} />
                ))}
            </div>
        </div>
    )
}
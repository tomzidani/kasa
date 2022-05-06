import { Accordion } from "@components/content"
import { useEffect } from "react"

import aboutBanner from "@assets/img/about-banner.png"

const About = () => {
  useEffect(() => {
    document.title = "Kasa – À propos"
  }, [])

  return (
    <main className="app-about">
      <div className="about__wrapper">
        <section className="about__banner">
          <img src={aboutBanner} className="banner__image" alt="Paysage forêstier" />
        </section>

        <section className="about__content">
          <Accordion title="Fiabilité" className="about__accordion">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations
              sont régulièrement vérifiées par nos équipes.
            </p>
          </Accordion>

          <Accordion title="Respect" className="about__accordion">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </Accordion>

          <Accordion title="Service" className="about__accordion">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations
              sont régulièrement vérifiées par nos équipes.
            </p>
          </Accordion>

          <Accordion title="Sécurité" className="about__accordion">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
              les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </Accordion>
        </section>
      </div>
    </main>
  )
}

export default About

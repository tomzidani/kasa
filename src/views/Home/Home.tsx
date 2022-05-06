import { Key, useEffect, useState } from "react"
import { LodgingCard } from "@components/cards"
import { getLodgings } from "@utils/helpers/data.helpers"
import { isEmpty } from "@utils/helpers/validation.helpers"
import { LodgingType } from "@utils/helpers/types.helpers"

import homeBanner from "@assets/img/home-banner.png"

const Home = () => {
  const [lodgings, setLodgings] = useState<any>([])

  if (isEmpty(lodgings)) setLodgings(getLodgings())

  useEffect(() => {
    document.title = "Kasa – Location d'appartements entre particuliers"
  }, [])

  return (
    <main className="app-home">
      <div className="home__wrapper">
        <section className="home__banner">
          <img src={homeBanner} className="banner__image" alt="Paysage forêstier" />
          <h2 className="banner__title">Chez vous, partout et ailleurs</h2>
        </section>

        <section className="home__lodgings">
          <div className="lodging__list">
            {lodgings.map((l: LodgingType, k: Key) => (
              <LodgingCard lodging={l} key={k} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home

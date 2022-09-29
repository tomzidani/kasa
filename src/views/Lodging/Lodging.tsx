import { Slider } from "@components/content"
import { getLodging } from "@utils/helpers/data.helpers"
import { LodgingType } from "@utils/helpers/types.helpers"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LodgingDetails from "./LodgingDetails"
import LodgingInformations from "./LodgingInformations"
import { NotFound } from ".."

const Lodging = () => {
  const { lodgingUrl } = useParams<string>()
  const lodgingId = lodgingUrl!.split("--")[1]

  const [lodging, setLodging] = useState<LodgingType | null>(null)

  useEffect(() => {
    setLodging(getLodging(lodgingId))
    document.title = lodging ? `Kasa — ${lodging.title}` : `Kasa — 404`
  }, [lodging, lodgingUrl, lodgingId])

  return lodging ? (
    <main className="app-lodging">
      <div className="lodging__wrapper">
        <Slider pictures={lodging.pictures} title={lodging.title} />
        <LodgingInformations lodging={lodging} />
        <LodgingDetails description={lodging.description} equipments={lodging.equipments} />
      </div>
    </main>
  ) : (
    <NotFound />
  )
}

export default Lodging

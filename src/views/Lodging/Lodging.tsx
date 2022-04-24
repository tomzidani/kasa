import { Slider } from "@components/content"
import { getLodging } from "@utils/helpers/data.helpers"
import { LodgingType } from "@utils/helpers/types.helpers"
import { useState } from "react"
import { useParams } from "react-router-dom"
import LodgingDetails from "./LodgingDetails"

import LodgingInformations from "./LodgingInformations"

const Lodging = () => {
  const { lodgingId } = useParams<string>()
  const [lodging, setLodging] = useState<LodgingType | undefined>(undefined)

  if (!lodging) setLodging(getLodging(lodgingId))

  console.log(lodging)

  return (
    <main className="app-lodging">
      <div className="lodging__wrapper">
        {lodging && (
          <>
            <Slider pictures={lodging.pictures} title={lodging.title} />
            <LodgingInformations lodging={lodging} />
            <LodgingDetails description={lodging.description} equipments={lodging.equipments} />
          </>
        )}
      </div>
    </main>
  )
}

export default Lodging

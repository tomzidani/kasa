import { LodgingType } from "./types.helpers"
import lodgingsJson from "@utils/provider/lodgings.json"

export const getLodgings = () => lodgingsJson

export const getLodging = (id: string | undefined): LodgingType | undefined => lodgingsJson.find((l) => l.id === id)

import { Accordion } from "@components/content"

interface LodgingDetailsInterface {
  description: string
  equipments: string[]
}

const LodgingDetails = ({ description, equipments }: LodgingDetailsInterface) => {
  return (
    <section className="lodging__details">
      <Accordion title="Description">
        <p>{description}</p>
      </Accordion>
      <Accordion title="Équipements">
        <ul>
          {equipments.map((equipment, k) => (
            <li key={k}>{equipment}</li>
          ))}
        </ul>
      </Accordion>
    </section>
  )
}

export default LodgingDetails

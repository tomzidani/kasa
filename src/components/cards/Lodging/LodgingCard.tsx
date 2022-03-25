import { Lodging } from "@utils/helpers/types.helpers"
import { Link } from "react-router-dom"

interface LodgingCardProps {
  lodging: Lodging
}

const LodgingCard = ({ lodging }: LodgingCardProps) => {
  const { title, cover, id } = lodging

  return (
    <Link to={`/lodging/${id}`} title={`Fiche logement: ${title}`} className="lodging">
      <div className="lodging__media">
        <img src={cover} className="lodging__image" alt="" />
        <div className="lodging__overlay"></div>

        <h3 className="lodging__title">{title}</h3>
      </div>
    </Link>
  )
}

export default LodgingCard

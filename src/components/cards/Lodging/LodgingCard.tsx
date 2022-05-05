import { slugify } from "@utils/helpers/format.helpers"
import { LodgingType } from "@utils/helpers/types.helpers"
import { Link } from "react-router-dom"

interface LodgingCardProps {
  lodging: LodgingType
}

const LodgingCard: React.FC<LodgingCardProps> = ({ lodging }) => {
  const { title, cover, id } = lodging
  const slug = slugify(title)

  return (
    <Link to={`/lodging/${slug}--${id}`} title={`Fiche logement: ${title}`} className="lodging">
      <div className="lodging__media">
        <img src={cover} className="lodging__image" alt="" />
        <div className="lodging__overlay"></div>

        <h3 className="lodging__title">{title}</h3>
      </div>
    </Link>
  )
}

export default LodgingCard

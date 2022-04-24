import { Icon, Tag } from "@components/content"
import { LodgingType } from "@utils/helpers/types.helpers"

interface LodgingInformationsInterface {
  lodging: LodgingType
}

const LodgingInformations = ({ lodging }: LodgingInformationsInterface) => {
  const displayRating = () => {
    return [...Array(5)].map((s, k) => {
      return <Icon.Star key={k} className={k < parseInt(lodging.rating) ? "active" : ""} />
    })
  }

  return (
    <section className="lodging__infos">
      <div className="infos__infos">
        <div>
          <h1 className="infos__title">{lodging.title}</h1>
          <h2 className="infos__location">{lodging.location}</h2>
        </div>
        <div className="infos__owner">
          <p className="owner__name">{lodging.host.name}</p>
          <div className="owner__picture">
            <img src={lodging.host.picture} className="owner__image" alt={lodging.host.name} />
          </div>
        </div>
      </div>
      <div className="infos__details">
        <div className="infos__tags">
          {lodging.tags.map((tag, key) => (
            <Tag key={key}>{tag}</Tag>
          ))}
        </div>
        <div className="infos__rating">{displayRating()}</div>
      </div>
    </section>
  )
}

export default LodgingInformations

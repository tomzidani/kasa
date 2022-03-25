import { useParams } from "react-router-dom"

const Lodging = () => {
  const { lodgingId } = useParams()

  return (
    <main className="app-lodging">
      <div className="lodging__wrapper">Fiche Logement n°: {lodgingId}</div>
    </main>
  )
}

export default Lodging

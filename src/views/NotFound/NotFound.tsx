import { useEffect } from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  useEffect(() => {
    document.title = "Kasa – 404"
  }, [])

  return (
    <main className="app-notfound">
      <div className="notfound__wrapper">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="notfound__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  )
}

export default NotFound

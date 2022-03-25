import { Link } from "react-router-dom"
import { Icon } from "@components/content"

const Header = () => {
  return (
    <header className="app-header">
      <div className="header__wrapper">
        <Icon.Logo fill="#FF6060" className="header__logo" />

        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

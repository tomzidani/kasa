import { Icon } from "@components/content"

const Header = () => {
  return (
    <header className="app-header">
      <div className="header__wrapper">
        <Icon.Logo fill="#FF6060" className="header__logo" />

        <nav className="header__nav">
          <ul>
            <li>Accueil</li>
            <li>À propos</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

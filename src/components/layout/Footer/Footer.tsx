import { Icon } from "@components/content"

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer__wrapper">
        <Icon.Logo fill="#fff" className="footer__logo" />
        <p className="footer__copyright">&copy; 2020 Kasa. Tout droits réservés</p>
      </div>
    </footer>
  )
}

export default Footer

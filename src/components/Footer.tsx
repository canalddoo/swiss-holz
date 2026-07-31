import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Colonne 1 : Brand, description & Réseaux sociaux */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <Image
              src="/img/logo.png"
              alt="Swiss Holz"
              width={130}
              height={45}
            />
          </div>
          <p className="footer-description">
            Carburants suisses de la plus haute qualité, issus directement de
            forêts gérées durablement.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
           
          </div>
        </div>

        {/* Colonne 2 : Produits */}
        <div className="footer-col">
          <h4 className="footer-heading">PRODUITS</h4>
          <ul className="footer-links-list">
            <li><Link href="/bois-de-chauffage">bois de chauffage</Link></li>
            <li><Link href="/granules">Granulés</Link></li>
            <li><Link href="/briquettes">Briquettes</Link></li>
            <li><Link href="/bois-presse">Bois pressé</Link></li>
            <li><Link href="/fours">Fours</Link></li>
          </ul>
        </div>

        {/* Colonne 3 : Information */}
        <div className="footer-col">
          <h4 className="footer-heading">INFORMATION</h4>
          <ul className="footer-links-list">
            <li><Link href="/livraison">Livraison</Link></li>
            <li><Link href="/paiement">paiement</Link></li>
            <li><Link href="/termes-et-conditions">Termes et conditions</Link></li>
          </ul>
        </div>

        {/* Colonne 4 : Soutien */}
        <div className="footer-col">
          <h4 className="footer-heading">SOUTIEN</h4>
          <ul className="footer-links-list">
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">contact</Link></li>
          </ul>
        </div>

        {/* Bloc Contact (Positionné sous la première colonne en Desktop) */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">CONTACT</h4>
          <ul className="contact-info-list">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Holzweg 12, 3000 Bern</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+41310000000">+41 31 000 00 00</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:info@swissholz.ch">info@swissholz.ch</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barre du bas : Copyright & Moyens de paiement */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © 2026 SwissHolz. Tous droits réservés.
          </p>
          <div className="payment-icons">
            <span className="payment-card">VISA</span>
            <span className="payment-card">
              <i className="fa-brands fa-cc-mastercard"></i>
            </span>
            <span className="payment-card amex">AM EX</span>
            <span className="payment-card paypal">PayPal</span>
            <span className="payment-card applepay">
              <i className="fa-brands fa-apple-pay"></i> Pay
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
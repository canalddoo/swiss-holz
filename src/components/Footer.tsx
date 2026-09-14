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
            Schweizer Brennstoffe von höchster Qualität, direkt aus nachhaltig
            bewirtschafteten Wäldern.
          </p>
          {/* <div className="social-links">
            <a href="#" aria-label="Facebook" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div> */}
        </div>

        {/* Colonne 2 : Produits */}
       
        {/* <div className="footer-col">
          <h4 className="footer-heading">PRODUKTE</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="#">Brennholz</Link>
            </li>
            <li>
              <Link href="#">Holzpellets</Link>
            </li>
            <li>
              <Link href="#">Holzbriketts</Link>
            </li>
            <li>
              <Link href="#">Pressholz</Link>
            </li>
            <li>
              <Link href="#">Kaminöfen</Link>
            </li>
          </ul>
        </div> */}

        {/* Colonne 3 : Information */}
        <div className="footer-col">
          <h4 className="footer-heading">INFORMATIONEN</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="#">Lieferung</Link>
            </li>
            <li>
              <Link href="#">Zahlung</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutzerklärung</Link>
            </li>
            <li>
              <Link href="/agb">
                Allgemeine Geschäftsbedingungen
              </Link>
            </li>
          </ul>
        </div>

        {/* Colonne 4 : Support */}
        <div className="footer-col">
          <h4 className="footer-heading">SUPPORT</h4>
          <ul className="footer-links-list">
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>

        {/* Colonne 5 : Contact */}
        <div className="footer-col contact-col">
          <h4 className="footer-heading">KONTAKT</h4>
          <ul className="contact-info-list">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>Holzweg 12, 3000 Bern</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+41767529493">+41767529493</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:info@swisholz.ch">info@swisholz.ch</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Barre du bas : Copyright & Moyens de paiement */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © 2026 SwissHolz. Alle Rechte vorbehalten.
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
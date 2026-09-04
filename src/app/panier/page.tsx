"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, clearCart } =
    useCart();

  const [showBankModal, setShowBankModal] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const shippingCost = subtotal > 150 || cart.length === 0 ? 0 : 15.0;
  const grandTotal = subtotal + shippingCost;

  const bankDetails = {
    name: "Edonita Berisha",
    iban: "CH0808490921141952718",
    bic: "8490",
    address: "Via Piodella 18 Muzzano 6933",
  };

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <>
      <main className="cart-page">
        <div className="cart-container">
          <h1 className="cart-page-title">Mein Warenkorb</h1>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <i className="fa-solid fa-basket-shopping empty-icon"></i>
              <h2>Ihr Warenkorb ist leer</h2>
              <p>Entdecken Sie unsere Produkte und treffen Sie Ihre Auswahl.</p>
              <Link href="/" className="btn-primary-cart">
                Zurück zum Shop
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              {/* Liste des articles */}
              <div className="cart-items-section">
                <div className="cart-items-header">
                  <span>Produkt</span>
                  <span>Preis</span>
                  <span>Menge</span>
                  <span>Gesamt</span>
                  <span></span>
                </div>

                {cart.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    {/* Produit */}
                    <div className="cart-item-info">
                      <div className="cart-item-image">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <p className="cart-item-category">{item.category}</p>
                        <h4 className="cart-item-title">{item.title}</h4>
                      </div>
                    </div>

                    {/* Prix Unitaire */}
                    <div className="cart-item-price">
                      CHF {item.price.toFixed(2).replace(".", ",")}
                    </div>

                    {/* Quantité */}
                    <div className="cart-item-quantity">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* Total Unitaire */}
                    <div className="cart-item-total">
                      CHF {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                    </div>

                    {/* Supprimer */}
                    <button
                      className="btn-remove"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Löschen"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ))}

                <div className="cart-actions-bottom">
                  <button className="btn-clear" onClick={clearCart}>
                    Warenkorb leeren
                  </button>
                  <Link href="/" className="btn-continue">
                    <i className="fa-solid fa-arrow-left"></i> Weiter einkaufen
                  </Link>
                </div>
              </div>

              {/* Récapitulatif Commande */}
              <div className="cart-summary-card">
                <h3>Bestellübersicht</h3>

                <div className="summary-row">
                  <span>Zwischensumme</span>
                  <span>CHF {subtotal.toFixed(2).replace(".", ",")}</span>
                </div>

                <div className="summary-row">
                  <span>Lieferung</span>
                  <span>
                    {shippingCost === 0
                      ? "Kostenlos"
                      : `CHF ${shippingCost.toFixed(2).replace(".", ",")}`}
                  </span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row total">
                  <span>Gesamtsumme (inkl. MwSt.)</span>
                  <span>CHF {grandTotal.toFixed(2).replace(".", ",")}</span>
                </div>

                <button
                  className="btn-checkout"
                  onClick={() => setShowBankModal(true)}
                >
                  Zur Kasse
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* MODALE D'INFORMATIONS BANCAIRES */}
      {showBankModal && (
        <div className="modal-overlay" onClick={() => setShowBankModal(false)}>
          <div
            className="bank-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button
              className="modal-close-btn"
              onClick={() => setShowBankModal(false)}
              aria-label="Schließen"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="modal-header">
              <div className="icon-wrapper">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <h2>Bankverbindung für die Überweisung</h2>
              <p>
                Bitte überweisen Sie den Gesamtbetrag von{" "}
                <strong>CHF {grandTotal.toFixed(2).replace(".", ",")}</strong> an
                die folgende Bankverbindung:
              </p>
            </div>

            <div className="bank-details-list">
              <div className="bank-detail-item">
                <span className="detail-label">Kontoinhaber:</span>
                <div className="detail-value-wrap">
                  <strong className="detail-value">{bankDetails.name}</strong>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(bankDetails.name, "name")}
                  >
                    <i className={copiedField === "name" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                  </button>
                </div>
              </div>

              <div className="bank-detail-item">
                <span className="detail-label">IBAN:</span>
                <div className="detail-value-wrap">
                  <strong className="detail-value highlight">{bankDetails.iban}</strong>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(bankDetails.iban, "iban")}
                  >
                    <i className={copiedField === "iban" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                  </button>
                </div>
              </div>

              <div className="bank-detail-item">
                <span className="detail-label">BIC / SWIFT:</span>
                <div className="detail-value-wrap">
                  <strong className="detail-value">{bankDetails.bic}</strong>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(bankDetails.bic, "bic")}
                  >
                    <i className={copiedField === "bic" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                  </button>
                </div>
              </div>

              <div className="bank-detail-item">
                <span className="detail-label">Adresse:</span>
                <div className="detail-value-wrap">
                  <span className="detail-value">{bankDetails.address}</span>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(bankDetails.address, "address")}
                  >
                    <i className={copiedField === "address" ? "fa-solid fa-check" : "fa-regular fa-copy"}></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-info-box">
              <i className="fa-solid fa-circle-info"></i>
              <p>
                Geben Sie bei der Überweisung bitte Ihre Bestellnummer oder Ihren Namen als Verwendungszweck an.
              </p>
            </div>

            <div className="modal-footer">
              <button
                className="btn-modal-close"
                onClick={() => setShowBankModal(false)}
              >
                Verstanden & Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
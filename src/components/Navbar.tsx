"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<"DE" | "FR">("FR");

  const { totalItems } = useCart();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "À propos de nous", path: "/a-propos" },
    { name: "bois de chauffage", path: "/bois-de-chauffage" },
    { name: "Granulés", path: "/granules" },
    { name: "Briquettes", path: "/briquettes" },
    { name: "Bois pressé", path: "/bois-presse" },
    { name: "Fours", path: "/fours" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <Image
            src="/img/logo.png"
            alt="Swiss Holz"
            width={120}
            height={45}
            priority
          />
        </Link>

        {/* Navigation Bureau */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-link ${isActive(link.path) ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions à droite */}
        <div className="navbar-actions">
          {/* Switcher de langue */}
          <div className="lang-toggle">
            <button
              className={`lang-btn ${lang === "DE" ? "active" : ""}`}
              onClick={() => setLang("DE")}
            >
              DE
            </button>
            <button
              className={`lang-btn ${lang === "FR" ? "active" : ""}`}
              onClick={() => setLang("FR")}
            >
              FR
            </button>
          </div>

          {/* Recherche */}
          <button className="icon-btn search-btn" aria-label="Rechercher">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {/* Panier avec badge */}
          <Link href="/panier" className="icon-btn cart-btn" aria-label="Panier">
            <i className="fa-solid fa-cart-shopping"></i>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>

          {/* Burger Button (Mobile) */}
          <button
            className="menu-burger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <Image src="/img/logo.png" alt="Swiss Holz" width={100} height={35} />
              <div className="mobile-menu-actions">
                <Link
                  href="/panier"
                  className="icon-btn cart-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  {totalItems > 0 && (
                    <span className="cart-badge">{totalItems}</span>
                  )}
                </Link>
                <button
                  className="close-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`mobile-nav-link ${
                    isActive(link.path) ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mobile-lang-toggle">
              <button
                className={`lang-btn-large ${lang === "DE" ? "active" : ""}`}
                onClick={() => setLang("DE")}
              >
                DE
              </button>
              <button
                className={`lang-btn-large ${lang === "FR" ? "active" : ""}`}
                onClick={() => setLang("FR")}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
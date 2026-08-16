"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsData, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ShopGrid() {
  const { addToCart } = useCart();

  // Pagination und Anzeige-Steuerung
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const [sortOption, setSortOption] = useState<string>("standard");

  // Filter-Zustände
  const [showFilterPanel, setShowFilterPanel] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [minRating, setMinRating] = useState<number>(0);

  // Eindeutige Kategorienliste aus den Daten extrahieren
  const categories = useMemo(() => {
    const cats = new Set(productsData.map((p) => p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  // Anwendung von Filtern und Sortierung
  const filteredProducts = useMemo(() => {
    let result = [...productsData];

    // 1. Kategorie-Filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // 2. Maximalpreis-Filter
    result = result.filter((p) => p.price <= maxPrice);

    // 3. Mindestbewertung-Filter
    if (minRating > 0) {
      result = result.filter((p) => (p.rating || 0) >= minRating);
    }

    // 4. Produktsortierung
    if (sortOption === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating-desc") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return result;
  }, [selectedCategory, maxPrice, minRating, sortOption]);

  // Angezeigte Produkte basierend auf Seitengrösse
  const displayedProducts = filteredProducts.slice(0, itemsPerPage);

  // Filter zurücksetzen
  const resetFilters = () => {
    setSelectedCategory("all");
    setMaxPrice(2000);
    setMinRating(0);
    setSortOption("standard");
  };

  return (
    <section className="shop-section">
      <div className="shop-container">
        {/* WERKZEUGBAR UND FILTER */}
        <div className="shop-toolbar">
          <div className="shop-breadcrumb">
            <Link href="/">Startseite</Link>
            <span className="separator">/</span>
            <span className="current">Shop</span>
          </div>

          <div className="shop-controls">
            <div className="items-per-page">
              <span>Anzeigen:</span>
              {[24, 36, 45, 55].map((num) => (
                <button
                  key={num}
                  onClick={() => setItemsPerPage(num)}
                  className={itemsPerPage === num ? "active" : ""}
                >
                  {num}
                </button>
              ))}
            </div>

            <div className="sort-select-wrapper">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="sort-select"
              >
                <option value="standard">Standard-Sortierung</option>
                <option value="price-asc">Preis: aufsteigend</option>
                <option value="price-desc">Preis: absteigend</option>
                <option value="rating-desc">Beste Bewertungen</option>
              </select>
            </div>

            <button
              className={`filter-btn ${showFilterPanel ? "active" : ""}`}
              onClick={() => setShowFilterPanel(!showFilterPanel)}
            >
              <i className="fa-solid fa-sliders"></i>
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* FILTER-PANEL */}
        {showFilterPanel && (
          <div className="filter-panel">
            <div className="filter-group">
              <label className="filter-label">Kategorie:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">Alle Kategorien</option>
                {categories
                  .filter((cat) => cat !== "all")
                  .map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">
                Max. Preis: <strong>€ {maxPrice.toFixed(2)}</strong>
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="filter-range"
              />
            </div>

            <div className="filter-group">
              <label className="filter-label">Mindestbewertung:</label>
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="filter-select"
              >
                <option value={0}>Alle Bewertungen</option>
                <option value={4}>4 Sterne und mehr</option>
                <option value={4.5}>4.5 Sterne und mehr</option>
                <option value={5}>5 Sterne</option>
              </select>
            </div>

            <button className="btn-reset-filters" onClick={resetFilters}>
              Filter zurücksetzen
            </button>
          </div>
        )}

        {/* ERGEBNISZÄHLER */}
        <div className="results-count">
          Anzeige von <strong>{displayedProducts.length}</strong> von{" "}
          <strong>{filteredProducts.length}</strong> Produkt(en)
        </div>

        {/* PRODUKT-RASTER */}
        <div className="products-grid">
          {displayedProducts.map((product: Product) => (
            <div key={product.id} className="product-card">
              {/* Bild & Rabatt-Badge */}
              <div className="product-image-wrap">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="product-image"
                />
                {product.discount && (
                  <span className="badge-discount">{product.discount}</span>
                )}
              </div>

              {/* Produktdetails */}
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>

                {/* Bewertungen */}
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${
                          i < Math.floor(product.rating || 0) ? "active" : ""
                        }`}
                      ></i>
                    ))}
                  </div>
                  {product.reviewsCount !== undefined && (
                    <span className="reviews-count">({product.reviewsCount})</span>
                  )}
                </div>

                {/* Preis */}
                <div className="product-price-box">
                  {product.oldPrice && (
                    <span className="old-price">
                      € {product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="current-price">
                    € {product.price.toFixed(2)}
                  </span>
                </div>

                {/* In den Warenkorb Button */}
                <button
                  className="btn-add-cart"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      title: product.title,
                      category: product.category,
                      price: product.price,
                      oldPrice: product.oldPrice,
                      image: product.image,
                      quantity: 1,
                    })
                  }
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  In den Warenkorb
                </button>
              </div>
            </div>
          ))}
        </div>

        {displayedProducts.length === 0 && (
          <div className="no-products-found">
            <p>Keine Produkte entsprechen Ihren Suchkriterien.</p>
            <button className="btn-reset-filters" onClick={resetFilters}>
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
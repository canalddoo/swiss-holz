"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  discount?: string;
  category: string;
  title: string;
  rating: number;
  reviewsCount: number;
  oldPrice?: number;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: "bestseller-esche-25cm",
    discount: "-24 %",
    category: "Esche – Brennholz",
    title: "Palette gespaltenes und kammgetrocknetes Eschenbrennholz, 25 cm",
    rating: 5,
    reviewsCount: 214,
    oldPrice: 439.00,
    price: 307.30,
    image: "/img/prod/hele-pallet-essenhout-schuin-transparant-light-2-2-1.jpg",
  },
  {
    id: "bestseller-eiche-25cm",
    discount: "-21 %",
    category: "Eiche – Brennholz",
    title: "Palette gespaltenes und kammgetrocknetes Eichenbrennholz, 25 cm",
    rating: 5,
    reviewsCount: 431,
    oldPrice: 429.00,
    price: 300.30,
    image: "/img/prod/hele-pallet-eikenhout-schuin-transparant-light-1.jpg",
  },
  {
    id: "bestseller-esche-halb",
    category: "Esche – Brennholz",
    title: "Halbe Palette gespaltenes Brennholz",
    rating: 4.5,
    reviewsCount: 279,
    price: 195.30,
    image: "/img/prod/halve-pallet-berken-essen-mix-schuin-transparant-light.jpg",
  },
  {
    id: "bestseller-haagbuche-25cm",
    discount: "-22 %",
    category: "Hainbuche – Brennholz",
    title: "Palette gespaltenes und kammgetrocknetes Brennholz, 25 cm",
    rating: 4,
    reviewsCount: 58,
    oldPrice: 449.00,
    price: 314.30,
    image: "/img/prod/hele-pallet-haagbeuk-schuin-transparant-light_2-1.jpg",
  },
  {
    id: "bestseller-buche-25cm",
    discount: "-18 %",
    category: "Buche – Brennholz",
    title: "Palette gespaltenes und kammgetrocknetes Buchenbrennholz, 25 cm",
    rating: 5,
    reviewsCount: 312,
    oldPrice: 459.00,
    price: 376.38,
    image: "/img/prod/hele-pallet-essenhout-schuin-transparant-light-2-2-1.jpg",
  },
  {
    id: "bestseller-holzpellets-15kg",
    discount: "-15 %",
    category: "Holzpellets",
    title: "ENplus A1 Premium Holzpellets – 66 Säcke à 15kg (990kg)",
    rating: 5,
    reviewsCount: 189,
    oldPrice: 499.00,
    price: 424.15,
    image: "/img/prod/hele-pallet-eikenhout-schuin-transparant-light-1.jpg",
  },
  {
    id: "bestseller-holzbriketts-ruf",
    discount: "-20 %",
    category: "Holzbriketts",
    title: "RUF Holzbriketts Hartholz – Palette 960 kg",
    rating: 4.5,
    reviewsCount: 145,
    oldPrice: 420.00,
    price: 336.00,
    image: "/img/prod/halve-pallet-berken-essen-mix-schuin-transparant-light.jpg",
  },
  {
    id: "bestseller-birke-30cm",
    discount: "-25 %",
    category: "Birke – Brennholz",
    title: "Palette gespaltenes Birkenbrennholz, 30 cm",
    rating: 4.5,
    reviewsCount: 98,
    oldPrice: 399.00,
    price: 299.25,
    image: "/img/prod/hele-pallet-haagbeuk-schuin-transparant-light_2-1.jpg",
  },
  {
    id: "bestseller-pini-kay-briketts",
    discount: "-12 %",
    category: "Holzbriketts",
    title: "Pini-Kay Hartholzbriketts mit Zugloch – Palette 960 kg",
    rating: 5,
    reviewsCount: 87,
    oldPrice: 460.00,
    price: 404.80,
    image: "/img/prod/hele-pallet-essenhout-schuin-transparant-light-2-2-1.jpg",
  },
  {
    id: "bestseller-mischholz-25cm",
    category: "Mischholz",
    title: "Palette Laubholz-Mix kammgetrocknet, 25 cm",
    rating: 4,
    reviewsCount: 164,
    price: 285.00,
    image: "/img/prod/hele-pallet-eikenhout-schuin-transparant-light-1.jpg",
  },
];

export default function BestSellers() {
  const { addToCart } = useCart();

  return (
    <section className="bestsellers-section">
      <div className="bestsellers-container">
        {/* En-tête */}
        <div className="bestsellers-header">
          <h2 className="bestsellers-title">Bestseller</h2>
          <p className="bestsellers-subtitle">
            Sorgfältig ausgewählt, geprüft und sofort lieferbar.
          </p>
          <div className="bestsellers-line"></div>
        </div>

        {/* Grille de produits */}
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {/* Image & Badge de réduction */}
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

              {/* Détails du produit */}
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>

                {/* Avis */}
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${
                          i < Math.floor(product.rating) ? "active" : ""
                        }`}
                      ></i>
                    ))}
                  </div>
                  <span className="reviews-count">({product.reviewsCount})</span>
                </div>

               {/* Prix */}
<div className="product-price-box">
  {product.oldPrice && (
    <span className="old-price">
      CHF {product.oldPrice.toFixed(2).replace(".", ",")}
    </span>
  )}
  <span className="current-price">
    CHF {product.price.toFixed(2).replace(".", ",")}
  </span>
</div>

                {/* Bouton d'ajout */}
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
                      // quantity: 1,
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

        {/* Bouton "Voir tout" en bas */}
        <div className="bestsellers-footer" style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/boutique" className="btn-view-all">
            Alle Produkte anzeigen <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
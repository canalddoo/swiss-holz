"use client";

import Image from "next/image";
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
    id: "bois-dur-hetre-1m3",
    discount: "-24 %",
    category: "BOIS DE CHAUFFAGE",
    title: "Bois dur de hêtre 1 mètre cube",
    rating: 5,
    reviewsCount: 214,
    oldPrice: 249.0,
    price: 189.0,
    image: "/img/cat-bois.jpg",
  },
  {
    id: "granules-enplus-a1-15kg",
    discount: "-21 %",
    category: "GRANULÉS",
    title: "Granulés ENplus A1 – 15 kg",
    rating: 5,
    reviewsCount: 431,
    oldPrice: 12.5,
    price: 9.9,
    image: "/img/cat-granules.jpg",
  },
  {
    id: "briquettes-bois-dur-10kg",
    category: "BRIQUETTES",
    title: "Briquettes de bois dur 10 kg",
    rating: 4.5,
    reviewsCount: 96,
    price: 14.5,
    image: "/img/cat-briquettes.jpg",
  },
  {
    id: "bois-resineux-presse-20kg",
    discount: "-22 %",
    category: "BOIS PRESSÉ",
    title: "Bois résineux pressé 20 kg",
    rating: 4,
    reviewsCount: 58,
    oldPrice: 27.9,
    price: 21.9,
    image: "/img/cat-presse.jpg",
  },
];

export default function BestSellers() {
  const { addToCart } = useCart();

  return (
    <section className="bestsellers-section">
      <div className="bestsellers-container">
        {/* En-tête */}
        <div className="bestsellers-header">
          <h2 className="bestsellers-title">best-seller</h2>
          <p className="bestsellers-subtitle">
            Soigneusement sélectionnés, testés et disponibles immédiatement.
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
                      {product.oldPrice.toFixed(2).replace(".", ",")} CHF
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
                    })
                  }
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
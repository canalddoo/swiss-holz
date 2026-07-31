"use client";

import { useState } from "react";

interface Testimonial {
  id: number;
  rating: number;
  quote: string;
  initials: string;
  name: string;
  city: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    quote:
      "« Les meilleures briquettes que j'aie jamais eues. Longue durée de combustion, peu de cendres. »",
    initials: "M",
    name: "Marco Bernasconi",
    city: "Lugano",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "« Bois sec, livraison ponctuelle, service impeccable. Je commande chaque année. »",
    initials: "UN",
    name: "Andrea Meier",
    city: "Zurich",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "« Les granulés brûlent très proprement. Le rapport qualité-prix est excellent. »",
    initials: "L",
    name: "Luc Rochat",
    city: "Lausanne",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "« Les conseils que j'ai reçus par téléphone étaient excellents. Mon nouveau four a été livré en parfait état. »",
    initials: "S",
    name: "Sandra Bühler",
    city: "Bern",
  },
];

export default function Testimonials() {
  const [activeDot, setActiveDot] = useState(2); // Le 3ème dot est actif par défaut comme sur les captures

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Titre centré */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">Ce que disent nos clients</h2>
        </div>

        {/* Grille des cartes */}
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* Étoiles d'évaluation */}
              <div className="testimonial-stars">
                {[...Array(item.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>

              {/* Texte du témoignage */}
              <p className="testimonial-quote">{item.quote}</p>

              {/* Auteur */}
              <div className="testimonial-author">
                <div className="author-avatar">{item.initials}</div>
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-city">{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots centrée */}
        <div className="testimonials-pagination">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`pagination-dot ${
                activeDot === index ? "active" : ""
              }`}
              onClick={() => setActiveDot(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
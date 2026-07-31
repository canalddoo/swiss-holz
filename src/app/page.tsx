import Link from "next/link";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      {/* 1. Hero Carousel */}
      <Hero />

      {/* 2. Grille de Catégories */}
      <Categories />

      {/* 3. Section Best-Sellers */}
      <BestSellers />

      {/* 5. Pourquoi SwissHolz */}
      <WhyUs />


       {/* 4. Bannière Promotionnelle (Offre d'hiver) */}
      <section className="promo-banner-section">
        <div className="promo-banner-container">
          <div className="promo-banner-content">
            {/* Badge -50% */}
            <div className="promo-badge">
              <i className="fa-solid fa-bolt"></i>
              <span>-50%</span>
            </div>

            {/* Titre */}
            <h2 className="promo-title">
              Profitez de nos offres avec des économies allant jusqu'à 50 %
            </h2>

            {/* Sous-titre */}
            <p className="promo-subtitle">
              Offre d'hiver – dans la limite des stocks disponibles.
            </p>
          </div>

          {/* Bouton CTA */}
          <Link href="/bois-de-chauffage" className="promo-btn">
            <span>Achetez maintenant</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}
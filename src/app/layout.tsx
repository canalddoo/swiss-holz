import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./layout.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

// Configuration SEO Avancée
export const metadata: Metadata = {
  title: {
    default: "Swiss Holz - Verkauf von Hochwertigem Brennholz & Holzpellets",
    template: "%s | Swiss Holz",
  },
  description:
    "Schweizer Brennstoffe von höchster Qualität. Kaufen Sie Trockenes Brennholz, Buchenholz und Premium Holzpellets direkt aus nachhaltig bewirtschafteten Wäldern.",
  keywords: [
    "Brennholz kaufen",
    "Holzpellets Schweiz",
    "Buchenholz",
    "Kaminholz",
    "Schweizer Brennholz",
    "Nachhaltiges Holz",
    "Swiss Holz",
  ],
  authors: [{ name: "Swiss Holz" }],
  creator: "Swiss Holz",
  publisher: "Swiss Holz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://swissholz.ch"), // Remplace par ton vrai domaine
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Swiss Holz - Hochwertiges Brennholz & Holzpellets",
    description:
      "Schweizer Brennstoffe von höchster Qualität, direkt aus nachhaltig bewirtschafteten Wäldern.",
    url: "https://swissholz.ch",
    siteName: "Swiss Holz",
    images: [
      {
        url: "/img/log.png",
        width: 800,
        height: 600,
        alt: "Swiss Holz Logo",
      },
    ],
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swiss Holz - Verkauf von Brennholz & Holzpellets",
    description:
      "Schweizer Brennstoffe von höchster Qualität, direkt aus nachhaltig bewirtschafteten Wäldern.",
    images: ["/img/log.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/log.png",
    shortcut: "/img/log.png",
    apple: "/img/log.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Récupération du pathname de la requête pour détecter l'admin côté serveur
  const headersList = await headers();
  const pathname = headersList.get("x-current-path") || headersList.get("next-url") || "";
  
  // Vérifie si l'URL commence par /admin
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <CartProvider>
          <div
            className="app-container"
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            {/* Masquer la Navbar sur les pages /admin */}
            {!isAdminRoute && <Navbar />}

            {/* Hauptinhalt */}
            <main className="main-content" style={{ flex: 1 }}>
              {children}
            </main>

            {/* Masquer le Footer sur les pages /admin */}
            {!isAdminRoute && <Footer />}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
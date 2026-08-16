import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Swiss Holz - Verkauf von Brennholz & Holzpellets",
  description:
    "Schweizer Brennstoffe von höchster Qualität, direkt aus nachhaltig bewirtschafteten Wäldern.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        <link rel="shortcut icon" href="/img/log.png" type="image/x-icon" />
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
            {/* Navigation Header */}
            <Navbar />

            {/* Hauptinhalt */}
            <main className="main-content" style={{ flex: 1 }}>
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
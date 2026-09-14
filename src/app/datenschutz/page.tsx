import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Swiss Holz. Informationen über die Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten.",
};

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <h1 className="legal-title">Datenschutzerklärung</h1>
          <p className="legal-subtitle">Stand: Januar 2014 | Swiss Holz</p>
        </header>

        <article className="legal-content">
          <section className="legal-section">
            <h2>1. Datenschutz auf einen Blick</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir Sie darüber, welche personenbezogenen Daten wir erheben, wenn Sie unsere Website besuchen oder unsere Dienstleistungen in Anspruch nehmen.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              <strong>Swiss Holz</strong><br />
              Holzweg 12,<br />
              3000 Bern<br />
              E-Mail: info@swisholz.ch
            </p>
          </section> 

          <section className="legal-section">
            <h2>3. Erfassung von Daten auf unserer Website</h2>
            <p>
              Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen einer Bestellung oder Kontaktaufnahme freiwillig mitteilen:
            </p>
            <ul>
              <li><strong>Bestelldaten:</strong> Name, Vorname, Lieferadresse, E-Mail-Adresse, Telefonnummer/WhatsApp für Lieferbenachrichtigungen.</li>
              <li><strong>Technische Daten:</strong> IP-Adresse, Server-Logfiles, Browsertyp und Zugriffszeiten zur Sicherstellung eines reibungslosen Betriebs.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Zweck der Datenverarbeitung</h2>
            <p>
              Wir verwenden Ihre Daten ausschliesslich für folgende Zwecke:
            </p>
            <ul>
              <li>Abwicklung Ihrer Bestellungen und Lieferung der Waren.</li>
              <li>Kontaktaufnahme bei Rückfragen zu Ihrer Bestellung.</li>
              <li>Erfüllung gesetzlicher und steuerrechtlicher Aufbewahrungspflichten.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Weitergabe von Daten an Dritte</h2>
            <p>
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, soweit dies zur Vertragserfüllung erforderlich ist (z. B. an das mit der Lieferung beauftragte Transportunternehmen oder an Finanzinstitute zur Zahlungsabwicklung).
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf kostenlose Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
            <p>
              Wenden Sie sich hierfür bitte jederzeit an die im Impressum oder oben angegebene Adresse.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Datensicherheit</h2>
            <p>
              Wir nutzen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
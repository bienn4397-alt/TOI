import Link from "next/link";
import ProductConfigurator from "@/components/ProductConfigurator";

export default function ProductPage() {
  return (
    <main className="product-page">
      <div className="announcement">ÉLORIA · MADE FOR YOUR MEMORIES</div>
      <header className="nav">
        <Link href="/" className="brand">ÉLORIA</Link>
        <nav><Link href="/#collection">Collection</Link><Link href="/#story">Notre histoire</Link><Link href="/#gifting">Offrir</Link></nav>
        <Link href="/#collection" className="nav-cart">Retour</Link>
      </header>

      <div className="breadcrumb"><Link href="/">Accueil</Link><span>/</span><span>Le Collier Souvenir</span></div>
      <ProductConfigurator />

      <section className="product-story">
        <div><p className="eyebrow">POURQUOI ÉLORIA ?</p><h2>Un cadeau qui ne ressemble à aucun autre.</h2></div>
        <div><p>La personnalisation transforme un objet en souvenir. Choisissez une photo qui compte et préparez un cadeau pensé pour être porté, offert et conservé.</p><p>Les informations de personnalisation et les conditions de livraison doivent être finalisées avec votre fournisseur et votre solution de paiement avant la commercialisation.</p></div>
      </section>

      <footer className="footer"><div><div className="brand">ÉLORIA</div><p>Les souvenirs qui restent près de vous.</p></div><div className="footer-links"><a href="#">Livraison</a><a href="#">Retours</a><a href="#">Confidentialité</a><a href="#">Contact</a></div><div className="footer-bottom">© 2026 ÉLORIA · Made for your memories.</div></footer>
    </main>
  );
}

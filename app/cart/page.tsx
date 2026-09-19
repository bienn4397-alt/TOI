"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

function money(value: number) {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export default function CartPage() {
  const { items, subtotal, count, updateQuantity, removeItem, clear } = useCart();

  return (
    <main className="cart-page">
      <div className="announcement">ÉLORIA · MADE FOR YOUR MEMORIES</div>
      <header className="nav"><Link href="/" className="brand">ÉLORIA</Link><nav><Link href="/#collection">Collection</Link><Link href="/#story">Notre histoire</Link><Link href="/#gifting">Offrir</Link></nav><Link href="/products/collier-souvenir" className="nav-cart">Continuer mes achats</Link></header>
      <section className="cart-wrap">
        <div className="cart-heading"><p className="eyebrow">VOTRE SÉLECTION</p><h1>Votre panier <span>{count}</span></h1></div>
        {items.length === 0 ? (
          <div className="empty-cart"><h2>Votre panier est encore vide.</h2><p>Commencez par créer un souvenir personnalisé.</p><Link className="button button-dark" href="/products/collier-souvenir">Découvrir le collier →</Link></div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-thumb">{item.photo ? <img src={item.photo} alt="" /> : <span>É</span>}</div>
                  <div className="cart-item-copy"><p className="eyebrow">COLLECTION SIGNATURE</p><h2>{item.title}</h2><p>{item.offer}</p><small>{item.photo ? "Photo personnalisée ajoutée" : "Photo à personnaliser"}</small></div>
                  <div className="cart-controls"><strong>{money(item.price * item.quantity)}</strong><div><button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div><button className="remove" onClick={() => removeItem(item.id)}>Supprimer</button></div>
                </article>
              ))}
              <button className="clear-cart" onClick={clear}>Vider le panier</button>
            </div>
            <aside className="cart-summary"><p className="eyebrow">RÉCAPITULATIF</p><div><span>Sous-total</span><strong>{money(subtotal)}</strong></div><div><span>Livraison</span><span>{subtotal >= 49 ? "Offerte" : "Calculée à l'étape suivante"}</span></div><hr /><div className="summary-total"><span>Total</span><strong>{money(subtotal)}</strong></div><Link href="/checkout" className="checkout-button">Passer au paiement <span>→</span></Link><small>Le paiement sera activé après connexion de Stripe ou Shopify.</small></aside>
          </div>
        )}
      </section>
      <footer className="footer"><div><div className="brand">ÉLORIA</div><p>Les souvenirs qui restent près de vous.</p></div><div className="footer-links"><Link href="/livraison">Livraison</Link><Link href="/retours">Retours</Link><Link href="/confidentialite">Confidentialité</Link></div><div className="footer-bottom">© 2026 ÉLORIA · Made for your memories.</div></footer>
    </main>
  );
}

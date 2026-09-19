"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";

function money(value:number){return value.toLocaleString("fr-FR",{style:"currency",currency:"EUR"});}

export default function Checkout(){
  const {items,subtotal}=useCart();
  return <main className="checkout-page">
    <header className="checkout-head"><Link href="/" className="brand">ÉLORIA</Link><span>Paiement sécurisé</span></header>
    {items.length===0 ? <section className="checkout-empty"><h1>Votre panier est vide.</h1><Link href="/products/collier-souvenir" className="button button-dark">Retour à la boutique</Link></section> :
    <section className="checkout-grid">
      <div className="checkout-form"><p className="eyebrow">COMMANDE</p><h1>Finalisez votre commande.</h1>
        <div className="form-card"><label>Adresse e-mail<input type="email" placeholder="vous@exemple.fr"/></label><div className="two"><label>Prénom<input placeholder="Prénom"/></label><label>Nom<input placeholder="Nom"/></label></div><label>Adresse<input placeholder="Adresse"/></label><div className="two"><label>Code postal<input placeholder="69000"/></label><label>Ville<input placeholder="Lyon"/></label></div><label>Pays<select defaultValue="FR"><option value="FR">France</option><option value="BE">Belgique</option><option value="CH">Suisse</option></select></label></div>
        <div className="payment-placeholder"><p className="eyebrow">PAIEMENT</p><strong>Le paiement sera activé après connexion de Stripe ou Shopify.</strong><span>Cette étape est volontairement bloquée tant que les clés de paiement de production ne sont pas configurées.</span></div>
      </div>
      <aside className="order-summary"><p className="eyebrow">VOTRE COMMANDE</p>{items.map(i=><div className="order-line" key={i.id}><span>{i.title}<small>{i.offer} · ×{i.quantity}</small></span><strong>{money(i.price*i.quantity)}</strong></div>)}<hr/><div className="order-total"><span>Total</span><strong>{money(subtotal)}</strong></div><button disabled className="checkout-button">Payer maintenant <span>→</span></button></aside>
    </section>}
  </main>
}
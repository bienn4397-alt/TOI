"use client";

import { ChangeEvent, useState } from "react";
import { useCart } from "@/components/CartProvider";

const offers = [
  { id: "one", title: "1 collier", subtitle: "Le choix essentiel", price: 34.9, old: null },
  { id: "two", title: "2 colliers", subtitle: "Le duo · économisez 13,80 €", price: 55.9, old: 69.8 },
  { id: "three", title: "3 colliers", subtitle: "Le coffret famille · économisez 34,80 €", price: 69.9, old: 104.7 },
];

function money(value: number) {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export default function ProductConfigurator() {
  const [offer, setOffer] = useState("two");
  const [photo, setPhoto] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const selected = offers.find((item) => item.id === offer) ?? offers[1];

  function handlePhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(String(reader.result));
    reader.readAsDataURL(file);
  }

  return (
    <div className="configurator">
      <div className="config-gallery">
        <div className="config-image">
          <div className="config-chain" />
          <div className="config-pendant">
            {photo ? <img src={photo} alt="Aperçu de votre photo" /> : <span>Votre<br />photo</span>}
          </div>
          <div className="config-note">APERÇU · PERSONNALISABLE</div>
        </div>
        <div className="thumb-row">
          <div className="thumb active">01</div><div className="thumb">02</div><div className="thumb">03</div>
        </div>
      </div>

      <div className="config-info">
        <p className="eyebrow">COLLECTION SIGNATURE</p>
        <h1>Le Collier Souvenir</h1>
        <p className="config-lead">Un bijou minimaliste qui garde une photo importante près de vous. Personnalisez-le avant de l'ajouter au panier.</p>
        <div className="config-price">{money(selected.price)} {selected.old && <del>{money(selected.old)}</del>}</div>

        <div className="config-block">
          <div className="config-label">1 · CHOISISSEZ VOTRE OFFRE</div>
          <div className="offer-list">
            {offers.map((item) => (
              <button type="button" key={item.id} className={`offer-option ${offer === item.id ? "is-selected" : ""}`} onClick={() => setOffer(item.id)}>
                <span className="offer-radio">{offer === item.id ? "✓" : ""}</span>
                <span className="offer-copy"><strong>{item.title}</strong><small>{item.subtitle}</small></span>
                <span className="offer-money"><strong>{money(item.price)}</strong>{item.old && <del>{money(item.old)}</del>}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="config-block">
          <div className="config-label">2 · AJOUTEZ VOTRE PHOTO</div>
          <label className="upload-box">
            <input type="file" accept="image/*" onChange={handlePhoto} />
            <span className="upload-icon">＋</span>
            <span><strong>{photo ? "Photo sélectionnée" : "Choisir une photo"}</strong><small>JPG, PNG · votre image reste associée à votre commande</small></span>
            <span className="upload-arrow">↗</span>
          </label>
        </div>

        <div className="config-block quantity-block">
          <div className="config-label">3 · QUANTITÉ</div>
          <div className="quantity">
            <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
            <span>{quantity}</span>
            <button type="button" onClick={() => setQuantity(quantity + 1)}>＋</button>
          </div>
        </div>

        <button className="config-add" type="button" onClick={() => { addItem({ id: `collier-${offer}-${photo ? "photo" : "sans-photo"}`, title: "Le Collier Souvenir", offer: selected.title, price: selected.price, quantity, photo }); setAdded(true); }}>
          <span>{added ? "Ajouté au panier ✓" : "Ajouter au panier"}</span>
          <span>{money(selected.price * quantity)} →</span>
        </button>

        {added && <div className="added-message">Votre configuration a été ajoutée au panier.</div>}

        <div className="config-reassurance">
          <span>✓ Paiement sécurisé</span><span>✓ Livraison suivie</span><span>✓ Support client</span>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const bundles = [
  { label: "1 collier", sub: "Le choix essentiel", price: "34,90 €", old: null, badge: null },
  { label: "2 colliers", sub: "Le duo — le plus choisi", price: "55,90 €", old: "69,80 €", badge: "-20%" },
  { label: "3 colliers", sub: "Le coffret famille", price: "69,90 €", old: "104,70 €", badge: "-33%" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="announcement">Livraison offerte dès 49 € · Créé pour vos souvenirs</div>

      <header className="nav">
        <Link href="/" className="brand">ÉLORIA</Link>
        <nav>
          <a href="#collection">Collection</a>
          <a href="#story">Notre histoire</a>
          <a href="#gifting">Offrir</a>
        </nav>
        <Link href="/cart" className="nav-cart">Panier <span>0</span></Link>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">MADE FOR YOUR MEMORIES</p>
          <h1>Some memories<br /><em>deserve to stay close.</em></h1>
          <p className="hero-text">Un bijou pensé autour d'une photo qui compte. Une façon élégante de garder une personne, un moment ou un amour près de soi.</p>
          <div className="hero-actions">
            <a href="/products/collier-souvenir" className="button button-dark">Créer mon souvenir <span>↗</span></a>
            <a href="#story" className="text-link">Découvrir ÉLORIA</a>
          </div>
          <div className="hero-trust"><span>★★★★★</span> Pensé pour les cadeaux qui comptent</div>
        </div>
        <div className="hero-visual">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="pendant">
            <div className="pendant-hole" />
            <div className="pendant-stone">E</div>
            <div className="pendant-shine" />
          </div>
          <div className="chain chain-a" />
          <div className="floating-note">YOUR<br /><strong>MEMORY</strong></div>
        </div>
      </section>

      <section className="manifesto">
        <p>NOT JUST A GIFT</p>
        <h2>One photo.<br /><span>One feeling.</span><br />Forever.</h2>
      </section>

      <section id="story" className="story section">
        <div className="story-image">
          <div className="photo-frame"><span>Votre photo</span></div>
        </div>
        <div className="story-copy">
          <p className="eyebrow">LE GESTE ÉLORIA</p>
          <h2>Transformez un souvenir en objet que l'on garde.</h2>
          <p>Choisissez une photo. Nous la transformons en un détail invisible à première vue, révélé par la lumière. Le résultat est intime, personnel et pensé pour être offert.</p>
          <div className="steps">
            <div><b>01</b><span>Choisissez votre photo</span></div>
            <div><b>02</b><span>Personnalisez votre bijou</span></div>
            <div><b>03</b><span>Recevez votre souvenir</span></div>
          </div>
        </div>
      </section>

      <section id="collection" className="product section">
        <div className="product-gallery">
          <div className="product-card large"><div className="mini-pendant">E</div></div>
          <div className="gallery-caption">COLLECTION SIGNATURE · 01 / 03</div>
        </div>
        <div className="product-info">
          <p className="eyebrow">COLLECTION SIGNATURE</p>
          <h2>Le Collier Souvenir</h2>
          <div className="rating">★★★★★ <span>Collection signature</span></div>
          <p className="price">34,90 €</p>
          <p className="description">Votre photo devient le cœur secret d'un bijou minimaliste. À porter tous les jours ou à offrir pour une occasion qui mérite plus qu'un cadeau ordinaire.</p>

          <div className="bundle-title">CHOISISSEZ VOTRE OFFRE</div>
          <div className="bundle-list">
            {bundles.map((b, i) => (
              <div className={`bundle ${i === 1 ? "selected" : ""}`} key={b.label}>
                <div className="radio">{i === 1 ? "✓" : ""}</div>
                <div className="bundle-main"><strong>{b.label}</strong><span>{b.sub}</span></div>
                <div className="bundle-price">{b.badge && <small>{b.badge}</small>}<strong>{b.price}</strong>{b.old && <del>{b.old}</del>}</div>
              </div>
            ))}
          </div>

          <button className="add-button">Personnaliser mon collier <span>→</span></button>
          <div className="shipping-points"><span>✓ Livraison suivie</span><span>✓ Paiement sécurisé</span><span>✓ Emballage cadeau disponible</span></div>
        </div>
      </section>

      <section className="reveal">
        <div className="reveal-content">
          <p className="eyebrow">THE REVEAL</p>
          <h2>Le plus beau moment,<br /><em>c'est quand il découvre.</em></h2>
          <p>Un geste simple. Une surprise personnelle. Un souvenir qui devient un objet à garder.</p>
          <a href="/products/collier-souvenir" className="button button-light">Voir les idées cadeaux</a>
        </div>
        <div className="reveal-pendant"><div>✦</div></div>
      </section>

      <section id="gifting" className="gifting section">
        <div>
          <p className="eyebrow">POUR QUI ?</p>
          <h2>Un souvenir pour<br />chaque histoire.</h2>
        </div>
        <div className="gift-grid">
          {["Pour elle", "Pour maman", "Pour un couple", "Pour un animal"].map((x, i) => (
            <div className="gift-tile" key={x}><span>0{i + 1}</span><h3>{x}</h3><p>Une photo. Une histoire. Un cadeau vraiment personnel.</p><b>Découvrir →</b></div>
          ))}
        </div>
      </section>

      <section className="reviews">
        <p className="eyebrow">L'INTENTION ÉLORIA</p>
        <div className="review-grid">
          <blockquote>“Un cadeau pensé autour d’une photo qui compte.”<footer>— ÉLORIA · manifeste de marque</footer></blockquote>
          <blockquote>“Un objet discret, personnel, fait pour accompagner un souvenir.”<footer>— ÉLORIA · manifeste de marque</footer></blockquote>
          <blockquote>“Un cadeau qui raconte une histoire plutôt qu’un simple produit.”<footer>— ÉLORIA · manifeste de marque</footer></blockquote>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">MADE FOR YOUR MEMORIES</p>
        <h2>Les souvenirs<br /><em>qui restent près de vous.</em></h2>
        <a href="/products/collier-souvenir" className="button button-light">Créer mon souvenir <span>↗</span></a>
      </section>

      <footer className="footer">
        <div><div className="brand">ÉLORIA</div><p>Des cadeaux qui transforment vos souvenirs en émotions durables.</p></div>
        <div className="footer-links"><a href="#collection">Collection</a><a href="#story">Notre histoire</a><a href="#">Livraison</a><a href="#">Retours</a><a href="#">Contact</a></div>
        <div className="footer-bottom">© 2026 ÉLORIA · Made for your memories.</div>
      </footer>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";

const reviews = [
  { name: "Sophie M.", quote: "A placeholder review — the packaging alone made the moment feel extraordinary.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=220&q=80" },
  { name: "Léon D.", quote: "A placeholder review — it felt less like a gift, more like holding a memory.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=220&q=80" },
  { name: "Camille R.", quote: "A placeholder review — delicate, personal, and beautifully considered.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=220&q=80" },
];

const faqs = ["How does personalization work?", "How long will my order take?", "Where do you deliver?", "Can I return a personalized piece?", "What photo should I choose?", "What is it made from?"];

function Arrow() { return <span className="arrow">↗</span>; }

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <main>
      <header className={`nav ${scrolled ? "nav-solid" : ""}`}>
        <a className="brand" href="#top">ÉLORIA</a>
        <nav className={menu ? "shown" : ""}>
          <a href="#shop">Shop</a><a href="#story">Our story</a><a href="#personalize">Personalize</a><a href="#journal">Journal</a>
        </nav>
        <div className="nav-actions"><button onClick={() => setCart(true)} aria-label="Open cart" className="bag">Bag <sup>0</sup></button><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><i /><i /></button></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy reveal"><p className="eyebrow">PERSONAL GIFTS, THOUGHTFULLY MADE</p><h1>Some memories<br />deserve to <em>stay close.</em></h1><p className="sub">A photo. A feeling. A gift made just for them.</p><a className="link-arrow" href="#personalize">Create your memory <Arrow /></a></div>
        <div className="hero-art" aria-label="A personal locket on a silk ribbon"><div className="sun" /><div className="hero-image" /><div className="product-orbit"><span>ÉLORIA</span><span>· MADE FOR YOUR MEMORIES ·</span></div></div>
        <p className="scroll-note">SCROLL TO REMEMBER <span>↓</span></p>
      </section>

      <section className="manifesto"><p className="eyebrow">OUR POINT OF VIEW</p><h2>One photo.<br /><em>One memory.</em><br />Forever.</h2><p>ÉLORIA turns the moments you never want to lose into gifts you can keep close.</p><div className="manifesto-line" /></section>

      <section className="story section-grid" id="story"><div className="story-image image-hover"><div className="caption">01 / THE IDEA</div></div><div className="story-copy"><p className="eyebrow">THE IDEA</p><h2>It’s not just jewelry.<br /><em>It’s a memory.</em></h2><p>Designed around your photo, made to carry a feeling wherever life takes you.</p><a className="link-arrow" href="#shop">Discover our story <Arrow /></a></div></section>

      <section className="steps" id="personalize"><div className="steps-intro"><p className="eyebrow">MADE FOR YOUR MEMORY</p><h2>Your photo.<br /><em>Your story.</em><br />Your gift.</h2></div><div className="steps-list">{[["01","Choose your photo","The glances, the adventures, the people you never want to forget."],["02","We create your piece","Made with care in our atelier, around the moment that is yours."],["03","Give them the memory","A gift that carries more than words ever could."]].map(([n,t,d])=><article className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><Arrow /></article>)}</div></section>

      <section className="signature" id="shop"><div className="signature-copy"><p className="eyebrow">THE SIGNATURE PIECE</p><h2>A keepsake,<br /><em>made personal.</em></h2><p>Minimal. Meaningful. Made for them.</p><button onClick={() => setCart(true)} className="dark-button">Discover ÉLORIA <Arrow /></button></div><div className="signature-art"><div className="signature-photo" /><div className="round-label">MADE FOR · YOUR MEMORIES ·</div><p>THE MEMENTO LOCKET<br /><strong>from €89</strong></p></div></section>

      <section className="gifting"><div className="gift-image image-hover" /><div className="gift-copy"><p className="eyebrow">THE GIFT THAT SAYS IT ALL</p><h2>Some gifts are opened.<br /><em>Others are remembered.</em></h2><p>Each piece arrives in our signature presentation box, ready to become part of the moment.</p><a className="link-arrow" href="#shop">Explore the collection <Arrow /></a></div></section>

      <section className="reviews"><div className="review-head"><p className="eyebrow">NOTES FROM YOU</p><h2>Held <em>close.</em></h2><p>Words from our future community.<br />Clearly labelled placeholders until verified reviews are collected.</p></div><div className="review-grid">{reviews.map(r=><article className="review" key={r.name}><div className="stars">★★★★★</div><p>“{r.quote}”</p><div className="reviewer"><img src={r.image} alt="" /><span>{r.name}<small>PLACEHOLDER REVIEW</small></span></div></article>)}</div></section>

      <section className="faq"><p className="eyebrow">THE DETAILS</p><h2>Questions,<br /><em>answered.</em></h2><div className="faq-list">{faqs.map((f,i)=><button className="faq-item" key={f} onClick={()=>setOpen(open===i?null:i)}><span>{f}</span><b>{open===i?"−":"+"}</b>{open===i&&<small>Our team will make every detail simple and thoughtful. Full guidance will be available with your order.</small>}</button>)}</div></section>

      <section className="closing"><div className="closing-image" /><div className="closing-content"><p className="eyebrow">A MOMENT, KEPT</p><h2>Keep what<br />matters <em>close.</em></h2><p>Made for your memories.</p><a href="#personalize" className="light-button">Create your memory <Arrow /></a></div></section>
      <footer><a className="brand" href="#top">ÉLORIA</a><p>Made for your memories.</p><div><a href="#shipping">Shipping & returns</a><a href="#faq">Care guide</a><a href="#journal">Instagram</a></div><small>© 2025 ÉLORIA. All rights reserved.</small></footer>
      {cart && <aside className="cart"><button onClick={()=>setCart(false)} aria-label="Close cart">×</button><p className="eyebrow">YOUR BAG</p><h2>Your memories<br />are waiting.</h2><p className="empty">Your bag is currently empty.</p><a className="dark-button" href="#shop" onClick={()=>setCart(false)}>Explore pieces <Arrow /></a></aside>}
      {cart && <div className="scrim" onClick={()=>setCart(false)} />}
    </main>
  );
}

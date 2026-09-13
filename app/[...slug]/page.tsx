import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const title = slug.join(" ").replace(/-/g, " ");
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem", textAlign: "center" }}>
    <div><p className="eyebrow">ÉLORIA / COMING SOON</p><h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 9vw, 8rem)", fontWeight: 500, margin: 0, textTransform: "capitalize" }}>{title}</h1><p style={{ margin: "2rem auto", maxWidth: 420, lineHeight: 1.6 }}>This thoughtful space is being prepared for your memories.</p><Link className="dark-button" href="/">Return home <span className="arrow">↗</span></Link></div>
  </main>;
}

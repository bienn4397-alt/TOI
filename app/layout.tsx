import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "ÉLORIA — Les souvenirs qui restent près de vous",
  description: "ÉLORIA transforme vos photos et vos souvenirs en cadeaux personnalisés à garder près de soi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ÉLORIA — Made for your memories.",
  description: "Personal gifts made to keep your memories close.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

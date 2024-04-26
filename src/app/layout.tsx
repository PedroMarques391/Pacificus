import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Main Title",
  description: "Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={"playfair-display-font"}>
        {children}
        </body>
    </html>
  );
}

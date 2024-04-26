import type { Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: `Pacificus & Associados`,
  description: "Pacificus & Associados",
  authors: [{name: "Pedro Marques", url: "https://pedromarques391.github.io/portfolio/"}],
  creator: "Pedro Marques",
  icons: "/Logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    lang="pt-br" 
    className="!scroll-smooth">
      <body className={"playfair-display-font"}>
        {children}
        </body>
    </html>
  );
}

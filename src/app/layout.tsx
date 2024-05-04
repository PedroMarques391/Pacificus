import type { Metadata } from "next";
import "./globals.css";
import { DarkProvider } from "@/context/DarkContext";
import FormProvider from "@/context/FormContext";

export const metadata: Metadata = {
  title: `Pacificus & Associados`,
  description: "Pacificus & Associados",
  authors: [{ name: "Pedro Marques", url: "https://pedromarques391.github.io/portfolio/" }],
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
        <FormProvider>
          <DarkProvider>
            {children}
          </DarkProvider>
        </FormProvider>
      </body>
    </html>
  );
}

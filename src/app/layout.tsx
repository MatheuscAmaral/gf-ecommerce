import type { Metadata } from "next";
import "./globals.css";
import Header from "../app/components/header";
import Footer from "../app/components/footer";

export const metadata: Metadata = {
  title: "Gf Impports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link 
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" 
            rel="stylesheet" 
        />
      </head>
      <body className="grid grid-rows-[auto,1fr,auto] min-h-screen relative">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

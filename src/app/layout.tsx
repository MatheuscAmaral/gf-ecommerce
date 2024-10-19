
import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientOnly from "../app/clientOnly"; 

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="grid grid-rows-[auto,1fr,auto] min-h-screen relative w-full max-w-full overflow-x-hidden">
        <ClientOnly>
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}

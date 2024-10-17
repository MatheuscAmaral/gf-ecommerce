"use client";

import { usePathname } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import CartProvider from "./contexts/cartContex";


export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return <CartProvider>
      {children}
    </CartProvider>;
  }

  return (
    <CartProvider>
      <Header/>
      {children}
      <Footer/>
    </CartProvider>
  );
}

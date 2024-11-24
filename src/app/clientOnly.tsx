"use client";

import { usePathname } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import CartProvider from "./contexts/cartContex";
import { Provider } from 'react-redux';
import { store } from '../store/store';


export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return <CartProvider>
      {children}
    </CartProvider>;
  }

  return (
    <Provider store={store}>
      <CartProvider>
        <Header/>
        {children}
        <Footer/>
      </CartProvider>
    </Provider>
  );
}

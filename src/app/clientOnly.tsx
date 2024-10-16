"use client";

import { usePathname } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return <>{children}</>;
  }

  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
}

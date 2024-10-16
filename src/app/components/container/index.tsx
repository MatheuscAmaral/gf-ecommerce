'use client'

import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const Container = ({ children }: { children: ReactNode }) => {
    const path = usePathname();

    return (
        <div className={`min-h-screen w-full mx-auto select-none relative ${path.includes("/catalog") && !path.includes("/details")  ? "bg-gray-50" : "bg-white" }`}>
            {children}
        </div>       
    )
}

export default Container;
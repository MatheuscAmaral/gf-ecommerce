import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen w-full mx-auto select-none relative">
            {children}
        </div>       
    )
}

export default Container;
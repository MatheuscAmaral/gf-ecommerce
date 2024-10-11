import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen w-full mx-auto">
            {children}
        </div>       
    )
}

export default Container;
import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen mt-24 px-10 w-full max-w-5xl mx-auto">
            {children}
        </div>       
    )
}

export default Container;
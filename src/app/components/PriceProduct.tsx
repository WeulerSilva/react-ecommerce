import { ReactNode } from "react";

interface PriceLineProps {
    children: ReactNode;
}

export const PriceProduct = ({ children }: PriceLineProps) => {
    return (
        <span className="text-2xl font-bold mr-4 xl:text-3xl">R$ {children}</span>
    )
}
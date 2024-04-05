import { ReactNode } from "react";

interface PriceLineProps {
    children: ReactNode;
}

export const PriceLine = ({ children }: PriceLineProps) => {
    return (
        <span 
            className="flex justify-start items-center text-gray-600 font-semibold line-through"
        >
            R$ {children}
        </span>
    )
}
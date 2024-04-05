import { ReactNode } from "react";

interface PriceLineProps {
    children: ReactNode;
}

export const PriceDescount = ({ children }: PriceLineProps) => {
    return (
        <span 
            className="flex justify-center items-center rounded-md font-semibold text-orange-600
                bg-orange-100 w-12 h-8 xl:text-lg"
        >
            {children}%
        </span>
    )
}
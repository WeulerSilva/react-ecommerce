import Image from "next/image";
import { useEffect, useState } from "react";
import { CartItem } from "../types/CartItem";

type Props = {
  item: CartItem[] | null;
  onClick: () => void;
};

export const CartProductNumber = ({ item, onClick }: Props) => {
  const [cartProductNumber, setCartProductNumber] = useState<number>(0);

  useEffect(() => {
    if (item && item.length !== undefined) {
      setCartProductNumber(item.length);
    }
  }, [item]);

  return (
    <div className="relative cursor-pointer">
      <Image src={"/images/icon-cart.svg"} alt="" width={25} height={25} onClick={() => onClick()} />
      {cartProductNumber > 0 && (
        <div className="flex justify-center items-center absolute top-[-8px] w-5 h-4 left-[10px] rounded-lg bg-orange-500">
          <span className="text-white text-[10px]">{cartProductNumber}</span>
        </div>
      )}
    </div>
  );
};
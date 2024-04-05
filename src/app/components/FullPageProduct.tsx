"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { Collections } from "../types/Collections";
import { PriceLine } from "../components/PriceLine";
import { PriceDescount } from "../components/PriceDescount";
import { PriceProduct } from "../components/PriceProduct";
import { OpenProduct } from "../components/OpenProduct";

interface FullPageProductProps {
  title: string;
  products: Collections[];
}

export const FullPageProduct = ({ title, products }: FullPageProductProps) => {
  const [viewProduct, setViewProduct] = useState<Collections | null>(null);
  const [showProduct, setShowProduct] = useState<boolean>(false);
  const [descountCal, setDescountCalc] = useState<number>(0);

  useEffect(() => {
    if (viewProduct?.descount != null) {
      const discountFactor = 1 - viewProduct.descount / 100;
      const discountedPrice = viewProduct.price * discountFactor;
      const roundedDiscountedPrice = Math.round(discountedPrice);
      setDescountCalc(roundedDiscountedPrice);
    }
  }, [viewProduct]);

  const handleViewProduct = (item: Collections) => {
    setViewProduct(item);
    setShowProduct(true);
  };

  const handleCloseProduct = () => {
    setShowProduct(false);
    setViewProduct(null);
  };

  return (
    <section className="text-black lg:flex lg:justify-center lg:items-center lg:flex-col lg:w-[100vw]">
      {!showProduct && (
        <div className="lg:flex lg:flex-col lg:w-4/5">
          <h1 className={`${showProduct ? "hidden" : "flex"} text-xl border-black border-b-2 mb-12`}>{title}</h1>
          {products.map((item, index) => (
            <div
              key={index}
              className={`flex cursor-pointer border-[3px] border-black ${showProduct ? "hidden" : "flex"} mb-3`}
              onClick={(e) => handleViewProduct(item)}
            >
              <div className="flex items-center w-20 h-32 bg-black">
                <Image src={"/" + item.images.default[0]} width={80} height={80} alt="" />
              </div>

              <div className="flex flex-col ml-5">
                <h4 className="text-lg w-[250px]">{item.name}</h4>
                <div className="flex flex-col">
                  {item.descount && (
                    <>
                      <div>
                        <div className="flex">
                          <PriceProduct>{item.price * (1- item.descount / 100)}</PriceProduct>
                          <PriceDescount>{item.descount}</PriceDescount>
                        </div>
                        <PriceLine>{item.price}</PriceLine>
                      </div>
                    </>
                  )}

                  {item.descount === undefined && <PriceProduct>{item.price}</PriceProduct>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showProduct && viewProduct != null && (
        <OpenProduct viewProduct={viewProduct}  onClose={handleCloseProduct} />
      )}
    </section>
  );
};
"use client"

import { useEffect, useState } from "react";
import { Cart, CartItem } from "../types/CartItem";
import { CartProduct } from "./CartProduct";
import { CartProductNumber } from "./CartProductNumber";

type Props = {
  visible?: boolean
}

export const ShowCart = ({visible}: Props) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[] | null>(null);
  const [amount, setAmount] = useState<number>(0);

  useEffect(()=> {
    if(visible === true) {
      setShowCart(true)
    }
  })


  useEffect(() => {
    const storedCart = localStorage.getItem('ls_cart');
    if (typeof storedCart === 'string') {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);

      // Calcular a soma total dos preços
      const totalAmount = parsedCart.reduce((acc: number, item: any) => {
        return acc + (
            item.descount !== undefined ? +item.price  * (1- item.descount / 100) * item.cartProduct : +item.price * item.cartProduct
          );
      }, 0);
  
      setAmount(totalAmount);
    }
  }, [showCart]);

  

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleRemoveItem = (index: number) => {
    if (cart) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      localStorage.setItem('ls_cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <div>
      <CartProductNumber item={cart} onClick={handleShowCart} />

      <div
        className={`${showCart ? 'flex' : 'hidden'} justify-center items-center flex-col w-[356px] h-auto absolute 
          left-[10px] z-[1] top-[80px] shadow-4xl xl:left-[auto] xl:right-[88px]`}
      >
        <div className="w-full bg-white">
          <h1 className="text-lg text-black font-semibold ml-6 mt-4">Carrinho</h1>
          <span className="w-full flex border-[0.5px] border-gray-400 mt-4"></span>
          {cart == null && <span className="text-black text-lg">Carrinho vazio</span>}
          <div className="flex flex-col overflow-auto w-full h-52">
            {cart &&
              cart.map((item: CartItem, index: number) => (
                <CartProduct key={item.id} item={item} index={index} onClick={(e) => handleRemoveItem(index)} />
            ))}
          </div>
          
        </div>

        <div className="w-full flex flex-col justify-center items-center h-32 border border-t-black bg-white rounded-b-2xl">
          <h2>Total: R$ <span>{amount}</span></h2>

          <div className="flex justify-center items-center cursor-pointer w-[80%] h-10 rounded-md mt-5 bg-orange-500 text-white">
            <span className="font-semibold">Finalizar compras</span>
          </div>        
        </div>
      </div>
    </div>
  );
};
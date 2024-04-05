import Image from "next/image"
import { ArrowToggle } from "./ArrowToggle"
import { PriceProduct } from "./PriceProduct"
import { PriceDescount } from "./PriceDescount"
import { PriceLine } from "./PriceLine"
import { useEffect, useState } from "react"
import { CartNumber } from "./CartNumber"
import { AddCart } from "./AddCart"
import { Collections } from "../types/Collections"
import { ImageDesktop } from "./ImageDesktop"
import { ButtonBack } from "./ButtonBack"

type Props = {
    viewProduct: Collections;
    onClose: () => void;
}

export const OpenProduct = ({viewProduct, onClose}: Props) => {
    const [cartProduct, setCartProduct] = useState<number>(0);
    const [imageToggle, setImageToggle] = useState<number>(0);
    const [descountCal, setDescountCalc] = useState<number>(0);
    const [imageModal, setImageModal] = useState<boolean>(false);
    


    useEffect(()=> {
        if(viewProduct?.descount != null) {
            setDescountCalc(viewProduct.price * (1- viewProduct.descount / 100))
        }
    },[viewProduct]);


    const handleButtonBack = () => {
        onClose();
        setCartProduct(0);
    }

    const handleArrowLeft = () => {
        if(viewProduct?.images.default != null) {
            if(imageToggle < 0) {
                setImageToggle(viewProduct.images.default.length)
            }else (
                setImageToggle(imageToggle -1)
            )
        }
    }

    const handleArrowRight = () => {
        if(viewProduct?.images.default != null) {
            if(imageToggle > viewProduct.images.default.length) {
                setImageToggle(0)
            }else (
                setImageToggle(imageToggle +1)
            )
        }
    }

    const handleCartMinus = () => {
        if(cartProduct > 0) {
            setCartProduct(cartProduct -1);
        }else {
            setCartProduct(0);
        }
    }

    const handleCartPlus = () => {
        if(cartProduct >= 0) {
            setCartProduct(cartProduct +1);
            console.log('its alive')
        }
    }

    const handleImageModal = () => {
        setImageModal(!imageModal);
    }
    
    
    const handleCart = () => {
        if (cartProduct > 0) {
          // Obter o carrinho atual do localStorage
          const storedCart = localStorage.getItem('ls_cart');
          
          // Verificar se os dados do carrinho são um array ou um único objeto
          const currentCart = storedCart ? JSON.parse(storedCart) : [];
      
          // Se não for um array, transforme em um array com o único objeto
          const cartArray = Array.isArray(currentCart) ? currentCart : [currentCart];
      
          // Verificar se o produto já está no carrinho
          const existingProductIndex = cartArray.findIndex(
            (item: any) => item && item.id === viewProduct.id
          );
      
          if (existingProductIndex !== -1) {
            // Se o produto já estiver no carrinho, atualize a quantidade
            cartArray[existingProductIndex].cartProduct += cartProduct;
          } else {
            // Caso contrário, adicione o novo produto ao carrinho
            const newCartItem = {
              id: viewProduct.id || 0,
              name: viewProduct.name || '',
              images: viewProduct.images || { thumbnail: [], default: [] },
              description: viewProduct.description || '',
              price: viewProduct.price || 0,
              descount: viewProduct.descount,
              cartProduct: cartProduct,
            };
      
            cartArray.push(newCartItem);
          }
      
          // Salvar o carrinho atualizado no localStorage
          localStorage.setItem('ls_cart', JSON.stringify(cartArray));
          console.log(localStorage.getItem('ls_cart'));
        }
      };

      const handleCloseModal = () => {
        setImageModal(!imageModal);
      }

      
    return (
        <div className="flex flex-row justify-center items-center lg:h-[91vh]">
            {imageModal &&
                <div className="absolute w-[100vw] h-[100vh] bg-black/75 z-[1] top-0">
                    <div className="flex justify-center items-center h-full">
                        <div className="cursor-pointer absolute top-16 right-[31%]" onClick={handleCloseModal}>
                            <Image src={'/images/icon-close.svg'} width={25} height={25} alt=""/> 
                        </div>
                        <div className="w-[552px] h-full flex items-center">
                            <ImageDesktop item={viewProduct} w={552} h={552}/>
                        </div>
                    </div>
                </div>
            }

            <ButtonBack  back={handleButtonBack}/>


                <div className="xl:flex lg:flex lg:w-[80%]">
                    <div className="relative z-[0] lg:flex-1 lg:flex lg:justify-center lg:items-center">
                        <div className='lg:hidden'>
                            <ArrowToggle src="images/icon-previous.svg" style="left-3" onclick={handleArrowLeft}/>
                            <ArrowToggle src="images/icon-next.svg" style="right-3" onclick={handleArrowRight}/>
                            <Image 
                                src={"/"+viewProduct?.images.default[imageToggle]} 
                                width={100} height={100} 
                                className="w-dvw h-[300px]" 
                                alt=""/>
                        </div>

                        <ImageDesktop item={viewProduct} fun={handleImageModal}/>
                    </div>

            
                    <div className="p-6 lg:flex-1">
                        <span className="text-lg text-orange-600 xl:text-xl xl:font-semibold">Sneakers Company</span>
                        <h4 className="font-bold text-2xl py-3 xl:mt-3 xl:mb-5 xl:text-5xl xl:font-black">{viewProduct?.name}</h4>
                        <p className="text-gray-600 pb-5 xl:mb-3 xl:text-lg">{viewProduct?.description}</p>

                        <div className="flex">
                            {viewProduct?.descount === undefined &&
                                <PriceProduct>{viewProduct?.price}</PriceProduct> 
                            }
                            
                            {viewProduct?.descount !== undefined &&
                                <div className="lg:flex lg:flex-col">
                                    <div className="lg:flex">
                                        <PriceProduct>{descountCal}</PriceProduct> 
                                        <PriceDescount>{viewProduct.descount}</PriceDescount>
                                    </div>
                                    
                                    <div className="absolute right-4 lg:relative lg:right-auto lg:mb-5">
                                        <PriceLine>{viewProduct.price}</PriceLine>
                                    </div>
                                </div>
                                
                            }
                        </div>
                        
                        <div className="lg:flex lg:space-x-5">
                            <CartNumber cart={cartProduct} minus={handleCartMinus} plus={handleCartPlus}/>
                            <AddCart cart={handleCart}/>
                        </div>
                        
                    </div>
                </div>
                    
            </div>
    )
}
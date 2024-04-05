import Image from "next/image";
import { CartItem} from "../types/CartItem"

type Props = {
    item: CartItem;
    index: number;
    onClick: (index: number) => void; 
}

export const CartProduct = ({item,index, onClick} : Props) => {
    return (
        <div key={index} className="flex w-full h-[100px] justify-around items-center mb-4">
            <div>
                <Image src={`/${item.images.thumbnail[0]}`} width={50} height={50} alt="" className="rounded-lg"/>
            </div>
            <div className="flex justify-center items-start flex-col">
                <h6 className="w-[200px]">{item.name}</h6>
                <div className="flex">
                    {item.descount &&
                        <>
                            <span>R${item.price * (1- item.descount / 100)} x {item.cartProduct}</span>
                            <span className="ml-4 font-bold">R${(item.price * (1- item.descount / 100)) * item.cartProduct}</span>
                        </>        
                    }
                    {item.descount === undefined &&
                        <>
                            <span>R${item.price} x {item.cartProduct}</span>
                            <span className="ml-4 font-bold">R${item.price * item.cartProduct}</span>
                        </>
                    }
                </div>
            </div>
            <div className="flex justify-center items-center cursor-pointer" onClick={() => onClick(index)}>
                <Image src={'/images/icon-delete.svg'} width={20} height={20} alt=""/>
            </div>
        </div>
    )
}
import Image from "next/image"

type Props = {
    cart: () => void;
}

export const AddCart = ({cart}: Props) => {
    return (
        <div className="flex justify-center items-center cursor-pointer w-[100%] h-12 rounded-md mt-5 bg-orange-500 text-white lg:h-[65px]">
            <Image src={'images/icon-cart.svg'} className="brightness-[3] mr-3" width={20} height={20} alt=""/>
            <span className="font-semibold" onClick={cart}>Add ao carrinho</span>
        </div>
    )
}
import Image from "next/image"

type Props = {
    minus: () => void;
    cart: number;
    plus: () => void;
}

export const CartNumber = ({minus,cart,plus}: Props) => {
    return (
        <div className="flex justify-center items-center w-[100%] h-12 rounded-md mt-5 bg-gray-100 lg:w-[40%] lg:h-[65px]">
            <div className="w-[30%] flex justify-center items-center cursor-pointer" onClick={minus}>
                <Image src={'/images/icon-minus.svg'} width={20} height={20} alt=""/>
            </div>
            <div className="w-[60%] flex justify-center items-center font-semibold text-black">
                <span>{cart}</span>
            </div>
            <div className="w-[30%] flex justify-center items-center cursor-pointer" onClick={plus}>
                <Image src={'/images/icon-plus.svg'} width={20} height={20} alt=""/>
            </div>
        </div>
    )
}
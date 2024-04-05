import Image from "next/image"
import { Collections } from "../types/Collections"
import { useState } from "react";

type Props = {
    item: Collections;
    fun?: () => void;
    w?:number;
    h?:number;
}

export const ImageDesktop = ({item,fun,w,h}: Props) => {
    const [desktopImageToggle, setDesktopImageToggle] = useState<number>(0);

    const handleToggleImage = (index: number) => {
        setDesktopImageToggle(index)
    }

    return (
        <div className="hidden lg:flex lg:flex-col">
            <Image 
                src={"/"+item?.images.default[desktopImageToggle]} 
                width={w ? w : 445} height={h ? h : 441} 
                className="rounded-2xl cursor-pointer" 
                alt=""
                onClick={fun}/>
            <div className={`flex ${w ? 'justify-evenly' : 'justify-between'} mt-7`}>
                {item.images.thumbnail.map((ite, index) => (
                    <div key={index} onClick={() => handleToggleImage(index)} 
                        className={`${desktopImageToggle === index ? 'border-2 border-orange-500' : ''} cursor-pointer rounded-lg`}
                    >
                        <Image 
                            className={`${desktopImageToggle === index ? 'opacity-30' : ''} rounded-lg cursor-pointer`} 
                            src={'/'+ite} width={92} height={92} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    )
}
"use client"

import Image from "next/image"
import { useState } from "react"
import { MenuList } from "./MenuList";

export const MenuMobile = () => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false);
    const handleMenuMobile = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <div className="flex lg:hidden" onClick={handleMenuMobile}>
            <Image src={menuToggle ? './images/icon-close.svg' : './images/icon-menu.svg'}
                 width={25} height={25} alt=""
                 className="relative z-[3]"/>
            {menuToggle &&
                <div className="w-dvw h-dvh absolute flex top-[-25px] left-[-25px] z-[2]">
                    <div className="w-[75%] h-dvh bg-white pt-24 pl-6 list-none text-lg font-bold leading-10">
                        <MenuList/>
                    </div>
                    <div className="w-[25%] h-dvh bg-black/75">

                    </div>
                </div>
                
            }
        </div>
    )
}
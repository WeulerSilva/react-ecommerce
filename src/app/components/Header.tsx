import Image from "next/image"
import { MenuList } from "./MenuList"
import { MenuMobile } from "./MenuMobile"
import { ShowCart } from "./ShowCart"
import Link from "next/link"

export const Header = () => {
    return (
        <header className="flex justify-center">
            <div className="text-black flex w-full justify-between items-center py-6 px-6 lg:px-0 lg:w-4/5 
                lg:border-b-[0.5px] lg:border-b-gray-300 lg:pb-[45px]">
                <div className="flex relative">
                    <MenuMobile/>
                    <div className="mx-6 flex items-center">
                        <Link href={'/'}>
                            <Image src={'./images/logo.svg'} width={100} height={100} className='lg:w-[139px] lg:h-[21px]' alt=""/>
                        </Link>
                    </div>
                    <nav className="hidden lg:flex list-none lg:space-x-6">
                        <MenuList/>
                    </nav>
                </div>
                <div className="flex">
                    <ShowCart/>
                    <div className="w-6 h-6 rounded-full bg-gray-700 ml-6 lg:mr-6"></div>
                </div>
            </div>
        </header>
    )
}
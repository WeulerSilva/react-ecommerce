import Link from "next/link";

export const MenuList = () => {
    return (
        <>
            <Link href={'/collections'}><li className="lg:hover:border-b-4 lg:hover:border-orange-600 lg:pb-10 lg:absolute lg:left-[200px]">Coleção</li></Link>
            <Link href={'/men'}><li className="lg:hover:border-b-4 lg:hover:border-orange-600 lg:pb-10 lg:absolute lg:left-[280px]">Masculino</li></Link>
            <Link href={'/women'}><li className="lg:hover:border-b-4 lg:hover:border-orange-600 lg:pb-10 lg:absolute lg:left-[380px]">Feminino</li></Link>
            <Link href={'/about'}><li className="lg:hover:border-b-4 lg:hover:border-orange-600 lg:pb-10 lg:absolute lg:left-[470px]">sobre</li></Link>
            <Link href={'/contact'}><li className="lg:hover:border-b-4 lg:hover:border-orange-600 lg:pb-10 lg:absolute lg:left-[540px]">Contato</li></Link>
        </>
    )
}

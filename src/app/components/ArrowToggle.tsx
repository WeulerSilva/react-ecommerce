import Image from "next/image";

type Props = {
    src: string;
    style: string;
    onclick: () => void;
}

export const ArrowToggle = ({src,style, onclick}: Props) => {
    return (
        <div 
            className={`absolute ${style} top-[150px] w-9 h-9 rounded-full bg-white flex justify-center items-center`}
            onClick={onclick}>
            <Image src={src} width={14} height={14} alt=""/>
        </div>
    )
}
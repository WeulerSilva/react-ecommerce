type Props = {
    back: () => void;
}

export const ButtonBack = ({back}: Props) => {
    return (
        <div 
            className={`w-16 h-8 flex cursor-pointer justify-center items-center absolute bg-white border border-black
            top-[70px] left-0 z-[1] lg:top-[90px] lg:left-[105px] xl:left-[150px]`}
            onClick={back}>
            <span className="font-semibo">Voltar</span>
        </div>
    )
}
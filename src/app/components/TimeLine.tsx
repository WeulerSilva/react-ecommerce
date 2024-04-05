type Props = {
    left?: boolean;
    right?: boolean;
}

export const TimeLine = ({left,right}: Props) => {
    return (
        <div className="flex justify-center items-center w-full h-4">
            <div className={`w-full h-1 ${left ? 'bg-black' : 'bg-white'}`}></div>
            <div className="w-[35px] h-4 rounded-full bg-orange-600"></div>
            <div className={`w-full h-1 ${right ? 'bg-black' : 'bg-white'}`}></div>
        </div>
    )
}
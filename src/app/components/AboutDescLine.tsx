type Props = { 
    color: string;
    text: string;
}

export const AboutDescLine = ({color,text}: Props) => {
    return (
        <p className={`w-full text-lg px-10 pb-2 ${color}`}>{text}</p>
    )
}
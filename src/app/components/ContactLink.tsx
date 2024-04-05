type Props = {
    name: string;
    link: string;
}

export const ContactLink = ({name,link}: Props) => {
    return (
        <a href={link} className="hover:border-b-4 hover:border-orange-600 mb-4 md:mb-8 lg:mb-0">{name}</a>
    )
}
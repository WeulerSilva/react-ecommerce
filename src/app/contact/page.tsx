import { ContactLink } from "../components/ContactLink";

const page = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex items-center justify-center w-screen h-32 bg-black">
                <h1 className="text-white text-4xl font-semibold">Fale comigo</h1>
            </div>
            <h1 className="text-black text-3xl font-semibold mt-10 text-center">Interessado em criar seu proprio site</h1>
            <h1 className="text-black text-2xl font-semibold border-b border-black mt-4 text-center">
                Então fale comigo atravez dos meios fornecidos abaixo
            </h1>

            <div className="w-screen flex justify-around items-center flex-col text-black mt-28 text-4xl lg:flex-row">
                <ContactLink link="" name="Instagram"/>
                <ContactLink link="" name="Whatsapp"/>
                <ContactLink link="" name="Portifolio"/>
                <ContactLink link="" name="Linkedin"/>
                <ContactLink link="" name="GitHub"/>
            </div>
        </div>
    )
}

export default page;
import { AboutDescLine } from "../components/AboutDescLine";
import { TimeLine } from "../components/TimeLine";

const page = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="w-full h-80 bg-orange-600">
                <div className="pl-6 lg:pl-[166px]">
                    <h6 className="mt-5 mb-4 text-sm lg:mt-16 lg:mb-5">Informações sobre nossa empresa</h6>
                    <h1 className="text-4xl font-bold lg:text-5xl">Nossos objetivos e</h1>
                    <h1 className="text-4xl font-bold mt-3 lg:text-5xl">nossa historia</h1>
                    <p className="text-base w-[300px] font-medium mt-4 lg:w-[600px]">Trazendo sempre a melhor qualidade,sustentabilidade aliado ao maior suporte pós compra da america latina.</p>  
                </div>
            </div>

            <h2 className="text-3xl mt-20 text-black font-normal">Nossas conquistas</h2>

            <div className="flex justify-center items-center w-4/5 h-80 bg-gray-900 mt-4 mb-10">
                <div className="flex flex-col w-full h-full lg:flex-row">
                    <div className="flex-1 bg-slate-200 lg:h-96 xl:h-auto">
                        <TimeLine right/>
                        <div className="flex justify-center items-center flex-col mt-4">
                            <h2 className="text-3xl pb-4">2004</h2>
                            <AboutDescLine color="text-slate-400" text="- Fundada no dia 06 de julho de 2004"/>
                            <AboutDescLine color="text-slate-400" text="- Inalguração da primeira loja 25 de agosto"/>
                            <AboutDescLine color="text-slate-400" text="- Primeira linha de calsados autorais"/>
                            <AboutDescLine color="text-slate-400" text="- Parceria com a marca Stellan Shoes"/>
                        </div>
                    </div>

                    <div className="flex-1 bg-slate-300 lg:h-96 xl:h-auto">
                        <TimeLine left right/>
                        <div className="flex justify-center items-center flex-col mt-4">
                            <h2 className="text-3xl pb-4">2019</h2>
                            <AboutDescLine color="text-slate-100" text="- Grande reestruturação no segmento de E-commerce"/>
                            <AboutDescLine color="text-slate-100" text="- Maior site de calçados da America Latina"/>
                            <AboutDescLine color="text-slate-100" text="- Empresa mais ecologica do Brasil"/>
                            <AboutDescLine color="text-slate-100" text="- Inalguração da 100ª loja 25 de novembro"/>
                        </div>
                    </div>

                    <div className="flex-1 bg-slate-400 lg:h-96 xl:h-auto">
                        <TimeLine left/>
                        <div className="flex justify-center items-center flex-col mt-4">
                            <h2 className="text-3xl pb-4">2024</h2>
                            <AboutDescLine color="text-white" text="- Inicio de importação para EUA 22 de feverreiro"/>
                            <AboutDescLine color="text-white" text="- Maior sites de calçados pela 5ª vez consecutiva"/>
                            <AboutDescLine color="text-white" text="- Empresa mais ecologica do Brasil pela 3ª vez"/>
                            <AboutDescLine color="text-white" text="- Surpresas em breve......................."/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default page;
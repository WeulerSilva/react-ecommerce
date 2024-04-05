"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page= () => {
  const [imageShoes, setImageShoes] = useState<number>(1);

  useEffect(()=> {
    setTimeout(() => {
      if(imageShoes >= 1 && imageShoes < 4) {
        setImageShoes(imageShoes +1);
      }else if(imageShoes === 4) {
        setImageShoes(1);
      }
    },5000)
  },[imageShoes]);

  return (
    <div className="flex justify-center items-center">
      <div className="flex text-black w-[100vw] h-screen bg-orange-600 flex-col lg:flex-row lg:h-[70vh]">
        <div className="flex-1 mt-4 text-white flex justify-start items-center flex-col lg:justify-center lg:mt-0">
          <h1 className="text-4xl font-bold border-b-4 border-b-white">
            <span className="text-black/75">SNEAKERS </span>
             E 
            <span className="text-yellow-200"> VC</span>
            </h1>
          <h2 className="p-4 mt-8 text-5xl uppercase font-bold border-b-4 border-b-white text-center lg:ml-8 lg:p-0">
            Sempre juntos no seu proximo passo
          </h2>
        </div>
        <div className="flex-1 flex justify-center items-center pb-8 lg:pb-0">
          <div className="flex justify-center items-center flex-col">
            <Image src={`/images/product-1/image-product-${imageShoes}.jpg`} width={400} height={400} alt=""/>
            <h1 className="text-white text-3xl">Nossas Edições Limitadas</h1>
            <div className="flex justify-center items-center cursor-pointer bg-white text-orange-600 w-40 h-8 font-semibold mt-2
                hover:bg-orange-600 hover:text-white">
              <Link href={'/collections'}>
                <h2>CONHEÇA AGORA {'>'}</h2>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;
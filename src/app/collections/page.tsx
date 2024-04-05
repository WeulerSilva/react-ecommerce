"use client"

import { FullPageProduct } from "../components/FullPageProduct";
import data from "@/app/data/data.json"; 

const page = () => {
    return (
        <>
            <FullPageProduct title="Coleção" products={data.collections}/>
        </>

    )    
}

export default page;
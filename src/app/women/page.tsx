import { FullPageProduct } from "@/app/components/FullPageProduct";
import data from "@/app/data/data.json"; 

const page = () => {
    return (
        <FullPageProduct title="Feminino" products={data.women}/>
    )
}

export default page;
import { FullPageProduct } from "../components/FullPageProduct"
import data from '@/app/data/data.json';

const page = () => {
    return (
        <FullPageProduct title="Masculino" products={data.men}/>
    )
}

export default page;
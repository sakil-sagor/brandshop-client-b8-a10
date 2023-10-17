import useBrands from "../../Hooks/useBrands";
import SingleBrands from "./SingleBrands";


const AllBrands = () => {

    const [brands] = useBrands();
    console.log(brands)
    return (
        <div className="mt-8">
            <div className="grid grid-cols-3 gap-6">
                {
                    brands.map(brand =>
                        <SingleBrands key={brand._id} brand={brand}></SingleBrands>
                    )
                }
            </div>
        </div>
    );
};

export default AllBrands;
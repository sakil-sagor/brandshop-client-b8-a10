import useBrands from "../../Hooks/useBrands";
import SingleBrands from "./SingleBrands";


const AllBrands = () => {

    const [brands] = useBrands();

    return (
        <div className="mt-8">
            <div className="mx-auto text-center my-12">
                <h2 className="text-4xl font-bold text-blue-600">Our Top Brands</h2>
                <br />
                <hr className=" w-1/6 text-center mx-auto" />
            </div>
            <div className="grid grid-cols-2  lg:grid-cols-3 gap-6">
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
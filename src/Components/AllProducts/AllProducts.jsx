import useProducts from "../../Hooks/useProducts";
import SingleProduct from "./SingleProduct";


const AllProducts = () => {
    const [products] = useProducts();

    return (
        <div className="my-8 min-h-screen container mx-auto px-2">

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    products.map(product =>
                        <SingleProduct key={product._id} product={product}></SingleProduct>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;
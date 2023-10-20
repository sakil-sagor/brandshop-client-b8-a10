import useProducts from "../../Hooks/useProducts";
import SingleProduct from "./SingleProduct";


const AllProducts = () => {
    const [products] = useProducts();

    return (
        <div className="my-8 min-h-screen container mx-auto px-2">
            <div className="mx-auto text-center my-12">
                <h2 className="text-4xl font-bold text-blue-600">Most Selling Products</h2>
                <br />
                <hr className=" w-1/6 text-center mx-auto" />
            </div>
            <div className="grid grid-cols-4 gap-6">
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
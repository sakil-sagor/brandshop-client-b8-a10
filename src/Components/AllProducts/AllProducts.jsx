import useProducts from "../../Hooks/useProducts";
import SingleProduct from "./SingleProduct";


const AllProducts = () => {
    const [products] = useProducts();
    console.log(products)
    return (
        <div className="mt-8">
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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../../Components/AllProducts/SingleProduct";
import Loading from "../../Components/Loading/Loading";

const BrandProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { _id } = useParams();
    useEffect(() => {
        setLoading(true)
        const url = `http://localhost:5000/brands/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
        setLoading(false)
    }, []);

    return (

        <div className="container mx-auto px-2 min-h-screen">
            <div className="my-8">

                {
                    loading ? <Loading></Loading>
                        :
                        <div className="grid grid-cols-4 gap-6">
                            {

                                products.map(product =>
                                    <SingleProduct key={product._id} product={product} ></SingleProduct>
                                )
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default BrandProducts;
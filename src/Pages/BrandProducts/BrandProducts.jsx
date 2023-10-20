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
        const url = `https://assten-server.vercel.app/brands/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            }
            )

    }, []);

    return (

        <div className="container mx-auto px-2 min-h-screen">
            <div className="my-8">
                {
                    loading ?
                        <Loading></Loading>
                        :
                        <div>
                            {
                                products.length == 0 ?
                                    <div className="mt-32 font-bold text-2xl text-center  text-blue-500">
                                        <h2 className="text-4xl mb-4 text-red-700">Opps! </h2>
                                        <h2>There are no any Product under this Brand.</h2>
                                    </div>
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
                }

            </div>
        </div>
    );
};

export default BrandProducts;
import { useContext, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import useProducts from "../../Hooks/useProducts";

const DetailsProduct = () => {
    const { user, } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const { _id } = useParams();
    const [products] = useProducts();
    const singleProduct = products.find(product => product._id === _id)


    // add to cart product 
    const addToCart = () => {
        setLoading(true)
        let orderDetails = {};

        orderDetails = { ...orderDetails, email: user.email, id: _id }
        console.log(orderDetails)
        fetch('http://localhost:5000/addToCart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success("Successfully added to cart.");
                    setLoading(false)

                }
                if (data === 0) {
                    toast.error("This Product Allready in your cart! ");
                    setLoading(false)
                }

                if (data.error) {

                    toast.error(" failed");
                }
            })
    }
    return (
        <div className="container mx-auto px-2 min-h-screen">
            <div className="my-12">
                <div className="grid grid-cols-2 gap-x-8">
                    <div className="border ">
                        <img className="rounded" src={singleProduct?.image} alt="" />
                    </div>
                    <div className=" ">
                        <div>
                            <p className="font-bold text-2xl ">{singleProduct?.productName}</p>
                        </div>
                        <div className="flex text-gray-500">
                            <p className="mr-2">Brand:</p>
                            <p className="">{singleProduct?.brandName}</p>
                        </div>
                        <div className="flex text-gray-500">
                            <p className="mr-2">Category:</p>
                            <p>{singleProduct?.type}</p>
                        </div>
                        <div className="flex text-gray-500">
                            <p className="mr-2">Price:</p>
                            <p className="font-semibold text-blue-700">{singleProduct?.price}</p>
                        </div>
                        <div>
                            <Rating
                                className='text-sm text-yellow-600'
                                initialRating={singleProduct?.rating}
                                readonly
                                emptySymbol="far fa-star star-icon"
                                fullSymbol="fas fa-star star-icon"
                            >
                            </Rating>
                        </div>
                        <div>
                            <div className='my-4 flex gap-x-2'>
                                <button className='  border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-200  py-1 px-2 rounded'>Buy Now</button>
                                <button onClick={addToCart} className='bg-blue-500 hover:bg-transparent border hover:text-blue-500 border-blue-500 duration-200 text-white py-1 px-2 rounded'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{singleProduct?.description}</p>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="light"
            />
        </div>
    );
};

export default DetailsProduct;
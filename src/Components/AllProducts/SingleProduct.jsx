import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { brandName, image, _id, productName, price, description } = product;
    return (
        <div className="  shadow-xl p-2 bg-pink-200 rounded-md">
            <div className='w-full'>
                <img className="w-full" src={image} alt="" />
            </div>
            <div>
                <div className='flex justify-between'>
                    <h2>{productName}</h2>
                    <h3>{price}</h3>
                </div>
                <div>
                    {description}
                </div>
                <div>
                    <Link to=''>  <button>Add to Cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;


// productName: '',
// brandName: '',
// type: '',
// price: '',
// rating: '',
// description: '',
// image: ''
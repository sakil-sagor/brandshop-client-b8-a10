import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const SingleProduct = ({ product }) => {
    const { brandName, image, description, type, _id, productName, price, rating } = product;
    return (
        <div className="flex  flex-col h-full  shadow-xl hover:shadow-2xl duration-200  bg-pink-50 rounded-md relative">
            <div className='w-full flex-grow'>
                <img className="w-full rounded" src={image} alt="" />
            </div>
            <div className='p-2'>
                <div className='flex justify-between'>
                    <h2 className='font-bold '>{productName}</h2>
                    <p className='text-blue-700 font-bold text-lg'>${price}</p>
                </div>
                <div className='flex justify-between mt-1'>
                    <p className='text-gray-400 text-sm'>{brandName}</p>
                    <Rating
                        className='text-sm text-yellow-600'
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star star-icon"
                        fullSymbol="fas fa-star star-icon"
                    >
                    </Rating>
                </div>
                {/* <div className='my-2'>
                    <p>{description.split(" ").slice(0, 20).join(" ")}...</p>
                </div> */}
                <div className='my-4 grid grid-cols-2 gap-x-6'>
                    <Link to={`/product/${_id}`} >  <button className='  border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-200  py-1 w-full rounded'>Details</button></Link>
                    <Link to={`/updateProduct/${_id}`} >  <button className='bg-blue-500 hover:bg-transparent border hover:text-blue-500 border-blue-500 duration-200 text-white py-1 w-full rounded'>Update</button></Link>
                </div>
            </div>
            <div className='absolute bg-blue-400 text-white px-2 rounded py-1 '>
                <p>{type}</p>
            </div>
        </div>
    );
};

export default SingleProduct;


import React from 'react';
import './AllArea.css';

// home page section 

const AllArea = () => {
    return (
        <div className=" lg:py-24 all-area">
            <div className="container m-auto full-width-all py-24  shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center items-center px-2 ">

                    <div className="py-4">
                        <h1 className="text-white text-4xl font-semibold">Enjoy Your All Tours with Us</h1>
                        <h1 className="text-white text-6xl font-semibold py-8">Travel is Life</h1>
                        <p className="text-white text-lg font-semibold mt-8">
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for Travel.
                        </p>
                    </div>
                    <div className="py-4  ">
                        <div className="w-full ">
                            <div className="text-white  w-full block bg-pink-500 py-4 px-5 rounded-lg duration-500 text-xl font-semibold hover:bg-pink-700" > Book Now<i class="fas fa-arrow-right ml-2"></i></div>
                        </div>
                        <br />
                        <div className="w-full">
                            <div className="text-white w-full block bg-pink-500 py-4 px-5 rounded-lg  duration-500 text-xl font-semibold hover:bg-pink-700" > Find Tour Plan <i class="fas fa-arrow-right ml-2"></i></div>
                        </div>
                        <br />
                        <div>
                            <div className="text-white bg-pink-500 w-full block py-4 px-5 rounded-lg  duration-500 text-xl font-semibold hover:bg-pink-700" > Booking Status <i class="fas fa-arrow-right ml-2"></i></div>
                        </div>
                        <br />
                        <div>
                            <div className="text-white bg-pink-500 py-4 px-5 w-full block rounded-lg duration-500  text-xl font-semibold hover:bg-pink-700" >Emergency Contact <i class="fas fa-arrow-right ml-2"></i></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllArea;
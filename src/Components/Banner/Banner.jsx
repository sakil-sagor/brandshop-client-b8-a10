
import banner from "../../assets/banner.png";
const Banner = () => {
    return (
        <div className="bg-blue-100">
            <div className="container mx-auto px-2 ">
                <div className="">
                    <div className="grid grid-cols-2 pt-8">
                        <div className="py-12">
                            <p className="font-semibold"> Discover Excellence with us</p>
                            <hr className="border border-blue-500 w-1/4 mt-2" />
                            <h2 className="text-3xl font-bold my-6">Your Life is

                                <span className="text-blue-500">   Our Vision</span>
                            </h2>
                            <p className="mb-6 font-semibold"> I-Dream is Provide you the best technical product. We make sure our clients satisfaction.</p>
                            <button className="bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded text-white duration-200">Shop Now</button>
                        </div>
                        <div>
                            <img className="rounded-tr-full rounded-tl-full" src={banner} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
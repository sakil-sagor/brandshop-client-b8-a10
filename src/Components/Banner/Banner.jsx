
import banner from "../../assets/banner.png";
const Banner = () => {
    return (
        <div className="container mx-auto px-2">
            <div>
                <div >
                    <div className="py-12">
                        <p className="font-semibold"> Discover Excellence with us</p>
                        <h2 className="text-3xl font-bold my-6">Your Life is
                            <br />
                            <span className="text-blue-500">   Our Vision</span>
                        </h2>
                        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded text-white duration-200">Shop Now</button>
                    </div>
                    <div>
                        <img src={banner} alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
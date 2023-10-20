import { Link } from "react-router-dom";


const SingleBrands = ({ brand }) => {
    const { brandName, image, _id } = brand;
    return (
        <Link to={`brand/${_id}`}>
            <div className="flex flex-col iteam-center justify-center items-center border shadow-xl h-40 md:h-64  rounded">
                <div className="w-full h-5/6 flex-grow">
                    <img className="w-full h-full md:w-2/3 mx-auto" src={image} alt="" />
                </div>
                <div className="py-3">
                    <h3 className="">{brandName}</h3>
                </div>
            </div>
        </Link>
    );
};

export default SingleBrands;
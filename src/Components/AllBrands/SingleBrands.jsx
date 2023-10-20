import { Link } from "react-router-dom";


const SingleBrands = ({ brand }) => {
    const { brandName, image, _id } = brand;
    return (
        <Link to={`brand/${_id}`}>
            <div className="flex flex-col iteam-center justify-center items-center border shadow-xl h-64 rounded">
                <div className="w-full ">
                    <img className="w-2/3 mx-auto" src={image} alt="" />
                </div>
                <div>
                    {/* <h3>{brandName}</h3> */}
                </div>
            </div>
        </Link>
    );
};

export default SingleBrands;